import React from 'react'

function Hero() {
    return (
        <>
            <div class="pharmacy-home-slider">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="assets/img/slide1.jpg" alt="slide1" />
                        </div>
                    </div>
                    <div class="banner-wrapper">
                        <div class="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>
                                Discover the best doctors, clinic & hospital the city nearest to
                                you.
                            </p>
                        </div>

                        <div class="search-box">
                            <form action="">
                                <div class="form-group search-location">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search Location"
                                    />
                                    <span class="form-text">Based on your Location</span>
                                </div>
                                <div class="form-group search-info">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                                    />
                                    <span class="form-text"
                                    >Ex : Dental or Sugar Check up etc</span
                                    >
                                </div>
                                <button type="submit" class="btn btn-primary search-btn mt-0">
                                    <i class="fas fa-search"></i> <span>Search</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination"></div>
            </div>
            {/* <section class="section-search-3">
                <div class="container">
                    <div class="banner-info">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="header-banner">
                                    <h2>Search Doctor, <br /> <span class="header-highlight">Make an Appointment</span></h2>
                                    <p>Discover the best doctors, laboratories & pharmacies in the city nearest to you.</p>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="doctor-search">
                                    <div class="doctor-form">
                                        <form class="doctor-search-form trans">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <div class="form-custom">
                                                            <input type="text" class="form-control" value=""
                                                                placeholder="Search Location" />
                                                            <i class="far fa-compass"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <div class="form-custom">
                                                            <input type="text" class="form-control" value=""
                                                                placeholder="Gender" />
                                                            <i class="far fa-smile"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="form-group">
                                                        <div class="form-custom">
                                                            <input type="text" class="form-control" value=""
                                                                placeholder="Department" />
                                                            <i class="fas fa-user-check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <a href="search.html" class="btn banner-btn">MAKE APPOINTMENT</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Hero
