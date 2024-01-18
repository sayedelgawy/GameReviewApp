//two function display data of all games and display specific game details

export class displayAllGame {
  constructor(gamesArr) {
    this.gamesArr = gamesArr;
    this.content = ``;
  }
  printAll() {
    for (let index = 0; index < this.gamesArr.length; index++) {
      this.content += `
            <div class="col">
              <div
                data-id="${this.gamesArr[index].id}"
                class="card h-100 bg-transparent"
                role="button"
              >
                <div class="card-body">
                  <figure class="position-relative">
                    <img
                      class="card-img-top object-fit-cover h-100"
                      src="${this.gamesArr[index].thumbnail}"
                    />
                  </figure>

                  <figcaption>
                    <div class="hstack justify-content-between">
                      <h3 class="h6 small">${this.gamesArr[index].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>

                    <p class="card-text small text-center opacity-50">
                     ${this.gamesArr[index].short_description.split(' ').splice(0,10).join(' ')}
                    </p>
                  </figcaption>
                </div>

                <footer
                  class="card-footer small hstack justify-content-between"
                >
                  <span class="badge badge-color">${this.gamesArr[index].genre}</span>
                  <span class="badge badge-color">${this.gamesArr[index].platform}</span>
                </footer>
              </div>
            </div>
            
            `;
    }
    return this.content;
  }
}

export class dispalyGameDetails {
  constructor(game) {
    this.game = game;
    this.content = ``;
  }
  printGameDetail() {
    this.content = `<div class="col-md-4">
    <img
      src="${this.game.thumbnail}"
      class="w-100"
      alt="image details"
    />
  </div>
  <div class="col-md-8">
    <h3>Title: ${this.game.title}</h3>
    <p>Category: <span class="badge text-bg-info">${this.game.genre}</span></p>
    <p>Platform: <span class="badge text-bg-info"> ${this.game.platform}</span></p>
    <p>Status: <span class="badge text-bg-info"> ${this.game.status}</span></p>
    <p class="small">
      ${this.game.description}
    </p>
    <a
      class="btn btn-outline-warning"
      target="_blank"
      href="${this.game.game_url}"
      >Show Game</a
    >
  </div>`;
    return this.content;
  }
}
