import { useState } from "react";
import "./qualification.css"

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toggleTab = (index: any) => {
        setToggleState(index);
    };
    return (
        <section className="quanlification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">Mt personel jouryney</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >

                        <i className="uil uil-graduation-cap qualification__icon">
                        </i>
                        Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon">
                        </i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science</h3>
                                <span className="qualification__subtitle">
                                    Tongren - Univeresity
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2018 -2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
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
                                <h3 className="qualification__title">Back-End (API)</h3>
                                <span className="qualification__subtitle">
                                    ETL COMPANY LIMITED
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2022/09 -2022/12
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Web Development (Graduation Thesis)</h3>
                                <span className="qualification__subtitle">
                                    Tongren - Univeresity
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2023/01 -present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
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
                                <h3 className="qualification__title">Mobile Development</h3>
                                <span className="qualification__subtitle">
                                    KOLAO GROUP
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2023/03 -present
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">
                        <div>
                                <h3 className="qualification__title">Computer Science</h3>
                                <span className="qualification__subtitle">
                                    Tongren - Univeresity
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2018 -2023
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
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
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Big Data - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021 -present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Big Data - Institute
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021 -present
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
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