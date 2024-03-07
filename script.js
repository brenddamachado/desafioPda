// peagando as informações
let requesty = new XMLHttpRequest()
requesty.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")
requesty.send()
requesty.onload = function () {
    let personagens = JSON.parse(requesty.response) // array de personagens

    const charactersContainer = document.getElementById('characters-container');

    for (let i = 0; i < personagens.length; i++) {
        const characterDiv = document.createElement('div');
        const imgElement = document.createElement('img');
        const nameDiv = document.createElement('div');
        const genderDiv = document.createElement('div');

        // Atribuir a URL da imagem ao atributo src
        imgElement.src = personagens[i].image;

        // Adicionar a imagem à div
        characterDiv.appendChild(imgElement);

        // Adicionar nome e gênero às divs
        nameDiv.innerText = personagens[i].name;
        genderDiv.innerText = personagens[i].gender;

        // Adicionar as divs ao container no HTML
        characterDiv.appendChild(nameDiv);
        characterDiv.appendChild(genderDiv);
        charactersContainer.appendChild(characterDiv);
    }
}
