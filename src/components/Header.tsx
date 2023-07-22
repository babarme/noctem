import React, { useEffect, useState } from "react";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [paused, setPaused] = useState<boolean>(false);
  const [listScrambled, setScrambled] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPaused(true);
      setTimeout(() => {
        setScrambled(true);
      }, 2800);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  const scrambleTexts = [t("loading"), t("evolving"), t("growing")];
  const scrambleText1 = [t("noctem2")];
  return (
    <header className="header">
      {/* <div className="radial_circle"></div> */}
      <div className={`header_text_box show-page`}>
        <div>
          <h2 className="heading">
            {paused ? (
              t("afterScrambleText")
            ) : (
              <>
                {t("noctem")}&nbsp;
                <span id="dfsd">
                  <TextScramble
                    texts={scrambleTexts}
                    letterSpeed={50}
                    nextLetterSpeed={50}
                    pauseTime={400}
                    paused={paused}
                  />
                </span>
              </>
            )}
            &nbsp;
          </h2>
          <h2 id="scramble_small_text">
            <span>
              {paused && (
                <>
                  {listScrambled ? (
                    t("noctem2")
                  ) : (
                    <TextScramble
                      texts={scrambleText1}
                      letterSpeed={25}
                      nextLetterSpeed={50}
                      pauseTime={500}
                    />
                  )}
                </>
              )}
            </span>
          </h2>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
