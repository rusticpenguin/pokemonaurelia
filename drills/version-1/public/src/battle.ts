import { HttpClient } from 'aurelia-fetch-client';
import { log } from 'log.js';
import { initialize } from 'aurelia-pal-nodejs';

let fuck = "";


export class Battle {
    queryString = new String(new URLSearchParams(window.location.search));
    pokemonString = this.queryString.slice(3).toLowerCase();
    selected = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png";
    client = new HttpClient();

    fetchPokemon() {
        // this.client.fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur", {
        // mode: "no-cors"})
        // .then((res) => res.json())
        // .then((res) => res.sprites)
        // .then((res) => res.back_default)
        // .then((res) => new this.displayPokemon(res))
    }

    fetchDogs() {
        let whatAnimal = this.getRandomInt(0, 1)
        if (whatAnimal == 1) {
            this.client.fetch("https://dog.ceo/api/breeds/image/random")
                .then((res) => res.json())
                .then((res) => res.message)
                .then((res) => new this.displayDogs(res));
        } else {
            this.client.fetch("https://cataas.com/cat", {
                mode: "no-cors",
            })

                .then((res) => res.json())
                .then((res) => res.file)
                .then((res) => new this.displayDogs(res));
        }
    }

    displayPokemon() {
        let output = "<p>doesnt work</p>";
        let yeah = document.getElementById("pokemon-left");
        yeah.innerHTML += output
    }

    displayDogs(dogs) {
        let output = `<img src="${dogs}" class="animated tada" id="dog" alt="dog">`;
        let enemy = document.getElementById("pokemon-right");
        enemy.innerHTML += output;
    }

    attack() {
        let player = document.querySelectorAll("progress")[0];
        let enemy = document.querySelectorAll("progress")[1];
        player.value -= this.getRandomInt(0, 20);
        enemy.value -= this.getRandomInt(0, 25);

        this.didWin(player.value, enemy.value)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    didWin(player, enemy) {
        if (player == 0) {
            this.gameoverPlayer();
        } else if (enemy == 0) {
            this.gameoverDog();
        }
    }
    gameoverDog() {
        alert("hi")
    }

    gameoverPlayer() {
        alert("poop")
    }
}