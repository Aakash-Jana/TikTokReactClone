import React, { useState } from 'react';
import './VideoSideBar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';


function VideoSideBar({likes, shares, comments}){
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSideBar" >
            <div className="videoSidebar_button">
                {liked ? 
                (<FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
                )}
                <p>{liked ? likes+1 : likes}</p>
            </div>
            {/* <div className="videoSidebar_button">
                <FavoriteIcon/>
                <p>300</p>
            </div>
            <div className="videoSidebar_button">
                <FavoriteBorderIcon/>
                <p>230</p>
            </div> */}
            <div className="videoSidebar_button">
                <MessageIcon fontSize="large"/>
                <p>{comments}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    );
}
 
export default VideoSideBar;