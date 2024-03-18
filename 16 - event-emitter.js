
const EventEmitter = require('events')

const customEmitter = new EventEmitter()


// on e emite métodos
// acompanha a ordem
// argumentos adicionais
// módulos integrados utilizam-no


customEmitter.on('response', (user, id) => {  //gera o evento
    console.log(`data received from user: ${user}, id: ${id}`);
});

customEmitter.on('response', () => {  //gera o evento
    console.log('second event');
});

customEmitter.emit('response', 'Bruno', 1995);       //'listen' ao evento para executa-lo com base em seu nome