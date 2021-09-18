function render(id, element) {
  document
    .getElementById(id)
    .appendChild(element)
}

function Saudacao({ nome = 'mundo' }) {
   const element = document.createElement('div')
   element.textContent = `Olá, ${nome}`
   
   return element
}

const props = {
  nome: 'Douglas'
};

render('root', Saudacao(props));
