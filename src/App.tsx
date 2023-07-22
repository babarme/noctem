import React, { createContext, useState, useEffect } from "react";
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useTranslation } from "react-i18next";

const Context = createContext<{ language: string, setLanguage: Function }>({ language: "English", setLanguage: () => { } });
export const store = Context

const languages: { [key: string]: any } = {
  English: "en",
  Spanish: "sp",
}

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("English")
  useEffect(() => {
    let currentLang = localStorage.getItem("language")
    if (currentLang) {
      setLanguage(currentLang ? currentLang : "")
      i18n.changeLanguage(languages[currentLang]);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <div className="App">
      <Context.Provider value={{ language, setLanguage }}>
        <HashRouter basename='/'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </HashRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
