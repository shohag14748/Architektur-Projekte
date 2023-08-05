"use strict";
import Header from "./components/header.js";
import TileField from "./components/tilefield.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Home" page
 */
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", { id: "Page" }, [
      e(Header, {
        current: "home",
      }),
      e(TileField, {
        tiles: ["architektur", "innenarchitektur", "projektsteuerung"],
        tileType: Tile,
      }),
      e(Footer, {}),
    ]);
  }
}

/**
 * This class manages the tiles specific to the "home" page
 */
class Tile extends React.Component {
  render() {
    return e(
      "div",
      { id: "tile-" + this.props["theme"], class: "tile" },
      e(
        "a",  
        {
          id: "tile-link-" + this.props["theme"],
          class: "tile-link grey-image",
          href: this.props["theme"] + "-projects.html", // Make the whole tile clickable
        },
        [
          e("img", {
            id: "tile-img-" + this.props["theme"],
            class: "tile-img",
            src: "./images/homepage/tile-img-" + this.props["theme"] + ".jpg",
          }),
          e(
            "p",
            { id: "tile-label-" + this.props["theme"], class: "tile-label" },
            this.props["theme"].toUpperCase()
          ),
        ]
      )
    );
  }
}

let domContainer = document.querySelector("#AppWrapper");
ReactDOM.render(e(IndexPage), domContainer);
