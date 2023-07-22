import React, { useEffect, useState } from 'react'
import './Main.css'
import TextScramble from '@twistezo/react-text-scramble/lib/TextScramble';
import handleViewport from 'react-in-viewport';
import { useTranslation } from "react-i18next";

function List({ inViewport, forwardedRef }: any) {
    const { t, i18n } = useTranslation();
    const [listScrambled, setScrambled] = useState<boolean>(false)
    useEffect(() => {
        console.log(inViewport)
        if (!inViewport) {
            setScrambled(false)
        }else{
            setTimeout(() => {
                setScrambled(true)
            }, 3000)
        }
    }, [inViewport])
    console.log("list", listScrambled)
    return (
        <div className="project_evolv_left helvetica" ref={forwardedRef}>
            <div className='list'>
                <h3 >{t("Project_evolv")}</h3>
                <p>{t("Proj_evol_subHead")}</p>
                <p className="feature" style={{ fontWeight: "700", fontSize: "32px" }}>{t("features")}</p>
                <ul className="toolkitlist">
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem1") : <TextScramble texts={[t("listItem1")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem2") : <TextScramble texts={[t("listItem2")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem3") : <TextScramble texts={[t("listItem3")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem4") : <TextScramble texts={[t("listItem4")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem5") : <TextScramble texts={[t("listItem5")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                    <li style={{ display: "flex" }}>{inViewport && (listScrambled ? t("listItem6") : <TextScramble texts={[t("listItem6")]} letterSpeed={50} nextLetterSpeed={100} pauseTime={500} />)}</li>
                </ul>
            </div>
        </div>
    )
}

const ScramblingList = handleViewport(List);


export default ScramblingList