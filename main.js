const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)
for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(let j =0;j<botoes.length;j++){
        botoes[j].classList.remove('ativo')
        }   
        
        
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo')
        
    }         
}

const contador = document.querySelectorAll(".contador")
contador[0].textContent