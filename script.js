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

          // Adicione um estilo diretamente à imagem para definir o tamanho
          imgElement.style.width = "100%";
          imgElement.style.height = "auto";

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
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: $('.custom-prev-arrow'),
          nextArrow: $('.custom-next-arrow'),
      });
  }
});
