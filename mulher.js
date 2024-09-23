const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Luana Silva da Cruz',
    imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQHKHu8OmviPsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646090814681?e=1732147200&v=beta&t=vwxjopuIJHrRvbujkADJInir-3IEwp_wA_hsL7ta7Ks',
    minibio: 'QA, estudando para ser denvolvedora e mãe'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
