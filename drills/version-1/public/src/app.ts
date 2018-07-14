import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-framework";
import "./styles.css";

export class App {
    router: Router;
    message = 'Hello World!';
    constructor() { }

    configureRouter(config: RouterConfiguration, router: Router): void {

        config.title = "Ultimate Battle";
        config.options.root = "/";
        config.options.pushState = true;
        config.map([
            { route: ["", "home"], name: "home", moduleId: PLATFORM.moduleName("./home"), nav: true, title: "Home" },
            { route: "about", name: "about", moduleId: PLATFORM.moduleName("./about"), nav: true, title: "About" }
        ]);

        this.router = router;
    }
}
