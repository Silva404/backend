// usando o express
const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')


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
    res.render('portfolio', { items: videos })
})

server.get('/about', (req, res) => {
    const data = {
        imgUrl: 'https://camo.githubusercontent.com/268b1344409fac98c4eeda520482b6910c4ddcba/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67',
        name: 'Breno Silva',
        role: 'Estudante - Rockeseat',
        description: 'Levando você do zero a júnior em tempo recorde,<br>venha já embarcar nesse foguete e atinga o próximo nível',
        link: [
            { name: 'Github', link: 'https://github.com/Silva404' },
            { name: 'Linkedin', link: 'https://www.linkedin.com/in/breno-silva-3604461a5/' }
        ]
    }

    res.render('about')
})



// escutando a porta do servidor
server.listen(5000, () => {
    console.log('Servidor ligado!')
})