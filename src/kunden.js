"use strict";
import Header from "./components/header.js";
import TileField from "./components/tilefield.js";
import Tile from "./components/scrollableImgTxtTile.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Kunden" page
 */
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", { id: "Page" }, [
      e(Header, {
        current: "kunden",
      }),
      e(
        "div",
        { id: "main" },
        e(TileField, {
          tiles: [
                        ["Arztpraxen", 
                        "Dr. PD Ahlers, Hamburg, Dentalmedizin und CMD-Zentrum", "Dr. Alskif, Kieferorthopädie",
                        "Dr. Brinken, Hamburg, Proktologie", "Dr. Brumme, Gesichtschirurgie", "Dr. Dahlmann, Ophthalmologie", 
                        "Dr. Dreykluft, Kardiologie", "Dr. Dummler, Hamburg, Dentalmedizin", "Dr. Elger, Kinder-Dentalmedizi",
                        "Dr. Gotterbarm, Hamburg, Dentalmedizi", "Dr. PD Grotemeyer, Düsseldor, Gefäßchirurgie", "Dr. Hiss ,Hamburg, Dermatologie", 
                        "Dr. Jouni, Hamburg, Kieferorthopädie", "Dr. Jörger, Hamburg, Urologie", "Dr. Köchermann, Hamburg, Orthopädie",
                        "Dr. Konter, Hamburg, Kieferchirurgie", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder",
                        "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"], 
                        "KUNDEN",
                        ["Projektentwickler und Generalunternehmer", 
                        "Accumluata, München", "Allianz Immobilien GmbH, Köln", "Art Invest, München", "Euroland Projektierungen, Hamburg",
                        "Frank Gruppe, Hamburg", "Hanse Viertel, Hamburg", "HGB Hamburg Berlin Grundbesitz, Hamburg",
                        "HIH Hamburger Immobilienhandlung, Hamburg", "HIPE Hamburger Immobilien Projekt-Entwicklung, Hamburg", 
                        "HochTief Construction, Hamburg", "Imetas Property Services, Hamburg", "Köster-Bau, Osnabrück", 
                        "Lupp Nidda MPP Meding Projekt Plan, Hamburg", "Placeholder", "Placeholder", "Placeholder", 
                        "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"]],
          tileType: Tile,
        })
      ),
      e(Footer, {}),
    ]);
  }
}


let domContainer = document.querySelector("#AppWrapper");
ReactDOM.render(e(IndexPage), domContainer);
