import { HttpClient } from 'aurelia-fetch-client';

export class Battle {
    queryString = new String(new URLSearchParams(window.location.search));
    pokemonString = this.queryString.slice(3).toLowerCase();
    selected = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png";
    randomDogSrc = "";

    fetchDogs() {
        let client = new HttpClient();

        client.fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((res) => new this.displayDogs(res));
    }
    displayDogs(dogs){
        let output = `<img src="${dogs.message}" class="animated tada" id="dog" alt="dog">`;
        let enemy = document.getElementById("pokemon-right");
        enemy.innerHTML = output;
    }
}
