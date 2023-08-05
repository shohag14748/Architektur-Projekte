"use strict";
import ReturnButton from "./returnButton.js";

const e = React.createElement;

/**
 * This class manages a Grid (3x2) of project-tiles and their focussed view
 * @param {Object} props - The properties of the TileGrid
 * @param {Object} .tileType - The type of the tiles to be displayed (e.g. imgtextTile.js, scrollableImgTexrTile.js)
 * @param {Object} .stateHandler - The stateHandler {stateHandler.js} of the App
 * @param {Object} .updateState - The updateState function of the App
 * @param {Object} .data - [{name: String, id: int, img: [int{0..n}], zusammenfassung: String, text: String}, ...]
 */
class TileGrid extends React.Component {
  render() {
    return e(
      "div",
      {
        class: this.props["stateHandler"].isDetailedView()  // Check wether all Tiles are displayed or only the focussed one
          ? " detail-field"
          : "tile-field",
      },
      [
        this.props["data"].map((tileData) => {
          if (
            this.props["stateHandler"].isDetailedView() && // Check wether all Tiles are displayed or only the focussed one
            tileData["id"] != this.props["stateHandler"].getCurrentView() // Load only the focussed Tile
          ) {
            return;
          }
          return e(this.props["tileType"], {    // Create the project-tiles
            stateHandler: this.props["stateHandler"],
            updateState: this.props["updateState"],
            data: tileData,
          });
        }),
        this.props["stateHandler"].isDetailedView()   // In focussed view, display the return button
          ? e(ReturnButton, {
              stateHandler: this.props["stateHandler"],
              updateState: this.props["updateState"],
            })
          : "",
      ]
    );
  }
}

export default TileGrid;
