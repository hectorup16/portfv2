import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Software <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Software Developer</h3>
                            <p className="services__modal-description">Service
                                with more than 2 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Create custom web applications using technologies such as HTML, CSS, JavaScript, and frameworks such as React
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Write clean and efficient code in the appropriate programming language.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use version control systems (such as Git) to manage source code.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Build APIs to allow integration with other systems and services.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Stay abreast of the latest technologies and development practices.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">Service
                                with more than 1 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Research current design trends.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Stay informed on the latest trends in design and technology.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Conduct user research to understand needs and preferences.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Select color palettes and visual styles.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Participate in team design reviews and feedback.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Mobile <br />
                            App Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right 
                    services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">Mobile App Development</h3>
                            <p className="services__modal-description">Service
                                with more than 1 years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">I
                                        Ensure that the application complies with the regulations and policies of the platforms and application stores.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Take advantage of the native functionalities of the devices, such as the camera, GPS, sensors, to improve the user experience.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrate external services, such as authentication, databases, third-party APIs, and other functionalities that require connectivity.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Create the visual design of the application, taking into account the user experience (UX) and ensuring that the interface is intuitive and attractive.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle 
                                    services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Collaborate with stakeholders to understand project requirements and desired application functionalities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
