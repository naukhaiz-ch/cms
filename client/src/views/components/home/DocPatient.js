import React from 'react'
import { Link } from 'react-router-dom';

function DocPatient() {
    return (
        <>
            <section class="doctor-divison">
                <div class="d-flex">
                    <div class="doc-background">
                        <h3>ARE YOU A DOCTOR?</h3>
                        <p>The service allows you to get maximum visibility online and to manage appointments and contacts
                            coming from the site, in a simple and fast way.</p>
                        <Link to="/auth" class="doc-bok-btn">Book Now</Link>
                    </div>
                    <div class="pat-background">
                        <h3>ARE YOU A PATIENT?</h3>
                        <p>The service allows you to get maximum visibility online and to manage appointments and contacts
                            coming from the site, in a simple and fast way.</p>
                        <Link to="/auth" class="doc-bok-btn">Book Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DocPatient
