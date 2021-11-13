import React from 'react'
import Navbar from './components/Navbar'
import AddPrescription from './components/videoCall/AddPrescription'
import Records from './components/videoCall/Records'
import Stream from './components/videoCall/stream'

const VideoCall = () => {
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const userRole = localUser?.result?.userRole


    return (
        <>
            <Navbar />
            {userRole === 'Doctor' ?
                (<div className="row">
                    <div className="col-6">
                        <Stream />
                    </div>
                    <div className="col-6">
                        <AddPrescription />
                        <Records />
                    </div>
                </div>)
                :
                (<div>
                    <Stream />
                </div>)
            }

        </>
    )
}

export default VideoCall
