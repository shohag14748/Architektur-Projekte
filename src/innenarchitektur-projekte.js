"use strict";
import Header from "./components/header.js";
import StateHandler from "./components/stateHandler.js";
import TileGrid from "./components/tileGrid.js";
import ProjektTile from "./components/projektTile.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Innenarchitekur" page
 */
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateHandler: new StateHandler(),
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    console.log("Updating State");
    this.setState({
      stateHandler: this.state["stateHandler"],
    });
  }

  render() {
    return e("div", { id: "Page" }, [
      e(Header, {
        current: "projekte",
      }),
      e(TileGrid, {
        tileType: ProjektTile,
        stateHandler: this.state["stateHandler"],
        updateState: this.updateState,
        data: [],
      }),
      e(Footer, {}),
    ]);
  }
}

let domContainer = document.querySelector("#AppWrapper");
ReactDOM.render(e(IndexPage), domContainer);
