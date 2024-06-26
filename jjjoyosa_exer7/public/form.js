document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('foodForm');
    const foodcards = document.getElementById('foodCards');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const foodname = document.getElementById("foodname").value;
        const desc = document.getElementById("description").value;
        const imgurl = document.getElementById("image").value;
        const rank = document.getElementById("rank").value;

        console.log(foodname, desc, imgurl, rank);
        const newcard = newCard(foodname, desc, imgurl, rank);
        cardOrder(newcard, rank);
        form.reset();        

    });


    function newCard(foodname, desc, imgurl, rank){

        const card = document.createElement('div');
        card.className = "food-cards";
        card.setAttribute('data-rank', rank);
        card.innerHTML = ` <br><img src='${imgurl}' width="500" height="500"> <br> <h2>${foodname}</h2> <p>${desc}</p> <button class="delete">Delete</button> <br><br>`;
        return card;
    };


    function cardOrder(newcard, rank){

        const existingCards = Array.from(foodcards.children);

        let insertIndex = existingCards.findIndex(card => {
            const cardRank = parseInt(card.getAttribute('data-rank'));
            return rank <= cardRank;
        });

        if (insertIndex === -1) {
            insertIndex = existingCards.length;
        }

        foodcards.insertBefore(newcard, existingCards[insertIndex]);

        foodcards.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentNode.remove();
        }
    });


    }

});