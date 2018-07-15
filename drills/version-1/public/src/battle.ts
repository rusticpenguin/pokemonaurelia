import { HttpClient } from 'aurelia-fetch-client';

export class Battle {

    fetch() {
        let client = new HttpClient();

        client.fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json)
            .then(data => new this.display());
    }
    display(){

    }

}
