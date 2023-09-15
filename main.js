'use strict'

/*    <div class="container">
        <img src="./img/chuu2.jpg" alt="" class="a">
        <div class="b">Chuu from LOONA</div>
        <div class="c">1</div>
        <div class="d">Há 30 minutos</div>
        <div class="e">teste says: 점점 더 두근대는 맘
            전부 다 줄게 take my heart</div>
        <div class="f"> ORBIT teste</div>
        <img src="./img/zap.png" alt="" class="g">
    </div> */

const clientes = [
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'Teste: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'orbit',
        tempoEnvio: '30 minutos',
        plataforma: 'Whatsapp',
        plataformaImg: 'zap.png'
    },
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'HEART attack',
        tempoEnvio: '30 minutos',
        plataforma: 'Whatsapp',
        plataformaImg: 'zap.png'
    },
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'Chuu atende',
        tempoEnvio: '30 minutos',
        plataforma: 'Messenger',
        plataformaImg: 'messenger.png'
    },
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'KIM JIWOO',
        tempoEnvio: '30 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
    },
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'KIM JIWOO',
        tempoEnvio: '30 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
    },    
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'KIM JIWOO',
        tempoEnvio: '30 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
    },    
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'KIM JIWOO',
        tempoEnvio: '30 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
    },
    {
        nome: 'Chuu from LOONA',
        notificacao: '2',
        imagem: 'chuu2.jpg',
        mensagem: 'teste says: 점점 더 두근대는 맘전부 다 줄게 take my heart',
        atendente: 'KIM JIWOO',
        tempoEnvio: '30 minutos',
        plataforma: 'Telegram',
        plataformaImg: 'telegram.png'
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