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
        config.mapUnknownRoutes('not-found')
        config.map([
            { route: ["", "home"], name: "home", moduleId: PLATFORM.moduleName("./home"), nav: true, title: "Home" },
            { route: "about", name: "about", moduleId: PLATFORM.moduleName("./about"), nav: true, title: "About" },
            { route: "battle", name: "battle", moduleId: PLATFORM.moduleName("./battle"), nav: true, title: "Battle" }
        ]);

        this.router = router;
    }

    pokemon = [
        { id: 0, image: "green.png", name: 'pkmn1' },
        { id: 1, image: "blue.png", name: 'pkmn2' },
        { id: 2, image: "red.png", name: 'pkmn3' },
    ];

    selectedPokemonName = null;

    selectPokemon(){
        this.router.navigateToRoute('battle', { pkmn:`${this.selectedPokemonName}`}, {replace: true});
    }
}
