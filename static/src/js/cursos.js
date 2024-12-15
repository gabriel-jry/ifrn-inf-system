// Função para filtrar cursos com base no input de pesquisa
function filterCourses() {
    var input, filter, cards, card, title, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card-course");

    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.getElementsByTagName("h3")[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

// Função para filtrar cursos com base na opção selecionada no filtro
function filtrarCards() {
    var filtro = document.getElementById("filtro").value;
    var cards = document.getElementsByClassName("card-course");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var categoria = card.getElementsByClassName("category")[0];
        var categoriaValue = categoria.getElementsByTagName("h4")[0].textContent;

        if (filtro === "todos" || categoriaValue.toLowerCase() === filtro.toLowerCase()) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}
