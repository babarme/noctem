import React, { useState } from "react";
import ScramblingList from "./ScramblingList";
import "./Main.css";
import { useTranslation } from "react-i18next";

type MainProps = {
  startAnimate: boolean;
};

const Main = ({ startAnimate }: MainProps) => {
  const [currentState, setCurrentState] = useState<number>(0);
  const { t, i18n } = useTranslation();

  return (
    <main className="main">
      <div className="radial_container">
        <div
          id="main-section"
          className={`${startAnimate ? "animate-slide-up" : "video-init"}`}
        >
          <div id="vid2-container">
            <video loop muted autoPlay={true}>
              <source src={require("../video/first.mp4")} type="video/mp4" />
            </video>
          </div>
        </div>
       {/* EXPLAINATION ABOUT */}
        <section id="commitment-line" className="commitment_flex">
       

            {/* commitment to dirupting */}
          <div id="commitment-heading" className="commit_half">
            <h2 className="text_uppercase commitmentkero">
              {t("commitment")}
              <br /> {t("commitment01")}
              <br />
              {t("commitment02")}.
              <img src={require("../img/comma.png")} alt="" />
            </h2>
          </div>
          {/* COMMITMENT TO DISRUPTING END */}

          {/* EXPLAINATION (WITH EVERY TECHNOLOGICAL) */}
          <div className="commit_half">
            <p className="inter">
              {t("commitmentText")}
              <span>{t("commitmentText01")}</span>
            </p>
          </div>
          {/* EXPLAINATION (WITH EVERY TECHNOLOGICAL) END */}

      {/* EXPLAINATION (BEGINNING WITH DEVELOPER TOOLS) */}
          <div className="commit_full">
            <p className="inter">{t("commitmentText2")}</p>
          </div>
      {/* EXPLAINATION (BEGINNING WITH DEVELOPER TOOLS) */}

        </section>
  {/* EXPLAINATION ABOUT */}

        {/* SERVICE SECTION START */}
        <section className="service" id="service">
          {/* <div className="radial_circle2"></div> */}
          <div id="services-container">
            <h2 className="helvetica text_uppercase">{t("service_head")} </h2>
            <div className="services_flex_1">
              <img
                src={require("../img/service-1.png")}
                alt=""
                height="500rem"
              />
              <img
                src={require("../img/service-2.png")}
                alt=""
                height="500rem"
              />
              <img
                src={require("../img/service-3.png")}
                alt=""
                height="500rem"
              />
            </div>
          </div>
          <div className="service_flex_2">
            <img src={require("../img/programmer.png")} alt="" height="500rem" />
            <div className="devTools_text helvetica">
              <h3 id="devtoolnsub text_uppercase">
                {t("developer_tool")}
                <br />
                {t("developer_tool01")}
              </h3>
              <p>
                {t("developer_subHead")}
                <br />
                {t("developer_subHead01")}
              </p>
            </div>
          </div>
        </section>
        {/* SERVICES SECTION END */}
        <section className="project_evolv_section">
          {/* <div className="radial_circle3"></div> */}
          <ScramblingList />
          <div className="project_evolv_right">
            <video
              className="video2"
              muted
              autoPlay={true}
              loop
              id="vid1"
              width="50%"
              height="500rem"
            >
              <source src={require("../video/second.mp4")} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="project_eveolv_2">
          {/* <div className="radial_circle4"></div> */}
          <div className="project_evolv2_left">
            <video loop muted autoPlay={true} className="video1">
              <source src={require("../video/third.mp4")} type="video/mp4" />
            </video>
          </div>
          <div className="project_evolv2_right">
            <div>
              <p className="bold text_uppercase">{t("new")}</p>
              <p className="para">{t("proj_2")}</p>
            </div>
            <div>
              <p className="bold text_uppercase">{t("version")} </p>
              <p className="para">{t("more_than")} </p>
            </div>
            <div>
              <p className="bold text_uppercase">{t("project_v2")}</p>
              <p className="para">{t("free")}</p>
            </div>
            <button className="visit_btn helvetica btn-gradient text_uppercase">
              {t("visit_btn")}
            </button>
            <div style={{ marginBottom: "10px" }}>
              <p className="bold text_uppercase">{t("proj_v3")} </p>
              <p className="para">{t("to_be")}</p>
            </div>
          </div>
        </section>
        {/* contract and consulting */}
        <section id="contract-n-consult">
          <div className="contract_bg">
            <h3 className="text_uppercase">{t("contract")}</h3>
            <p className="helvetica">{t("contract_desc")}</p>
            <button className="consulting_btn helvetica text_uppercase">
              {t("connect_btn")}{" "}
            </button>
          </div>
        </section>
        {/* contract and consulting end */}
        <section className="workshop_events">
          {/* <div className="radial_circle5"></div> */}
          <h3 className="helvetica text_uppercase">{t("events_head")}</h3>
          <div className="workshop_flex">
            <div className="workshop_img">
              <img src={require("../img/workshop.png")} alt="" height="500rem" />
            </div>
            <div className="workshop_details">
              <div>
                <h4 className="bold text_uppercase">{t("workshop")}</h4>
                <p>{t("w_desc")} </p>
              </div>
              <div>
                <h4 className="bold text_uppercase">{t("event")}</h4>
                <p>{t("e-year")}</p>
                <p>{t("e_desc")}</p>
              </div>
              <div className="follow_text pinkcolor text_uppercase">
                {t("full_detail")}
              </div>
            </div>
          </div>
        </section>
        <section className="employment" id="employement">
          <div className="radial_circle8"></div>
          <h2 className="text_uppercase">{t("employ")}</h2>
          <div className="employment_flex">
            <div
              className="employment_card empc-0"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head1")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">
                  <span>{t("qualifications1")}</span>
                  {t("quali_desc1")}
                </p>
              </div>
              <div className="job_type">
                <span>{t("jobType1")}</span>
                {t("jobDesc1")}
              </div>
              <div className="salary">
                <span>{t("salary1")}</span>
                {t("salDesc1")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_1">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-1"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head2")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">
                  <span>{t("qualifications2")}</span>
                  {t("quali_desc2")}
                </p>

                <p className="qualification_details">
                  <span>{t("madit")} </span>
                  {t("madit01")}
                </p>
                <p className="qualification_details">
                  <span>{t("preff")} </span>
                  {t("preff01")}
                </p>
              </div>
              <div className="job_type">
                <span>{t("jobType2")}</span>
                {t("jobDesc2")}
              </div>
              <div className="salary">
                <span>{t("salary2")}</span>
                {t("salDesc2")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_2">
                {t("apply_btn")}
              </button>
            </div>
            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>

            <div
              className="employment_card empc-2"
              style={{ transform: `translateX(${currentState * 106}%)` }}
            >
              <h4 className="helvetica text_uppercase">{t("employ_head3")}</h4>
              <div className="qualification_text">
                <p className="qualification_details">{t("quali_desc3")}</p>
              </div>
              <div className="job_type">
                <span>{t("jobType3")}</span>
                {t("jobDesc3")}
              </div>
              <div className="salary">
                <span>{t("salary3")}</span>
                {t("salDesc3")}
              </div>
              <button className="apply_btn btn-gradient employ_btn_3">
                {t("apply_btn")}
              </button>
            </div>
          </div>
          <div className="slide_arrow">
            <span>
              <i
                className="fa-solid fa-chevron-left"
                onClick={() => {
                  if (currentState < 0) setCurrentState((c) => c + 1);
                }}
              ></i>
            </span>
            <span>
              <i
                className="fa-solid fa-chevron-right"
                onClick={() => {
                  if (currentState > -2) setCurrentState((c) => c - 1);
                }}
              ></i>
            </span>
          </div>
        </section>
        {/* /// investor form */}
        <section className="investors" id="investor">
          <h2 className="text_uppercase">{t("invest")}</h2>
          <p>{t("recevie_d")}</p>
          <form className="contact_form">
            <input
              type="text"
              name="name"
              placeholder={t("name") ? t("name") : ""}
            />
            <input
              type="text"
              name="phone"
              placeholder={t("phone") ? t("phone") : ""}
            />
            <input
              type="email"
              name="email"
              placeholder={t("email") ? t("name") : ""}
            />
            <textarea
              placeholder={t("msg") ? t("msg") : ""}
              rows={6}
              name="message"
            ></textarea>
            <button className="submit_btn text_uppercase" type="button">
              {t("submit_btn")}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Main;
