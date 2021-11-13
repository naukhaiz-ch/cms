import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SocketContext } from '../../streamer/context'
import { setUserKey } from '../../actions/Users'

const VideoPlayer = ({ advisorKey }) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, myKey, setName, leaveCall, callUser, answerCall } = useContext(SocketContext)
  // alert(advisorKey)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <div className="row">
      <div className="col-12">
        {stream && (
          <div className="col-10 offset-1">
            <div className="single-story-box wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
              <video className="w-150" playsInline muted ref={myVideo} controls autoPlay />
            </div>
            <form noValidate autoComplete="off">
              {
                user?.result?.userRole === 'Doctor' && (
                  <div className="form-group">
                    <input className="my-form-control" label="Name" value={user?.result?.name} hidden />
                    <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(setUserKey(user?.result?._id, myKey))} >Online  </button>
                  </div>
                )
              }
              <div className="form-group">
                <button type="button" className="btn btn-primary submit-btn" s onClick={() => window.location.reload()}>REFRESH</button>
                {
                  user?.result?.userRole === 'Doctor' ? (
                    callAccepted && !callEnded && (
                      <button className="btn btn-danger submit-btn" type="button" onClick={leaveCall}>
                        Hang Up
                      </button>
                    )
                  ) : (
                    callAccepted && !callEnded ? (
                      <button className="btn btn-danger submit-btn" type="button" onClick={leaveCall}>
                        Hang Up
                      </button>
                    ) : (
                      <button className="btn btn-primary submit-btn" type="button" variant="contained" color="primary" onClick={() => callUser(advisorKey)}>
                        Call
                      </button>
                    )
                  )
                }
              </div>
            </form>
            {call.isReceivingCall && !callAccepted && (
              <div>
                <h5>You are getting a call: {call.name}</h5>
                <button onClick={answerCall} className="btn btn-primary">
                  Answer
                </button>
              </div>
            )}
          </div>
        )}
        {callAccepted && !callEnded && (
          <div className="row">
            <div className="col-12">
              <div className=" single-story-box wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <video className="w-150" playsInline ref={userVideo} controls autoPlay />
              </div>

              {call.isReceivingCall && !callAccepted && (
                <div>
                  <h1>{call.name} is calling:</h1>
                  <button onClick={answerCall}>
                    Answer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default VideoPlayer
