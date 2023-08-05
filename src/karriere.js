"use strict";
import Header from "./components/header.js";
import TileField from "./components/tilefield.js";
import Tile from "./components/imgtextTile.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Karriere" page
 */
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", { id: "Page" }, [
      e(Header, {
        current: "karriere",
      }),
      e(
        "div",
        { id: "main" },
        e(TileField, {
          tiles: [
            [
              "Wir suchen zur Festanstellung oder zur freien Mitarbeit:",
              "!ArchitektIn/InnenarchitektIn",
              "Berufseinsteiger bis Projektleitung",
              "!BauzeichnerIn",
              "Vector Works",
              "!PraktikantIn, Hochbau und Innenarchitektu",
              "Max. 3 Monate oder studiumsbegleitend",
              "./images/carrier/left.jpg",
            ],
            "KARRIERE",
            [
              "#Wir freuen uns auf Ihre Bewerbung. Diese richten Sie bitte an:",
              "Wolfgramm Architekten",
              "Heimhuder Strasse 54 - 20148 Hamburg",
              "!bewerbung@wolfgramm-architekten.de",
              "./images/carrier/right.jpg",
            ],
          ],
          tileType: Tile,
        })
      ),
      e(Footer, {}),
    ]);
  }
}


let domContainer = document.querySelector("#AppWrapper");
ReactDOM.render(e(IndexPage), domContainer);
