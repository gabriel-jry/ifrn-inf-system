// Função para filtrar servidores com base no input de pesquisa
function filterServidores() {
    var input, filter, cards, card, title, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card-servidores");

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.getElementsByClassName("title")[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

// Função para filtrar servidores com base na opção selecionada no filtro
function filtrarServidores() {
    var filtro = document.getElementById("filtro").value.toLowerCase();
    var cards = document.getElementsByClassName("card-servidores");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var campus = card.querySelector(".content-wrapper .info-wrapper .campus").innerHTML.toLowerCase();
        if (filtro === "todos" || campus === filtro) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}
