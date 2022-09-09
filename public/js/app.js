document.addEventListener('DOMContentLoaded', (event) => {
    
    const heroesContainer = document.querySelector('#heroesContainer');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
      }
    
    fetch('./public/data/heroes.json')
    .then(response => response.json())
    .then(data =>{

        shuffle(data);
        data.forEach(hero => {
            heroesContainer.innerHTML += `
            <article class="col-3">
                <h2>${hero.superhero}</h2>
                <img src="./public/assets/${hero.id}.jpg" alt="" width="200">
                <p><strong>Publisher: </strong>${hero.publisher}</p>
                <a class="btn btn-outline-primary w-75" href="./hero-detail.html?id=${hero.id}">Ver Detalles</a>
            </article>
            `
        })
        
        console.log(data);
    })
})