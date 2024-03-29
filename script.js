document.addEventListener('DOMContentLoaded', function () {
  let requesty = new XMLHttpRequest();
  requesty.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265");
  requesty.send();

  requesty.onload = function () {
      let personagens = JSON.parse(requesty.response);
      const container = document.getElementById("container");

      for (let i = 0; i < personagens.length; i++) {
          const personagem = personagens[i];
          const card = document.createElement("div");
          card.classList.add("card");

          // Adiciona a imagem do personagem
          const imgElement = document.createElement("img");
          imgElement.width = 120;
          imgElement.height = 200;
          imgElement.src = personagem.image;
          card.appendChild(imgElement);

          // Adiciona o nome do personagem
          const nomeElement = document.createElement("div");
          nomeElement.innerText = "Nome: " + personagem.name;
          card.appendChild(nomeElement);

          // Adiciona o nome do primeiro episódio
          const firstEpisodeElement = document.createElement("div");
          firstEpisodeElement.innerText = "Primeiro Episódio: " + personagem.firstEpisode;
          card.appendChild(firstEpisodeElement);

          container.appendChild(card);
      }

      $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow: $('.custom-prev-arrow'),
          nextArrow: $('.custom-next-arrow'),
      });
  }
});
