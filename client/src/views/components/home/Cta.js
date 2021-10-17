import React from 'react'
import { Link } from 'react-router-dom';

function Cta() {
    return (
        <>
            <section class="section home-tile-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-9 m-auto">
                            <div class="section-header text-center">
                                <h2>What are you looking for?</h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 mb-3">
                                    <div class="card text-center doctor-book-card">
                                        <img src="assets/img/doctors/doctor-07.jpg" alt="img"
                                            class="img-fluid" />
                                        <div class="doctor-book-card-content tile-card-content-1">
                                            <div>
                                                <h3 class="card-title mb-0">Visit a Doctor</h3>
                                                <Link
                                                    to="/doc-list"
                                                    class="btn book-btn1 px-3 py-2 mt-3"
                                                    tabindex="0"
                                                >Book Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="card text-center doctor-book-card">
                                        <img
                                            src="assets/img/img-pharmacy1.jpg"
                                            alt="pharmacy1"
                                            class="img-fluid"
                                        />
                                        <div class="doctor-book-card-content tile-card-content-1">
                                            <div>
                                                <h3 class="card-title mb-0">Find a Pharmacy</h3>
                                                <Link
                                                    to="/pharmacy-list"
                                                    class="btn book-btn1 px-3 py-2 mt-3"
                                                    tabindex="0"
                                                >Find Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="card text-center doctor-book-card">
                                        <img
                                            src="assets/img/lab-image.jpg"
                                            alt=""
                                            class="img-fluid"
                                        />
                                        <div class="doctor-book-card-content tile-card-content-1">
                                            <div>
                                                <h3 class="card-title mb-0">Find a Lab</h3>
                                                <Link to="/laboratory-list" class="btn book-btn1 px-3 py-2 mt-3"
                                                    tabindex="0">Find Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
