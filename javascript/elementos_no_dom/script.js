
let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja do Gintrão";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>trio 1L</h2>
    <img src="garrafas-gintrao-450x4501l-DALL·E.png" alt="três sabores">
    <p>1L de cada sabor gintrão: Azedinho, Docinho, Agridoce.</p>
    <p id="preço trio 1L">R$ 70.00</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)