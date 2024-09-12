// 1) Elementos h1 e a
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

//aplicação de innerText
titulo.innerText = 'Curso de javascript'

//aplicação de innerText
link.innerText = 'proz educação'

//  elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

//Itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>Olá Mundo</li>
  <li>Javascript</li>
  <li>AWS</li>
`
// Itens com links na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://github.com//">Github</a></li>
  <li><a href="https://discord.com/">Discord</a></li>
  <li><a href="https://chatgpt.com/">Chatgpt</a></li>
`