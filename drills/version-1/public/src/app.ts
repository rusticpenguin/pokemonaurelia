import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM, containerless } from "aurelia-framework";
import "./styles.css";
import { isNull, isNullOrUndefined } from "util";


export class App {
    queryString = new URLSearchParams(window.location.search);
    queryStringToString = new String(this.queryString);
    dataString = this.queryStringToString;
    pokemonJSON = "http://localhost:8080/";
    router: Router;
    message = 'Hello World!';
    constructor() { }

    configureRouter(config: RouterConfiguration, router: Router): void {

        config.title = "Pokémon BR";
        config.options.root = "/";
        config.options.pushState = true;
        config.mapUnknownRoutes('notfound')
        config.map([
            { route: ["", "home"], name: "home", moduleId: PLATFORM.moduleName("./home"), nav: true, title: "Home" },
            { route: "about", name: "about", moduleId: PLATFORM.moduleName("./about"), nav: true, title: "About" },
            { route: "battle", name: "battle", moduleId: PLATFORM.moduleName("./battle"), nav: true, title: "Battle" }
        ]);

        this.router = router;
    }

    pokemon = [
        { id: 0, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", name: 'Bulbasaur' },
        { id: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", name: 'Squirtle' },
        { id: 2, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", name: 'Charmander' },
    ];

    selectedPokemonName = null;

    selectPokemon(){
        this.router.navigateToRoute('battle', {id:`${this.selectedPokemonName}`}, {replace: true});
    }

    goHome(){
        this.router.navigateToRoute('home', {replace: true});
    }

    errorHome(nameString){
        if (nameString.length < 6){
            this.router.navigateToRoute('home', {id:`error`}, {replace: true});
        }
    }
}
