const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Luana Silva da Cruz',
        imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQHKHu8OmviPsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646090814681?e=1732147200&v=beta&t=vwxjopuIJHrRvbujkADJInir-3IEwp_wA_hsL7ta7Ks',
        minibio: 'QA, estudando para ser denvolvedora e mãe'
    },
        
        {
            nome: 'Karina Machado da Silva',
            imagem: 'https://www.linkedin.com/in/karina-machado-da-silva-74a91ba3?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABYG-2oB0Ol1RMb9fdaufsSxoRypVNyK0mQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Brvl0wr1cQDOdIJV3zo8xsw%3D%3D',
            minibio: 'QA, com experiência em análise, desenvolvimento, execução de testes'
        },

        {
            nome: 'Heimy Dias',
            imagem: 'https://www.linkedin.com/in/heimydias?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADINxzoBbZ5R204iWs5J6xBbMn-GJSK60Tg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Buxc9R9zoTjKF%2FzncQiEPAw%3D%3D',
            minibio: 'Backend Developer Jr, JavaScript, Spring Boot, Java, SQL'
        }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
