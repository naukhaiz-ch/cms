import React from 'react'
import Navbar from './components/Navbar'
import AddPrescription from './components/videoCall/AddPrescription'
import Video from './components/videoCall/Video'

const VideoCall = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-6">
                    <Video />
                </div>
                <div className="col-6">
                    <AddPrescription />
                </div>
            </div>
        </>
    )
}

export default VideoCall
