import React from 'react';
import { useLocation } from 'react-router';

import VideoPlayer from '../streamVideo';
import { ContextProvider } from '../../../streamer/context'

const Stream = () => {
    const location = useLocation()
    const { advisorKey } = location.state
    // const { advisorKey } = '123456'
    // alert(advisorKey)

    return (
        <>
            <ContextProvider>
                <div class="row">
                    <div class="col-10 offset-1 ">
                        <div class="call-wrapper">
                            <div class="call-main-row">
                                <div class="call-main-wrapper">
                                    <div class="call-view">
                                        <div class="call-window">
                                            <div class="call-contents">
                                                <div class="call-content-wrap">
                                                    <div class="user-video" >
                                                        <VideoPlayer advisorKey={advisorKey} />
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
            </ContextProvider>
        </>
    )
}

export default Stream
