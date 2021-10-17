import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-top">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-about">
                                    <div class="footer-logo">
                                        <img src="assets/img/footer-logo.png" alt="logo" />
                                    </div>
                                    <div class="footer-about-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                        <div class="social-icon">
                                            <ul>
                                                <li>
                                                    <Link to="#" target="_blank"><i class="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank"
                                                    ><i class="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank"
                                                    ><i class="fab fa-linkedin-in"></i
                                                    ></Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank"
                                                    ><i class="fab fa-instagram"></i
                                                    ></Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank"
                                                    ><i class="fab fa-dribbble"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-menu">
                                    <h2 class="footer-title">For Patients</h2>
                                    <ul>
                                        <li><Link to="/doc-list">Search for Doctors</Link></li>
                                        <li><Link to="/auth">Login</Link></li>
                                        <li><Link to="doc-list">Booking</Link></li>
                                        <li>
                                            <Link to="/Patient">Patient Dashboard</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-menu">
                                    <h2 class="footer-title">For Doctors</h2>
                                    <ul>
                                        <li><Link to="/appointments">Appointments</Link></li>
                                        <li><Link to="/auth">Login</Link></li>
                                        <li>
                                            <Link to="/Doctor">Doctor Dashboard</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-contact">
                                    <h2 class="footer-title">Contact Us</h2>
                                    <div class="footer-contact-info">
                                        <div class="footer-address">
                                            <span><i class="fas fa-map-marker-alt"></i></span>
                                            <p>
                                                3556 Beech Street, San Francisco,<br />
                                                California, CA 94108
                                            </p>
                                        </div>
                                        <p>
                                            <i class="fas fa-phone-alt"></i>
                                            0092 308 4800652
                                        </p>
                                        <p class="mb-0">
                                            <i class="fas fa-envelope"></i>
                                            naukhaiz@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container-fluid">
                        <div class="copyright">
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <div class="copyright-text">
                                        <p class="mb-0">
                                            &copy; 2021 Doccure. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <div class="copyright-menu">
                                        <ul class="policy-menu">
                                            <li>
                                                <Link to="term-condition.html">Terms and Conditions</Link>
                                            </li>
                                            <li><Link to="privacy-policy.html">Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
