// Adiciona todos os elemeentos com a class = personagem  dentro da variável personagem.
const personagens = document.querySelectorAll('.personagem');


// "forEach" - para cada,  ou seja, para cada item da várivel "personagens" será executada a função atribuida
personagens.forEach((personagem) => { //"personagem" representa cada item dentro de "personagens"
    personagem.addEventListener('mouseenter', () => { // "() =>", é uma função criada direto.

        const idSelecionado = personagem.attributes.id.value; // Está atribuindo o valor de cada "id" para a váriavel
        
        if(idSelecionado === 'ultron') return; // se 'ultron' for selecionado, o código n executará nada abaixo

        /* Objetivo 1 - Ao passar o  mouse em cima do persogem: 
            - Adicionar animação de selecionado
            - Remover a animaçção selecionado do personagem anterior
        */
        const personagemSelecionado = document.querySelector('.selecionado'); //Pega o elemento selecionado
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado'); //Adiciona uma "class" para o cada elemento que o mouse passar por cima


        /* Objetivo 2 - Ao passar o  mouse em cima do persogem: 
            - Mudar a imagem do persogem grande
            - Mudar o nome do personagem grande
        */
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        /* ${idSelecionado} - Serve para concatenar
        obs: o código deve estar dentro da `crase`
         */
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`; // Crase serve para adionar a váriavel nas propriedades


        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado; 
        
    })


})

/*Obs: mouseenter - mouse passar por cima do elemento que
       mouseleave - mouse sair de cima do elemento

*/

