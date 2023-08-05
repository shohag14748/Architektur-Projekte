"use strict";

const e = React.createElement;


/**
 * This class creates the footer of the pages
 * It contains a link to the impressum and datenschutz pages * 
 */
class Footer extends React.Component {
  render() {
    return e("footer", {}, [
      e(
        "a",
        { id: "impressum-link", class: "footer-link", href: "impressum.html" },
        "Impressum"
      ),
      e(
        "a",
        { id: "datenschutz-link", class: "footer-link", href: "datenschutz.html" },
        "Datenschutz"
      ),
    ]);
  }
}

export default Footer;
