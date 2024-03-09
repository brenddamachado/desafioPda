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
          const imgElement = document.createElement("img");

          // Defina a largura e altura desejadas para as imagens (120x200)
          imgElement.width = 120;
          imgElement.height = 200;

          imgElement.src = personagem.image;
          card.appendChild(imgElement);
          const nomeElement = document.createElement("div");
          nomeElement.innerText = personagem.name;
          card.appendChild(nomeElement);
          const occupationElement = document.createElement("div");
          occupationElement.innerText = personagem.occupation;
          card.appendChild(occupationElement);
          container.appendChild(card);
      }

      $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false, // Desativa a rotação automática
          prevArrow: $('.custom-prev-arrow'),
          nextArrow: $('.custom-next-arrow'),
      });
  }
});
