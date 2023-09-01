'use strict'

const clientes = [
    {
        nome: 'Jerome Bueno',
        notificacao: '2',
        imagem: 'jerome.png',
        mensagem: 'Posso realizar o pagamento por...',
        atendente: 'João Paulo',
        tempoEnvio: '30 minutos'
    },
    {
        nome: 'Jerome Bueno',
        notificacao: '2',
        imagem: 'jerome.png',
        mensagem: 'Posso realizar o pagamento por...',
        atendente: 'João Paulo',
        tempoEnvio: '30 minutos'
    },
    {
        nome: 'Daniel Silva',
        notificacao: '1',
        imagem: 'daniel.png',
        mensagem: 'Márcia diz: Bom dia, como posso ajuda...',
        atendente: 'Márcia',
        tempoEnvio: '5 minutos'
    }
]

function criarChat (cliente){
    const container = document.getElementById('chat-container')

    const chat = document.createElement('div')
    chat.classList.add('chat')

    const imagem = document.createElement('img')
    imagem.src = `./img/${cliente.imagem}`  
    imagem.alt = cliente.nome

    const conteudoMeio = document.createElement('div')
    conteudoMeio.classList.add('conteudo-meio')

    const cimaContato = document.createElement('div')
    cimaContato.classList.add('cima-contato')

    const tituloContato = document.createElement('div')
    tituloContato.classList.add('titulo-contato')
    
    const contato = document.createElement('h2')
    contato.classList.add('contato')
    contato.textContent = cliente.nome

    const numeroMensagens = document.createElement('div')
    numeroMensagens.classList.add('numero-mensagens')
    numeroMensagens.textContent = cliente.notificacao

    const tempoEnvio = document.createElement('p')
    tempoEnvio.classList.add('tempo-envio')
    tempoEnvio.textContent = `Há ${tempoEnvio}`

    const mensagem = document.createElement('span')
    mensagem.classList.add('mensagem')
    mensagem.textContent = cliente.mensagem

    const atendente = document.createElement('div')
    atendente.classList.add('atendente')
    mensagem.textContent = cliente.atendente

    tituloContato.replaceChildren(contato, numeroMensagens)
    cimaContato.replaceChildren(tituloContato, tempoEnvio)

    conteudoMeio.replaceChildren(cimaContato,mensagem, atendente)

    chat.replaceChildren(conteudoMeio, imagem)

    container.appendChild(chat)

}

clientes.forEach(criarChat)