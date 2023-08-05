"use strict";

const e = React.createElement;

/**
 * This class manages a triple of text-tiles or text-image-tiles
 * @param {Object} props - The properties of the TileField
 * @param {Object} .tileType - The type of the tiles to be displayed (e.g. imgtextTile.js, scrollableImgTexrTile.js)
 * @param {Object} .tiles - The data of the tiles to be displayed [[String, String, ...], ...]
 */
class TileField extends React.Component {
  render() {
    let i = 1;
    return e(
      "div",
      { id: "tile-field" },
      this.props["tiles"].map(tile => {
        return e(this.props.tileType, { theme: tile, id: i++});
      })
    );
  }
}

export default TileField;
