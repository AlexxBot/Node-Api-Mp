const express = require('express')
const app = express()

const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-5282779965429676-063020-d6d716ff61a347211a60cc83e8e7666b-270012195'
});


app.get('/', ( req, res) => {
    res.send("<h1>Mercado pago backend</h1>")
})

app.get('/checkout', (req, res) => {
    
    res.send("<h2>Checkout</h2>")
})

app.listen(3000, () =>{
    console.log('server listening on port ' + 3000)
})