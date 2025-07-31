import React from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video' >
            <video src={video} controls autoPlay
                muted > </video>
            <h3> Best Youtube Channel To learn Web Development </h3>
            <div className="play-video-info">
                <p>152k views &bull; 2days ago</p>
                <div>
                    <span><img src={like} alt="" />125k</span>
                    <span><img src={dislike} alt="" />5k</span>
                    <span><img src={share} alt="" />1k</span>
                    <span><img src={save} alt="" />2k</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p> M-teach </p>
                    <span> 1M Subscribers </span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p> Channel that makes learning Easy </p>
                <p> Subscribe This channel to watch More Tutorials on web development </p>
                <hr />
                <h4>150 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span> </h3>
                        <p>Amazing video! Learned a lot from it. A global perspective on web development.</p>
                        <div className="comment-section">
                            <img src={like} alt="" />
                            <span>125</span>
                            <img src={dislike} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo