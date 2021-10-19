import React from 'react'
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <>
            <div class="row">
                <div class="col-10 offset-1 ">
                    <div class="call-wrapper">
                        <div class="call-main-row">
                            <div class="call-main-wrapper">
                                <div class="call-view">
                                    <div class="call-window">
                                        <div class="call-contents">
                                            <div class="call-content-wrap">
                                                <div class="user-video">
                                                    <img
                                                        src="assets/img/video-call.jpg"
                                                        alt="User pic"
                                                    />
                                                </div>
                                                <div class="my-video">
                                                    <ul>

                                                        <li>
                                                            <img
                                                                src="assets/img/patients/patient1.jpg"
                                                                class="img-fluid"
                                                                alt="User pic"
                                                            />
                                                        </li>
                                                        <li>
                                                            <div class="end-call">
                                                                <Link to="/">
                                                                    <i class="material-icons">call_end</i>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ul>
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
        </>
    )
}

export default Video
