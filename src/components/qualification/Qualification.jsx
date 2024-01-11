import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"} onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Technical Degree in Computer Programing</h3>
                                <span className="qualification__subtitle">Dominican Training Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019-2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Technical Course in JAVA Programing </h3>
                                <span className="qualification__subtitle">Campus SEAS online</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Course in ReactJS+Redux+ES6</h3>
                                <span className="qualification__subtitle">Udemy Academy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Course in JavaScript JR level, Mid Level, Master Level</h3>
                                <span className="qualification__subtitle">YOUTUBE Channel: Soy Dalto</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Workshop Manager</h3>
                                <span className="qualification__subtitle">ABC Computer CxA.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2013
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Technical Support</h3>
                                <span className="qualification__subtitle">JyS Company.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Collection Manager</h3>
                                <span className="qualification__subtitle">Banco Caribe.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
