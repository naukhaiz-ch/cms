import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from "./paymentForm"
import { loadStripe } from "@stripe/stripe-js"
import Navbar from "../Navbar"
import Footer from "../Footer"

export default function PaymentComponent(props) {


    return (
        <>
            <Navbar />
            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Checkout
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Checkout</h2>
                        </div>
                    </div>
                </div>
            </div>

            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div class="col-md-7 col-lg-8">
                            <Elements stripe={loadStripe(props.keys.stripe)}>
                                <PaymentForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}