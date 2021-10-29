import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { createAppointment } from '../../../actions/Appointment'
import { createTest } from '../../../actions/Test'

const axios = require("axios")

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "18px",
            color: "#424770",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: '#cccccc',
            },
            "::placeholder": {
                color: '#888',
            },
        },
        invalid: {
            iconColor: "red",
            color: "red",
        },
    },
}

const CardField = ({ onChange }) => (
    <div className="my-input-box mt-2">
        <label>Enter Card Number</label>
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
)

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        className="btn btn-primary submit-btn"
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? "Processing..." : children}
    </button>
)

export default function PaymentForm(props) {

    const dispatch = useDispatch()
    const location = useLocation()
    const { checkoutType } = location.state
    const localUser = JSON.parse(localStorage.getItem('profile'))

    let history = useHistory()

    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [cardComplete, setCardComplete] = useState(false)
    const [processing, setProcessing] = useState(false)
    const billingDetails = {
        email: localUser?.result?.email,
        name: localUser?.result?.name
    }

    const [totalBill, setTotalBill] = useState(null)
    const [appointmentData, setAppointmentData] = useState({
        checkoutType: '',
        doctorId: '',
        patientId: '',
        totalBill: '',
        appointmentTime: '',
        appointmentStatus: '',
        appointmentDate: ''
    })

    const [labTestData, setLabTestData] = useState({
        totalBill: '',
        patientId: '',
        labId: '',
        testTime: '',
        testDate: '',
        selectedFile: '',
        testName: ''
    })

    useEffect(() => {
        if (checkoutType === 'docAppointment') {
            const { totalBill, patientId, doctorId, appointmentTime, appointmentDate, appointmentStatus } = location.state

            setAppointmentData({
                doctorId: doctorId,
                patientId: patientId,
                totalBill: totalBill,
                appointmentTime: appointmentTime,
                appointmentStatus: appointmentStatus,
                appointmentDate: appointmentDate
            })

            setTotalBill(totalBill)
        }

        if (checkoutType === 'labTest') {
            const { totalBill, patientId, labId, testTime, testDate, testName, testStatus, selectedFile } = location.state

            setLabTestData({
                totalBill: totalBill,
                patientId: patientId,
                labId: labId,
                testTime: testTime,
                testDate: testDate,
                testName: testName,
                selectedFile: selectedFile,
                testStatus: testStatus
            })

            setTotalBill(totalBill)
        }
    })


    //resets state on completion
    const reset = () => {
        setError(null)
        setProcessing(false)
        setSuccess(false)
        setCardComplete(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        ///if stripe api is loaded
        if (!stripe || !elements) {
            return
        }

        //handle errors
        if (error) {
            console.log(error)
            elements.getElement("card").focus()
            return
        }

        if (totalBill === 0) {
            return
        }

        //start processing animation on submit button
        if (cardComplete) {
            setProcessing(true)
        } else {
            return
        }

        //STEP 1:
        //create new payment method based on card and form information
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: billingDetails
        })

        //handle errors, otherwise set the new payment method in state
        if (payload.error) {
            setError(payload.error)
            return
        }

        //STEP 2:
        //create a new payment request and get irs client secret + id from the server
        const intentData = await axios
            .post("http://localhost:5001/stripe", {
                //include the bet amount
                price: totalBill,
            })
            .then(
                (response) => {
                    //SUCCESS: put client secret and id into an object and return it
                    return {
                        secret: response.data.client_secret,
                        id: response.data.intent_id,
                    }
                },
                (error) => {
                    //ERROR: log the error and return
                    setError(error)
                    return error
                }
            )

        //STEP 3:
        //confirm the payment and use the new payment method
        const result = await stripe.confirmCardPayment(intentData.secret, {
            payment_method: payload.paymentMethod.id,
        })

        //handle errors again
        if (result.error) {
            setError(result.error)
            return
        }

        //STEP 4:
        // The payment has been processed! send a confirmation to the server
        if (result.paymentIntent.status === "succeeded") {
            const confirmedPayment = await axios
                .post("http://localhost:5001/confirm-payment", {
                    payment_id: intentData.id,
                    payment_type: "stripe",
                })
                .then(
                    (response) => {
                        return response.data.success
                    },
                    (error) => {
                        console.log(error)
                        setError(error)
                        return error
                    }
                )

            if (confirmedPayment) {
                reset()

                if (checkoutType === 'docAppointment') {
                    dispatch(createAppointment(appointmentData))
                    // alert(JSON.stringify(appointmentData))
                }

                if (checkoutType === 'labTest') {
                    dispatch(createTest(labTestData))
                    // alert(JSON.stringify(labTestData))
                }

                setSuccess(true)
            }
        }
    }

    return (
        // the credit card form
        <form className="p-5" onSubmit={handleSubmit}>

            {error && (
                <>
                    <h5>Error</h5>
                    <button type="button" onClick={(event) => { setError(null) }}>Clear Error</button>
                </>
            )}

            {success && (
                <>
                    <h5>Payment Succeeded</h5>
                    <p>Your appointment has been confirmed</p>
                    <button type="button" className="btn btn-primary submit-btn" onClick={() => { history.push("/") }}>Close</button>
                </>
            )}
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group card-label">
                        <label for="card_name">Total Bill</label>
                        <input id="bet" type="number" value={totalBill} disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group card-label">
                        <label for="card_name">User Name</label>
                        <input id="name" type="text" value={billingDetails.name} disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group card-label">
                        <label for="card_name">Email</label>
                        <input id="name" type="text" value={billingDetails.email} disabled />
                    </div>
                </div>
            </div>
            <CardField
                onChange={(event) => {
                    setError(event.error)
                    setCardComplete(event.complete)
                }}
            />

            <SubmitButton processing={processing} error={error} disabled={!stripe}>
                Make Payment
            </SubmitButton>
        </form>
    )
}