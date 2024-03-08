// peagando as informações
let requesty = new XMLHttpRequest()
requesty.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")
requesty.send()
requesty.onload = function () {
    let personagens = JSON.parse(requesty.response) // array de personagens
const div1=document.getElementById("img")
const div2=document.getElementById("nome")
const div3=document.getElementById("occupation")

div1.innerText = personagens.image
    div2.innerText = personagens.name
    div3.innerText = personagens.occupation
}
