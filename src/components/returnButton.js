"use strict";

const e = React.createElement;

/**
 * This class creates a button that with an arrow pointing to the left and the text "ZURÜCK"
 * It closes the currently focussed project and updates the state of the page
 * @param {Object} props - The properties of the ReturnButton
 * @param {Object} .stateHandler - The stateHandler {stateHandler.js} of the App
 * @param {Object} .updateState - The updateState function of the App
 */
class ReturnButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  /**
   * Close the focussed project and update the state of the page
   */
  onClick() {
    this.props["stateHandler"].setClosed();
    this.props["updateState"]();
  }

  render() {
    return (
      e('p', {onClick: this.onClick, class: "btn close-btn"},
        [e('i', {class: "fas fa-angle-left"}), "ZURÜCK"]
      )
    );
  }
}

export default ReturnButton;
