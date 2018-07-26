import { HttpClient } from 'aurelia-fetch-client';
import { log } from 'log.js';
import { initialize } from 'aurelia-pal-nodejs';
export class Battle {
    queryString = new String(new URLSearchParams(window.location.search));
    pokemonString = this.queryString.slice(3).toLowerCase();
    client = new HttpClient();
    url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
    bulbasaur = this.url + "1.png";
    charmander = this.url + "4.png";
    squirtle = this.url + "7.png";
    gameOver = 0;
    animalNames = ["sparky", "patches", "spot", "princess", "daisy", "oscar", "milo"];
    realName = "";

    fetchDogs() {
        let whatAnimal = this.getRandomInt(0, 20);
        if (whatAnimal < 10) {
            this.client.fetch("https://dog.ceo/api/breeds/image/random")
                .then((res) => res.json())
                .then((res) => res.message)
                .then((res) => new this.displayDogs(res));
        } else {
            this.client.fetch("https://thecatapi.com/api/images/get?image_id", {

            })
                .then((res) => res.url)
                .then((res) => new this.displayDogs(res))
        }
    }

    displayDogs(dogs) {
        let output = `<img src="${dogs}" class="animated tada" id="dog" alt="dog">`;
        let enemy = document.getElementById("pokemon-right");
        enemy.innerHTML += output;
    }

    nameAnimal(){
        let number = this.getRandomInt(0, 7);
        this.realName = this.animalNames[number];
    }

    attack() {
        let player = document.querySelectorAll("progress")[0];
        let enemy = document.querySelectorAll("progress")[1];
        player.value -= this.getRandomInt(0, 20);
        enemy.value -= this.getRandomInt(0, 22);

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
        let dog = document.getElementById("dog");
        let vs = document.getElementById("vs");
        dog.classList.add("animationDelayZero", "rotateOutDownLeft");
        vs.classList.add("animated", "fadeOutDown");
        this.gameOver = 1;
    }

    gameoverPlayer() {
        let player = document.getElementById("player");
        let vs = document.getElementById("vs");
        player.classList.add("animationDelayZero", "fadeOutDown");
        vs.classList.add("animated", "fadeOutDown");
        this.gameOver = 1;
    }
}