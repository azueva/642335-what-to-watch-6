import React from "react";
import Logo from "../logo/logo";

const LOGO_MODIFICATOR = `logo__link--light`;

const Footer = () => {

  return (
    <footer className="page-footer">
      <Logo
        modificator = {LOGO_MODIFICATOR}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
