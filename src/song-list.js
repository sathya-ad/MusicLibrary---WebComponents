const templateSongList = document.createElement("template");
templateSongList.innerHTML = `
    <style>
        h1 {
            font-size: 60px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
        }
        section {
            background: #fff;
            margin: 30px 0 40px 0;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }
        #list-container {
            margin: 0;
            padding: 0;
            list-style: none;
            border-top: 1px solid #e6e6e6;
        }
    </style>
    <h1>My Music Library </h1>
    <section>
        <song-input></song-input>
        <ul id="list-container"></ul>
    </section>`;

export default class SongList extends HTMLElement {
  constructor() {
    super();

    this._root = this.attachShadow({ mode: "open" });

    //initial state
    this._songsList = [
      {
        name: "We dont talk anymore",
        fav: true
      },
      {
        name: "There's nothing holding me back",
        fav: true
      },
      {
        name: "Attention",
        fav: false
      }
    ];
  }

  removeItem = e => {
    console.log("comes here");
    console.log(e);
  };

  connectedCallback() {
    this._root.appendChild(templateSongList.content.cloneNode(true));
    this._render();
  }

  _render() {
    this._songsList.forEach((item, index) => {
      this.$listContainer = this._root.querySelector("#list-container");
      let $item = document.createElement("song-item");
      $item.setAttribute("name", item.name);
      $item.setAttribute("fav", item.fav);
      //$item.querySelector("label").innerHTML = item.name;
      $item.index = index;

      $item.addEventListener("onRemove", this.removeItem.bind(this));

      this.$listContainer.appendChild($item);
    });
  }
}
