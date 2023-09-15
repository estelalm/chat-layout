'use strict'

/*    <div class="container">
        <img src="./img/chuu2.jpg" alt="" class="a">
        <div class="b">Nome contato</div>
        <div class="c">notificação</div>
        <div class="d">Há 30 minutos</div>
        <div class="e">mensagem</div>
        <div class="f"> atendente</div>
        <img src="./img/zap.png" alt="" class="g">
    </div> */

const clientes = [
    {
        nome: 'Chuu do LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'Ives: [chuu.png] Você viu essa mulher? Se não viu, agora está vendo!',
        atendente: 'Ives',
        tempoEnvio: '30 minutos',
        plataforma: 'Whatsapp',
        plataformaImg: 'zap.png'
    },
    {
        nome: 'Sharpay Evans',
        notificacao: '9',
        imagem: 'sharpay.webp',
        mensagem: 'Sharpay: That is insulting! I need more!',
        atendente: 'Ryan Evans',
        tempoEnvio: '2 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
    },
    {
        nome: 'Chuu',
        notificacao: '2',
        imagem: 'chuu.jpg',
        mensagem: 'Chuu: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'Blockberry Creative',
        tempoEnvio: '30 minutos',
        plataforma: 'Wechat',
        plataformaImg: 'wechat.png'
    },
    {
        nome: '+55 11 9000-0000',
        notificacao: '1',
        imagem: 'icone.png',
        mensagem: 'Atendente: Olá! Para fazer sua inscrição...',
        atendente: 'Atendente',
        tempoEnvio: '5 minutos',
        plataforma: 'Messenger',
        plataformaImg: 'messenger.png'
    }
]

function criarChat (cliente){
    const container = document.getElementById('container')

    const chat = document.createElement('div')
    chat.classList.add('container-chat')

    const perfil = document.createElement('img')
    perfil.src = `./img/${cliente.imagem}`  
    perfil.alt = cliente.nome
    perfil.classList.add('perfil')
    
    const contato = document.createElement('h2')
    contato.classList.add('contato')
    contato.textContent = cliente.nome

    const numeroMensagens = document.createElement('div')
    numeroMensagens.classList.add('notificacao')
    numeroMensagens.textContent = cliente.notificacao

    const tempoEnvio = document.createElement('p')
    tempoEnvio.classList.add('tempo-envio')
    tempoEnvio.textContent = `Há ${cliente.tempoEnvio}`

    const mensagem = document.createElement('span')
    mensagem.classList.add('mensagem')
    mensagem.textContent = cliente.mensagem

    const atendenteIcon = document.createElement('img')
    atendenteIcon.src = './img/atendente.png'
    atendenteIcon.alt = 'Ícone de atendente'
    atendenteIcon.classList.add('atendente-icon')

    const atendente = document.createElement('div')
    atendente.classList.add('atendente')
    atendente.textContent = cliente.atendente

    const plataforma = document.createElement('img')
    plataforma.src = `./img/${cliente.plataformaImg}`  
    plataforma.alt = cliente.plataforma
    plataforma.classList.add('plataforma')

    atendente.appendChild(atendenteIcon)
    chat.replaceChildren(perfil, contato, numeroMensagens, tempoEnvio, mensagem, atendente, plataforma)
    container.appendChild(chat)
}

clientes.forEach(criarChat)