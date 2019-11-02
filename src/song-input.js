const templateTodoInput = document.createElement("template");
templateTodoInput.innerHTML = `
    <style>
        #new-song-form {
            position: relative;
            font-size: 24px;
            border-bottom: 1px solid #ededed;
        }
        #new-song {
            padding: 16px 16px 16px 60px;
            border: none;
            background: rgba(0, 0, 0, 0.003);
            position: relative;
            margin: 0;
            width: 100%;
            font-size: 24px;
            font-family: inherit;
            font-weight: inherit;
            line-height: 1.4em;
            border: 0;
            outline: none;
            color: inherit;
            padding: 6px;
            border: 1px solid #CCC;
            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
        }
    </style>
    <form id="new-song-form">
        <input id="new-song" type="text" placeholder="Add the sonnng name" />
    </form>
`;

export default class SongInput extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("TodoInput ADDED TO THE DOM");
    this._root.appendChild(templateTodoInput.content.cloneNode(true));
    this.$form = this._root.querySelector("form");
    this.$input = this._root.querySelector("input");
  }

  disconnectedCallback() {
    console.log("TodoInput REMOVED TO THE DOM");
  }
}
