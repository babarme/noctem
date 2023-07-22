import React from 'react';
import { useState } from 'react';
import CookiePopup from './CookiePopup';
import './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [open,setOpen] = useState<boolean>(false)
  const { t, i18n } = useTranslation();


    return (
        <footer>
            <div className="radial_circle6"></div>
            <div className="radial_circle7"></div>
            <div className='footer'>
                <img src={require("../img/footer.png")} alt="logo" width="150px" />
                <div className="contact_text">
                    <h6>{t("contact_us")}</h6>
                    <p>(800)990-2705</p>
                    <p>info@NCTMCO.com</p>
                </div>
            </div>
            <p className='footer_para'>{t("privacy")} <span className='cursor-pointer'>{t("privacy01")} </span>l<span className='cursor-pointer'> {t("privacy02")}</span></p>
            <hr /> 
            <div className='cookie_popup'>
                <p>{t("why_cookie")} <span><i className="fa-solid fa-chevron-down" onClick={()=>{
                    setOpen(true)
                }}></i></span> </p>
            </div>
            {open&&<CookiePopup setOpen={setOpen}/>}
        </footer>
    )
}

export default Footer