import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router'
import { App } from 'app'

export class Battle {
    queryString = new URLSearchParams(window.location.search);
    queryStringToString = new String(this.queryString);
    pokemon = this.queryStringToString.slice(3);

    fetch() {
        let client = new HttpClient();

        client.fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json)
            .then(data => new this.display());
    }
    display(){

    }
}
