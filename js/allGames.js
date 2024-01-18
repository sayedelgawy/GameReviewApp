export class getAllgames {
  constructor(gameType) {
    this.gameType = gameType;
  }
  async getGames() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.gameType}`;
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
