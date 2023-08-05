"use strict";

const e = React.createElement;

/**
 * This class creates a project-tile that displays the name and main-image of the project
 * It also handles the onClick event to open the detailed view of the project
 * In the detailed view, the project-tile is replaced by a detailed view of the project
 * The detailed view contains the name, description, images and a button to close the detailed view
 * @param {Object} props - The properties of the ProjektTile
 * @param {Object} .stateHandler - The stateHandler {stateHandler.js} of the App
 * @param {Object} .updateState - The updateState function of the App
 * @param {Object} .data - {name: String, id: int, img: [int{0..n}], zusammenfassung: String, text: String}
 */
class ProjektTile extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.decImg = this.decImg.bind(this);
    this.incImg = this.incImg.bind(this);
  }

  /**
   * OnClick Function to open the detailed View
   * and set the State to which Projekt is opened
   * by it's ID
   *
   */
  onClick() {
    this.props["stateHandler"].setView(this.props["data"]["id"]);
    this.props["updateState"]();
  }

  /**
   * Checks whether this Tile the one in Detailed Mode is
   *
   */
  checkName() {
    return (
      this.props["stateHandler"].getCurrentView() == this.props["data"]["id"] &&
      this.props["stateHandler"].isDetailedView()
    );
  }

  isDetailed() {
    return this.props["stateHandler"].isDetailedView();
  }

  /**
   * Decrease the current Image by 1
   */
  decImg() {
    this.props["stateHandler"].decCurrentImg(this.props["data"]["imgs"].length);
  }

  /**
   * Increase the current Image by 1
   */
  incImg() {
    this.props["stateHandler"].incCurrentImg(this.props["data"]["imgs"].length);
  }

  render() {
    return e(
      "div",
      {
        id: "tile-" + this.props["data"]["name"],
        class: "tile" + (this.checkName() ? " detail-tile" : ""), // Add class "detail-tile" if this project is the one in focussed mode
      },
      e(
        "p",  // Enclose the whole tile in a link
        {
          id: "tile-link-" + this.props["data"]["name"],
          class: "tile-link" + (this.checkName() ? " detail-link" : " grey-image"),
          onClick: this.onClick,  
        },
        e(
          "div",
          {
            class: "tile-img-div" + (this.checkName() ? " detail-img-div" : ""),
          },
          [
            e("img", {
              id: "tile-img-" + this.props["data"]["name"],
              class: "tile-img" + (this.checkName() ? " detail-img" : ""),
              src:
                "./images/projects/architektur/" +
                this.props["data"]["name"] +
                "/" +
                this.props["stateHandler"].getCurrentImg() +
                ".jpg", // Load the image that is currently in focus (default for unfocussed projects: first image)
            }),

            // Image Rotation Buttons in Detailed View (hidden in unfocussed mode)
            e(
              "p",
              {
                onClick: this.decImg,
                class:
                  "btn img-rotation-btn prev-img-btn" +
                  (this.checkName() ? "" : " hidden"),
              },
              e("i", { class: "fas fa-angle-left" }, " ")
            ),
            e(
              "p",
              {
                onClick: this.incImg,
                class:
                  "btn img-rotation-btn next-img-btn" +
                  (this.checkName() ? "" : " hidden"),
              },
              e("i", { class: "fas fa-angle-right" }, " ")
            ),
          ]
        ),
        //Other Images in Detailed View (hidden in unfocussed mode)

        e(
          "div",
          {
            id: "tile-remaining-imgs-" + this.props["data"]["name"],
            class: "tile-remaining-imgs" + (this.checkName() ? "" : " hidden"),
          },
          this.props["data"]["imgs"].map(img => {
            if (this.props["stateHandler"].getCurrentImg() == img) return;
            return e(SubImages, {
              stateHandler: this.props["stateHandler"],
              updateState: this.props["updateState"],
              projectId: this.props["data"]["id"],
              projectName: this.props["data"]["name"],
              imgName: img,
            });
          })
        ),

        //Project Header 

        e("div", { class: this.checkName() ? "tile-txt" : "" }, [
          e(
            "h2",
            {
              id: "tile-label-" + this.props["data"]["name"],
              class: "tile-label" + (this.checkName() ? " detail-label" : ""),
            },
            this.props["data"]["name"].toUpperCase()
          ),
          // Project Summary in Detailed View (bold text) (hidden in unfocussed mode)
          e(
            "p",
            {
              id: "tile-summary-" + this.props["data"]["name"],
              class: "tile-summary" + (this.checkName() ? "" : " hidden"),
            },
            this.props["data"]["zusammenfassung"]
          ),
          // Project Description in Detailed View (hidden in unfocussed mode)
          e(
            "p",
            {
              id: "tile-info-" + this.props["data"]["name"],
              class: "tile-info" + (this.checkName() ? "" : " hidden"),
            },
            this.props["data"]["beschreibung"]
          ),
        ])
      )
    );
  }
}

/**
 * SubImages are the smaller Images to the side that are shown in the Detailed View
 */
class SubImages extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * 
   * @returns {boolean} Whether this SubImage belongs to the project when in focussed mode
   */
  checkName() {
    return (
      this.props["stateHandler"].getCurrentView() == this.props["projectId"] &&
      this.props["stateHandler"].isDetailedView()
    );
  }

  /**
   * Set the current Image to the clicked SubImage's Image
   * And update the state to rerender the page
   */
  onClick() {
    this.props["stateHandler"].setCurrentImg(this.props["imgName"]);
    this.props["updateState"]();
  }

  render() {
    return e(
      "div",
      { class: "img-div", onClick: this.onClick },
      e("img", {
        id: "tile-img-" + this.props["imgName"],
        class: "tile-remaining-img grey-image" + (this.checkName() ? "" : " hidden"), // Hide the SubImages in unfocussed mode or when a different project is in focussed mode
        src:
          "./images/projects/architektur/" +
          this.props["projectName"] +
          "/" +
          this.props["imgName"] +
          ".jpg",
      })
    );
  }
}

export default ProjektTile;
