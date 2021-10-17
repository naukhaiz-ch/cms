import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';

function PharmacyProfile() {
    return (
        <>
            <Navbar />


            <div class="main-wrapper">
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">
                                            Pharmacy Details
                                        </li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Pharmacy Details</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                <div class="doctor-widget">
                                    <div class="doc-info-left">
                                        <div class="doctor-img1">
                                            <Link to="/lab-profile">
                                                <img
                                                    src="assets/img/medical-img1.jpg"
                                                    class="img-fluid"
                                                    alt="UserImage"
                                                />
                                            </Link>
                                        </div>
                                        <div class="doc-info-cont">
                                            <h4 class="doc-name mb-2">
                                                <Link to="/lab-profile">Medlife Medical</Link>
                                            </h4>
                                            <div class="rating mb-2">
                                                <span class="badge badge-primary">4.0</span>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="d-inline-block average-rating">(17)</span>
                                            </div>
                                            <div class="clinic-details">
                                                <div class="clini-infos pt-3">
                                                    <p class="doc-location mb-2">
                                                        <i class="fas fa-phone-volume mr-1"></i> 320-795-8815
                                                    </p>
                                                    <p class="doc-location mb-2 text-ellipse">
                                                        <i class="fas fa-map-marker-alt mr-1"></i> 96 Red Hawk
                                                        Road Cyrus, MN 56323
                                                    </p>
                                                    <p class="doc-location mb-2">
                                                        <i class="fas fa-chevron-right mr-1"></i> Chemists,
                                                        Surgical Equipment Dealer
                                                    </p>
                                                    <p class="doc-location mb-2">
                                                        <i class="fas fa-chevron-right mr-1"></i> Opens at
                                                        08.00 AM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="
										doc-info-right
										d-flex
										align-items-center
										justify-content-center
									"
                                    >
                                        <div class="clinic-booking">
                                            <Link class="view-pro-btn" to="chat.html">Send Message</Link>
                                            <Link
                                                class="apt-btn"
                                                to="#"
                                                data-toggle="modal"
                                                data-target="#voice_call"
                                            >Call Now</Link
                                            >
                                            <Link to="product-all.html" class="view-pro-btn"
                                            >Browse Products</Link
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body pt-0">
                                <nav class="user-tabs mb-4">
                                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li class="nav-item">
                                            <Link
                                                class="nav-link active"
                                                to="#doc_overview"
                                                data-toggle="tab"
                                            >Overview</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#doc_locations" data-toggle="tab"
                                            >Locations</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#doc_reviews" data-toggle="tab"
                                            >Reviews</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link
                                                class="nav-link"
                                                to="#doc_business_hours"
                                                data-toggle="tab"
                                            >Business Hours</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <div class="tab-content pt-0">
                                    <div
                                        role="tabpanel"
                                        id="doc_overview"
                                        class="tab-pane fade show active"
                                    >
                                        <div class="row">
                                            <div class="col-md-9">
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">About Me</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip
                                                        ex ea commodo consequat. Duis aute irure dolor in
                                                        reprehenderit in voluptate velit esse cillum dolore eu
                                                        fugiat nulla pariatur. Excepteur sint occaecat
                                                        cupidatat non proident, sunt in culpa qui officia
                                                        deserunt mollit anim id est laborum.
                                                    </p>
                                                </div>

                                                <div class="widget awards-widget">
                                                    <h4 class="widget-title">Awards</h4>
                                                    <div class="experience-box">
                                                        <ul class="experience-list">
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">
                                                                        <p class="exp-year">July 2019</p>
                                                                        <h4 class="exp-title">Humanitarian Award</h4>
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Proin a ipsum tellus.
                                                                            Interdum et malesuada fames ac ante ipsum
                                                                            primis in faucibus.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">
                                                                        <p class="exp-year">March 2011</p>
                                                                        <h4 class="exp-title">
                                                                            Certificate for International Volunteer
                                                                            Service
                                                                        </h4>
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Proin a ipsum tellus.
                                                                            Interdum et malesuada fames ac ante ipsum
                                                                            primis in faucibus.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">
                                                                        <p class="exp-year">May 2008</p>
                                                                        <h4 class="exp-title">
                                                                            The Dental Professional of The Year Award
                                                                        </h4>
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Proin a ipsum tellus.
                                                                            Interdum et malesuada fames ac ante ipsum
                                                                            primis in faucibus.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div role="tabpanel" id="doc_locations" class="tab-pane fade">
                                        <div class="location-list">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="clinic-content">
                                                        <h4 class="clinic-name">
                                                            <Link to="#">Medlife Medical</Link>
                                                        </h4>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating"
                                                            >(4)</span
                                                            >
                                                        </div>
                                                        <div class="clinic-details mb-0">
                                                            <h5 class="clinic-direction">
                                                                <i class="fas fa-map-marker-alt"></i> 96 Red Hawk
                                                                Road Cyrus, MN 56323 <br /><Link
                                                                    to=""
                                                                >Get Directions</Link>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-01.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-01.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-02.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-02.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-03.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-03.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-04.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-04.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="clinic-timing">
                                                        <div>
                                                            <p class="timings-days">
                                                                <span> Mon - Sat </span>
                                                            </p>
                                                            <p class="timings-times">
                                                                <span>10:00 AM - 2:00 PM</span>
                                                                <span>4:00 PM - 9:00 PM</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p class="timings-days">
                                                                <span>Sun</span>
                                                            </p>
                                                            <p class="timings-times">
                                                                <span>10:00 AM - 2:00 PM</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="location-list">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="clinic-content">
                                                        <h4 class="clinic-name">
                                                            <Link to="#">Medlife Medical</Link>
                                                        </h4>
                                                        <div class="rating">
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star filled"></i>
                                                            <i class="fas fa-star"></i>
                                                            <span class="d-inline-block average-rating"
                                                            >(4)</span
                                                            >
                                                        </div>
                                                        <div class="clinic-details mb-0">
                                                            <p class="clinic-direction">
                                                                <i class="fas fa-map-marker-alt"></i> 310
                                                                Cambridge Drive New River, AZ 85020 <br /><Link
                                                                    to=""
                                                                >Get Directions</Link
                                                                >
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-01.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-01.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-02.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-02.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-03.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-03.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="assets/img/features/feature-04.jpg"
                                                                        data-fancybox="gallery2"
                                                                    >
                                                                        <img
                                                                            src="assets/img/features/feature-04.jpg"
                                                                            alt="FeatureImage"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="clinic-timing">
                                                        <div>
                                                            <p class="timings-days">
                                                                <span> Tue - Fri </span>
                                                            </p>
                                                            <p class="timings-times">
                                                                <span>11:00 AM - 1:00 PM</span>
                                                                <span>6:00 PM - 11:00 PM</span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p class="timings-days">
                                                                <span>Sat - Sun</span>
                                                            </p>
                                                            <p class="timings-times">
                                                                <span>8:00 AM - 10:00 AM</span>
                                                                <span>3:00 PM - 7:00 PM</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div role="tabpanel" id="doc_reviews" class="tab-pane fade">
                                        <div class="widget review-listing">
                                            <ul class="comments-list">
                                                <li>
                                                    <div class="comment">
                                                        <img
                                                            class="avatar avatar-sm rounded-circle"
                                                            alt="UserImage"
                                                            src="assets/img/patients/patient.jpg"
                                                        />
                                                        <div class="comment-body">
                                                            <div class="meta-data">
                                                                <span class="comment-author">Armando Pack</span>
                                                                <span class="comment-date"
                                                                >Reviewed 2 Days ago</span
                                                                >
                                                                <div class="review-count rating">
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <p class="recommended">
                                                                <i class="far fa-thumbs-up"></i> I recommend the
                                                                doctor
                                                            </p>
                                                            <p class="comment-content">
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit, sed do eiusmod tempor incididunt
                                                                ut labore et dolore magna aliqua. Ut enim ad minim
                                                                veniam, quis nostrud exercitation. Curabitur non
                                                                nulla sit amet nisl tempus
                                                            </p>
                                                            <div class="comment-reply">
                                                                <Link class="comment-btn" to="#">
                                                                    <i class="fas fa-reply"></i> Reply
                                                                </Link>
                                                                <p class="recommend-btn">
                                                                    <span>Recommend?</span>
                                                                    <Link to="#" class="like-btn">
                                                                        <i class="far fa-thumbs-up"></i> Yes
                                                                    </Link>
                                                                    <Link to="#" class="dislike-btn">
                                                                        <i class="far fa-thumbs-down"></i> No
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ul class="comments-reply">
                                                        <li>
                                                            <div class="comment">
                                                                <img
                                                                    class="avatar avatar-sm rounded-circle"
                                                                    alt="UserImage"
                                                                    src="assets/img/patients/patient1.jpg"
                                                                />
                                                                <div class="comment-body">
                                                                    <div class="meta-data">
                                                                        <span class="comment-author"
                                                                        >Lindsey Kesterson</span
                                                                        >
                                                                        <span class="comment-date"
                                                                        >Reviewed 3 Days ago</span
                                                                        >
                                                                        <div class="review-count rating">
                                                                            <i class="fas fa-star filled"></i>
                                                                            <i class="fas fa-star filled"></i>
                                                                            <i class="fas fa-star filled"></i>
                                                                            <i class="fas fa-star filled"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                    <p class="comment-content">
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua.
                                                                        Ut enim ad minim veniam. Curabitur non nulla
                                                                        sit amet nisl tempus
                                                                    </p>
                                                                    <div class="comment-reply">
                                                                        <Link class="comment-btn" to="#">
                                                                            <i class="fas fa-reply"></i> Reply
                                                                        </Link>
                                                                        <p class="recommend-btn">
                                                                            <span>Recommend?</span>
                                                                            <Link to="#" class="like-btn">
                                                                                <i class="far fa-thumbs-up"></i> Yes
                                                                            </Link>
                                                                            <Link to="#" class="dislike-btn">
                                                                                <i class="far fa-thumbs-down"></i> No
                                                                            </Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <div class="comment">
                                                        <img
                                                            class="avatar avatar-sm rounded-circle"
                                                            alt="UserImage"
                                                            src="assets/img/patients/patient2.jpg"
                                                        />
                                                        <div class="comment-body">
                                                            <div class="meta-data">
                                                                <span class="comment-author">Travis Trimble</span>
                                                                <span class="comment-date"
                                                                >Reviewed 4 Days ago</span
                                                                >
                                                                <div class="review-count rating">
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star filled"></i>
                                                                    <i class="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <p class="comment-content">
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit, sed do eiusmod tempor incididunt
                                                                ut labore et dolore magna aliqua. Ut enim ad minim
                                                                veniam, quis nostrud exercitation. Curabitur non
                                                                nulla sit amet nisl tempus
                                                            </p>
                                                            <div class="comment-reply">
                                                                <Link class="comment-btn" to="#">
                                                                    <i class="fas fa-reply"></i> Reply
                                                                </Link>
                                                                <p class="recommend-btn">
                                                                    <span>Recommend?</span>
                                                                    <Link to="#" class="like-btn">
                                                                        <i class="far fa-thumbs-up"></i> Yes
                                                                    </Link>
                                                                    <Link to="#" class="dislike-btn">
                                                                        <i class="far fa-thumbs-down"></i> No
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div class="all-feedback text-center">
                                                <Link to="#" class="btn btn-primary btn-sm">
                                                    Show all feedback <strong>(167)</strong>
                                                </Link>
                                            </div>
                                        </div>

                                        <div class="write-review">
                                            <h4>Write a review for <strong>Medlife Medical</strong></h4>

                                            <form>
                                                <div class="form-group">
                                                    <label>Review</label>
                                                    <div class="star-rating">
                                                        <input
                                                            id="star-5"
                                                            type="radio"
                                                            name="rating"
                                                            value="star-5"
                                                        />
                                                        <label for="star-5" title="5 stars">
                                                            <i class="active fa fa-star"></i>
                                                        </label>
                                                        <input
                                                            id="star-4"
                                                            type="radio"
                                                            name="rating"
                                                            value="star-4"
                                                        />
                                                        <label for="star-4" title="4 stars">
                                                            <i class="active fa fa-star"></i>
                                                        </label>
                                                        <input
                                                            id="star-3"
                                                            type="radio"
                                                            name="rating"
                                                            value="star-3"
                                                        />
                                                        <label for="star-3" title="3 stars">
                                                            <i class="active fa fa-star"></i>
                                                        </label>
                                                        <input
                                                            id="star-2"
                                                            type="radio"
                                                            name="rating"
                                                            value="star-2"
                                                        />
                                                        <label for="star-2" title="2 stars">
                                                            <i class="active fa fa-star"></i>
                                                        </label>
                                                        <input
                                                            id="star-1"
                                                            type="radio"
                                                            name="rating"
                                                            value="star-1"
                                                        />
                                                        <label for="star-1" title="1 star">
                                                            <i class="active fa fa-star"></i>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Title of your review</label>
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        placeholder="If you could say it in one sentence, what would you say?"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>Your review</label>
                                                    <textarea
                                                        id="review_desc"
                                                        maxlength="100"
                                                        class="form-control"
                                                    ></textarea>
                                                    <div class="d-flex justify-content-between mt-3">
                                                        <small class="text-muted"
                                                        ><span id="chars">100</span> characters
                                                            remaining</small
                                                        >
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="form-group">
                                                    <div class="terms-accept">
                                                        <div class="custom-checkbox">
                                                            <input type="checkbox" id="terms_accept" />
                                                            <label for="terms_accept"
                                                            >I have read and accept
                                                                <Link to="#">Terms &amp; Conditions</Link></label
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="submit-section">
                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary submit-btn"
                                                    >
                                                        Add Review
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div
                                        role="tabpanel"
                                        id="doc_business_hours"
                                        class="tab-pane fade"
                                    >
                                        <div class="row">
                                            <div class="col-md-6 offset-md-3">
                                                <div class="widget business-widget">
                                                    <div class="widget-content">
                                                        <div class="listing-hours">
                                                            <div class="listing-day current">
                                                                <div class="day">
                                                                    Today <span>5 Nov 2019</span>
                                                                </div>
                                                                <div class="time-items">
                                                                    <span class="open-status"
                                                                    ><span class="badge bg-success-light"
                                                                    >Open Now</span
                                                                        ></span
                                                                    >
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Monday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Tuesday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Wednesday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Thursday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Friday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day">
                                                                <div class="day">Saturday</div>
                                                                <div class="time-items">
                                                                    <span class="time">07:00 AM - 09:00 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="listing-day closed">
                                                                <div class="day">Sunday</div>
                                                                <div class="time-items">
                                                                    <span class="time"
                                                                    ><span class="badge bg-danger-light"
                                                                    >Closed</span
                                                                        ></span
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default PharmacyProfile
