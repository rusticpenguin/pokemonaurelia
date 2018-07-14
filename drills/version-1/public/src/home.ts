export class Home {
    constructor(apiURL){
        this.name = apiURL;
    }

    get name() {
        return this.name;
    }

    set name(api){
    fetch(api, {'mode': 'no-cors'})
        .then((res) => res.json)
        .then(console.log)
    }
}