"use strict";
import DropDownMenu from './dropDownMenu.js';

const e = React.createElement;

const links = ["home", "über uns", "projekte", "aktuelles", "kunden", "karriere", "kontakt"];
const sublinks = [["architektur", "innenarchitektur", "projektsteuerung"]];

/**
 * This class creates the header of the pages
 * It contains the logo and the navigation links
 * The navigation links are created dynamically from the links array
 * The navigation links are also highlighted if they are the current page
 * The logo is a link to the home page
 * @param {Object} props - The properties of the Header
 * @param {String} .current - The current page
 * 
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", { class: "header" }, [
      e(
        "a",
        { class: "header-img-div", href: "index.html" },
        e("img", {
          class: "header-logo grey-image",
          src: "./images/header-logo.JPG",
        })
      ),
      e(
        "nav",
        { class: "nav" },
        links.map(link => {
          if (link == "projekte") {
            return (
              e('a', {
                onClick: this.handleClick,  // Disables the default behaviour of the link
                id: "nav-link-" + link,
                class: 
                  "nav-link dropdown-link" +
                  (this.props["current"] == link ? " current-page" : "")
                }, [link.toUpperCase(), 
                e(DropDownMenu, {links: sublinks[0]})]  // sublinks[0] is the array of sublinks for the "projekte" link
                                                        // Creates a dropdown menu for the "projekte" link
            ));
          }
          if (this.props["current"] == link) {
            return e(
              "a",
              {
                id: "nav-link-" + link,
                class: "nav-link current-page",
                href: "#",
              },
              link.toUpperCase()
            );
          }
          return e(
            "a",
            {
              id: "nav-link-" + link,
              class: "nav-link",
              href: (link==="home" ? "index" : link) + ".html",
            },
            link.toUpperCase()
          );
        })
      ),
    ]);
  }
}
export default Header;
