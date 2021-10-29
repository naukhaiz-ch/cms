import Stripe from 'stripe';
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import appointmentRoutes from './routes/Appointments.js'
import userRoutes from './routes/users.js'
import prescriptionRoutes from './routes/Prescription.js'
import medicineRoutes from './routes/Medicines.js'
import testRoutes from './routes/Tests.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.use('/users', userRoutes)
app.use('/appointments', appointmentRoutes)
app.use('/prescriptions', prescriptionRoutes)
app.use('/medicines', medicineRoutes)
app.use('/tests', testRoutes)


const PORT = process.env.PORT || 5001
const stripe = new Stripe('sk_test_51Jb2uWJnnXXD2F4ybVvuv3lEPd71iD9bib6Isq91MXV13iI3Y77mVVmkciznIBK7lNCa7if6RD4CtwpLTswIJYFa00CXcWD9SU');

//enable cors
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//generate payment request for a card payer
app.post('/stripe', async (req, res) => {

  //user sends price along with request
  const userPrice = parseInt(req.body.price) * 100

  //create a payment intent
  const intent = await stripe.paymentIntents.create({

    //use the specified price
    amount: userPrice,
    currency: 'usd'

  })

  //respond with the client secret and id of the new paymentintent
  res.json({ client_secret: intent.client_secret, intent_id: intent.id })

})

//handle payment confirmations
app.post('/confirm-payment', async (req, res) => {

  //extract payment type from the client request
  const paymentType = String(req.body.payment_type)

  //handle confirmed stripe transaction
  if (paymentType === 'stripe') {

    //get payment id for stripe
    const clientid = String(req.body.payment_id)

    //get the transaction based on the provided id
    stripe.paymentIntents.retrieve(
      clientid,
      function (err, paymentIntent) {

        //handle errors
        if (err) {
          console.log(err)
        }

        //respond to the client that the server confirmed the transaction
        if (paymentIntent.status === 'succeeded') {

          /*YOUR CODE HERE*/

          console.log("confirmed stripe payment: " + clientid)
          res.json({ success: true })
        } else {
          res.json({ success: false })
        }
      }
    )
  }

})



mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false)