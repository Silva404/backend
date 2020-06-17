// usando o express
const express = require('express')
const nunjucks = require('nunjucks')

// atrelando o express a bind
const server = express()

server.use(express.static('public'))

// parametros('view engine', 'ja diz qual o tipo do meu arquivo')
server.set('view engine', 'njk')


//configuração do nunjucks pra usar o express como servidor
nunjucks.configure('views', {
    express: server,
    noCache: true
})



// renderizar minhas paginas html e dar um dominio a elas
server.get('/', (req, res) => {
    res.render('home')
})

server.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

server.get('/about', (req, res) => {
    res.render('about')
})



// escutando a porta do servidor
server.listen(3000, () => {
    console.log('Servidor ligado!')
})