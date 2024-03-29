import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hector</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://www.instagram.com/hectorup16?igsh=czZ0ZXl5NHJkYmR2" className="footer__social-link" target='_blank'>
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://github.com/hectorup16" className="footer__social-link" target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="mailto:hectorup16@gmail.com.com" className="footer__social-link" target='_blank'>
                        <i class="uil uil-at"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; Hector Luis Ortega. All rigths reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
