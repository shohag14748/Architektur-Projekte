"use strict";

const e = React.createElement;

/**
 * Creates a tile with a header and a text that can be scrolled
 * If only a string is passed, it is displayed as a page-header (h2)
 * The first element of the text-array is displayed as the header
 * Each subsequent element of the text-array is displayed in a new paragraph
 * Start a paragraph with "!" to make it bold
 * @param {Object} props - The properties of the Tile
 * @param {Object} .theme - The data of the tile to be displayed [String, String, ...] or String
 * @param {Object} .id - The id of the tile: int
 *     
 */
class Tile extends React.Component {
  render() {
    if (typeof this.props["theme"] === "string") {  // If the tile is just a string, display it as a header
      return e(
        "div",
        { id: "imgtile-" + this.props["id"], class: "imgtile" },
        e("h2", { class: "imgtile-content" }, this.props["theme"])
      );
    }
    let i = 0;
    return e("div", { id: "tile-" + this.props["id"], class: "tile" }, [
      e(
        "h3",
        { id: "tile-header-" + this.props["id"], class: "tile-header" },
        this.props["theme"][0]  // First element of the text-array is the header
      ),e('div', {class: "scrollableContent"},
      this.props["theme"].slice(1).map(txt => {
        switch (txt[0]) {
          case "!": // Bold paragraph (starts with "!")
            i++;
            return e(
              "p",
              {
                id: "tile-txt-" + this.props["id"] + "-" + i,
                class: "tile-txt bold",
              },
              txt.substring(1) // Remove the "!"
            );
          default: // Normal paragraph
            i++;
            return e(
              "p",
              { id: "tile-txt-" + this.props["id"] + "-" + i, class: "tile-txt" },
              txt
            );
        }
      })),
    ]);
  }
}

export default Tile;
