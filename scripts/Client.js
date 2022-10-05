class Client {
  constructor() {
    //Your token goes here
    this.token = "b34a0fc5";
  }

  async getMovieData(movie) {
    let response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`
    );
    let data = await response.json();
    console.log(data);
    return data;
  }
}

export default Client;
