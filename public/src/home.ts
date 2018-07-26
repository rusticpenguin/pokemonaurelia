export class Home {
    queryString = new URLSearchParams(window.location.search);
    queryStringToString = new String(this.queryString);
    dataString = this.queryStringToString.slice(3);
}