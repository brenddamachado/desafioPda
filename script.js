let requesty = new XMLHttpRequest();
requesty.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265");
requesty.send();

requesty.onload = function () {
    let personagens = JSON.parse(requesty.response); // array de personagens

    const container = document.getElementById("container"); // Container para os cards

    // Percorrer todos os personagens e criar um card para cada um
    for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i];

        // Criar um card para o personagem
        const card = document.createElement("div");
        card.classList.add("card"); // Adicionar uma classe para estilização CSS (pode ajustar conforme necessário)

        // Criar elemento de imagem e adicionar ao card
        const imgElement = document.createElement("img");
        imgElement.src = personagem.image;
        card.appendChild(imgElement);

        // Criar elemento para o nome e adicionar ao card
        const nomeElement = document.createElement("div");
        nomeElement.innerText = personagem.name;
        card.appendChild(nomeElement);

        // Criar elemento para a ocupação e adicionar ao card
        const occupationElement = document.createElement("div");
        occupationElement.innerText = personagem.occupation;
        card.appendChild(occupationElement);

        // Adicionar o card ao container
        container.appendChild(card);
    }
}
