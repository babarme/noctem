import React, { useContext, useEffect, useState } from "react";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { store } from "../App";

const languages: { [key: string]: any } = {
  English: "en",
  Spanish: "sp",
};

const Home = () => {
  const { t, i18n } = useTranslation();
  const [startAnimate, setStartAnimate] = useState<boolean>(false);
  const [headerScrambled, setHeaderScrambled] = useState<boolean>(false);
  const { language: lang, setLanguage } = useContext(store);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimate(true);
    }, 2800);
    setTimeout(() => {
      setHeaderScrambled(true);
    }, 1000);
  }, []);
  const scrambleText1 = [t("services")];
  const scrambleText2 = [t("employment")];
  const scrambleText3 = [t("investor")];
  const scrambleText5 = [t("contactUs")];
  return (
    <>
      <nav>
        <img src={require("../img/logo.png")} alt="logo" className="logo" />
        <div className="links wtcolor">
          <a
            href="#service"
            id="servicelang"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("service")!
                .scrollIntoView({ behavior: "smooth", block: "nearest" });
            }}
          >
            {headerScrambled ? (
              t("services")
            ) : (
              <TextScramble
                texts={scrambleText1}
                letterSpeed={50}
                nextLetterSpeed={100}
                pauseTime={500}
              />
            )}
          </a>
          <a
            href=".#"
            id="employmentlang"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("employement")!
                .scrollIntoView({ behavior: "smooth", block: "nearest" });
            }}
          >
            {headerScrambled ? (
              t("employment")
            ) : (
              <TextScramble
                texts={scrambleText2}
                letterSpeed={50}
                nextLetterSpeed={100}
                pauseTime={500}
              />
            )}
          </a>
          <a
            href=".#"
            id="servicelang"
            onClick={(e) => {
              e.preventDefault();
              var element = document.getElementById("investor")!;
              var headerOffset = 45;
              var elementPosition = element.getBoundingClientRect().top;
              var offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
          >
            {headerScrambled ? (
              t("investor")
            ) : (
              <TextScramble
                texts={scrambleText3}
                letterSpeed={50}
                nextLetterSpeed={100}
                pauseTime={500}
              />
            )}
          </a>
          <a
            href=".#"
            id="contactuslang"
            className="position-relative d-flex"
            onClick={(e) => e.preventDefault()}
          >
            <span className="align-center z-2 bg-black">
              {headerScrambled ? (
                lang
              ) : (
                <TextScramble
                  texts={[lang]}
                  letterSpeed={50}
                  nextLetterSpeed={100}
                  pauseTime={500}
                />
              )}
            </span>
            <select
              id="langselector"
              style={{
                zIndex: "1",
                position: "absolute",
                top: "-4px",
                left: "-9px",
                cursor: "pointer",
              }}
              value={lang}
              onChange={(e) => {
                setLanguage(e.target.value);
                i18n.changeLanguage(languages[e.target.value]);
              }}
            >
              {/* <option id='languagelang' disabled>
                Language
              </option> */}
              <option value="English" id="en" className="translate">
                English
              </option>
              <option value="Spanish" id="sp" className="translate">
                Spanish
              </option>
            </select>
          </a>
          <a
            href=".#"
            id="contactuslang"
            onClick={(e) => {
              e.preventDefault();
              // var element = document.getElementById('contract-n-consult')!;
              // var headerOffset = 45;
              // var elementPosition = element.getBoundingClientRect().top;
              // var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              // window.scrollTo({
              //   top: offsetPosition,
              //   behavior: "smooth"
              // });
            }}
          >
            {headerScrambled ? (
              t("contactUs")
            ) : (
              <TextScramble
                texts={scrambleText5}
                letterSpeed={50}
                nextLetterSpeed={100}
                pauseTime={500}
              />
            )}
          </a>
        </div>
      </nav>
      <Header />
      <Main startAnimate={startAnimate} />
      <Footer />
    </>
  );
};

export default Home;
