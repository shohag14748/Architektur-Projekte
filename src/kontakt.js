"use strict";
import Header from "./components/header.js";
import StateHandler from "./components/stateHandler.js";
import Footer from "./components/footer.js";

const e = React.createElement;

/**
 * This class manages the state and content of the "Kontakt" page
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
        current: "kontakt",
      }),
      e(Footer, {}),
    ]);
  }
}

let domContainer = document.querySelector("#AppWrapper");
ReactDOM.render(e(IndexPage), domContainer);
