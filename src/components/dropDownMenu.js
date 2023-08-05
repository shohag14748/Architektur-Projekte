"use strict";

const e = React.createElement;

/**
 * Creates a Div with multiple links to be used as a dropdown menu
 * @param {Object} props - The properties of the DropDownMenu
 * @param {Array} .links - The links to be displayed in the dropdown menu [String, ...]
 */
class DropDownMenu extends React.Component {
  render() {
    return (
      e('div', {class: "dropdown-menu"}, 
        this.props["links"].map(link => {
          return (
            e('a', {
              id: "nav-link-" + link,
              class: "nav-link dropdown",
              href: link + "-projects.html"
            }, link.toUpperCase()
          ));
        })
    ));
  }
}

export default DropDownMenu;

