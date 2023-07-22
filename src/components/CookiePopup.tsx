import React from "react";
import "./CookiePopup.css";
import './Footer.css'

type CookieProps = {
  setOpen: (arg: boolean) => void;
};

const CookiePopup = ({ setOpen }: CookieProps) => {
  return (
    <div className="cookie-1">
      <div className="cross_cookie">
        <span>
          <i
            className="fa-solid fa-xmark"
            onClick={(e) => {
              setOpen(false);
            }}
          ></i>
        </span>
      </div>
      <h6>Why we use cookies</h6>
      <p>
        This site uses cookies to make your browsing experience more convenient
        and personal. Cookies store useful information on your computer to help
        us improve the efficiency and relevance of our site for you. In some
        cases, they are essential to making the site work properly. By accessing
        this site, you consent to the use of cookies. For more information,
        refer to Noctem Corps' <span>cookie policy.</span>
      </p>
      <div>
        <a
          href="#."
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          I UNDERSTAND
        </a>
      </div>
    </div>
  );
};

export default CookiePopup;
