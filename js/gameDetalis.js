export class getGameDetails {
  constructor(gameId) {
    this.gameId = gameId;
  }
  async getTheGame() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dced20b376msh1712fe28805a298p11c244jsne03c815f42fc",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }
}
