import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-framework";
import "./styles.css";

export class App {
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
        this.router.navigateToRoute('battle', { pkmn:`${this.selectedPokemonName}`}, {replace: true});
    }
}
