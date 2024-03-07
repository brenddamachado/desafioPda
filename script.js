let requesty = new XMLHttpRequest()
requesty.open("GET","https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")
requesty.send()
requesty.onload = function() {
    let conversor = JSON.parse(requesty.response) // dados da api
    console.log(conversor)

}