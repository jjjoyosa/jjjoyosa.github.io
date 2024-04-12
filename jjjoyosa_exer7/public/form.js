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
        const newcard = newCard(foodname, desc, imgurl);
        cardOrder(newcard, rank);
        form.reset();        

    });


    function newCard(foodname, desc, imgurl){

        const card = document.createElement('div');
        card.className = "food-cards";
        card.innerHTML = ` <br><img src='${imgurl}' width="500" height="500"> <br> <h2>${foodname}</h2> <p>${desc}</p> <button id="delete">Delete</button> <br><br>`;
        return card;
    };


    function cardOrder(newcard, rank){

        const existing = Array.from(foodcards.children);
        
        foodcards.insertBefore(newcard, existing[rank+1]);



    }

});