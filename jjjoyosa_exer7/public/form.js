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
        const newcard = newCard(foodname, imgurl);
        cardOrder(newcard, rank);
        form.reset();        

    });


    function newCard(foodname, imgurl){

        const card = document.createElement('div');
        var img = document.createElement('img');
        img.src = imgurl
        card.innerHTML = foodname, document.body.appendChild(img);
        return card;
    };


    function cardOrder(newcard, rank){

        const existing = Array.from(foodcards.children);
        
        foodcards.insertBefore(newcard, existing[rank+1]);



    }

});