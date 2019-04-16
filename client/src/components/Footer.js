import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="page-footer black accent-2 footerContainer">

            <div className="footer-copyright">
                <div className="container">
                    <div id="footerText"><b>© 2019 Alexis Yepes Sanabria ||| University of Toronto Bootcamp</b>
                        <a className="grey-text text-lighten-4 right" href="https://github.com/alexisyepes/google-book-search-react">

                        <br></br><b>Code Reference</b></a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;