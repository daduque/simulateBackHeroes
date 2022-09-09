document.addEventListener('DOMContentLoaded', (event) => {
    console.log(window.location.search.split('=')[1]);

    const heroId = window.location.search.split('=')[1];
    const heroDetailContainer = document.querySelector('#heroDetailContainer');

    fetch('./public/data/heroes.json')
    .then(response => response.json())
    .then(data =>{ 

        const heroFinded = data.find(hero => hero.id === heroId);

        if(heroFinded){
            console.log(heroDetailContainer);

            heroDetailContainer.innerHTML += `
            <article class="col-3">
                <h2>${heroFinded.superhero}</h2>
                <img src="./public/assets/${heroFinded.id}.jpg" alt="" width="200">
                <p><strong>Publisher: </strong>${heroFinded.publisher}</p>
                <p><strong>Alter Ego: </strong>${heroFinded.alter_ego}</p>
            </article>
            `

        }else{
            console.log('No se encontro el heroe');
        }
    });
});