"use strict";

const e = React.createElement;


/**
 * Creates a tile with text
 * If only a string is passed, it is displayed as a page-header (h2)
 * The first element of the txt-array is displayed as the header
 * Each subsequent element of the text-array is displayed in a new paragraph
 * Start a paragraph with "#" to make it a Subheader
 * Start a paragraph with "!" to make it bold
 * Start a paragraph with "." + "relative Path to the Image from html" to insert an image
 * @param {Object} props - The properties of the Tile
 * @param {Object} .theme - The data of the tile to be displayed [String, String, ...] or String
 * @param {Object} .id - The id of the tile: int
 */
class Tile extends React.Component {
    render() {
      if (typeof this.props["theme"] === "string") {
        return e(
          "div",
          { id: "imgtile-" + this.props["id"], class: "imgtile" },
          e("h2", { class: "imgtile-content" }, this.props["theme"])
        );
      }
      let i = 0;
      return e(
        "div",
        { id: "tile-" + this.props["id"], class: "tile" },
        this.props["theme"].map(txt => {
          switch (txt[0]) {
            case ".": //Insert Image from relative path
              return e("img", {
                id: "tile-img-" + this.props["id"],
                class: "tile-img",
                src: txt,
              });
            case "#": //Subheader
              return e(
                "h3",
                { id: "tile-header-" + this.props["id"], class: "tile-header" },
                txt.substring(1)
              );
            case "!":
              i++;
              return e(
                "p",
                {
                  id: "tile-txt-" + this.props["id"] + "-" + i,
                  class: "tile-txt bold",
                },
                txt.substring(1)
              );
            default:
              i++;
              return e(
                "p",
                { id: "tile-txt-" + this.props["id"] + "-" + i, class: "tile-txt" },
                txt
              );
          }
        })
      );
    }
  }

export default Tile;