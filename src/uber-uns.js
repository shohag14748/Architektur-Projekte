"use strict";
import Header from "./components/header.js";
import TileField from "./components/tilefield.js";
import Tile from "./components/imgtextTile.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Über uns" page
 */
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", { id: "Page" }, [
      e(Header, {
        current: "über uns",
      }),
      e(
        "div",
        { id: "main" },
        e(TileField, {
          tiles: [      // Content of the 3 tiles
            [
              "Ein Dreiklang aus Gestaltung, Wirtschaftlichkeit und Zeitmanagement – dies sind für uns seit 25 Jahren die Bausteine erfolgreichen Arbeitens in den Bereichen Architektur, Innenarchitektur und Projektsteuerung. Wir arbeiten eng mit renommierten Fachplanern und angesehenen Firmen zusammen",
              "Im vertrauensvollen Dialog begleiten wir Sie durch alle Leistungsphasen. Unsere ganzheitliche Herangehensweise beweist sich durch Zeitlosigkeit und hohe Qualität. Wir haben unser Büro mit neun Mitarbeitern plus der Hündin Paula zentrumsnah im Stadtteil Rotherbaum.",
              "Die Freude an der faszinierenden Welt des Bauens und ihren vielen Facetten lässt uns jede neue Aufgabe als Herausforderung an unser Team sehen, der wir uns gerne stellen",
            ],
            "ÜBER UNS",
            [
              "!Dipl.-Ing. Architekt Arne Wolfgramm",
              "Geschäftsführer",
              "Gründung des Architekturbüros 1994\nMitglied der Hamburgischen Architektenkammer Nr. 111317",
              "Wirtschaftsausbildung Axel Springer Verlag Diplom-Studium der Architektur an der HfbK Hamburg",
              "./images/about us/Geschäftsführer.png",
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
