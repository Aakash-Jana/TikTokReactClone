import React  from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

// class VideoFooter extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div className="videofooter">
//                 <div className="videofooter_text">
//                     <h3>@aakash</h3>
//                     <p>This is the description</p>
//                     <div className="videofooter_ticker">
//                     <MusicNoteIcon className="videofooter_icon"/>
//                     <Ticker mode="smooth">
//                         {({index}) => (
//                             <>
//                             <p>The name of this record is here.</p>
//                             </>
//                         )}
//                     </Ticker>
//                     </div>
//                 </div>
//                 <img className="videofooter_record" src={process.env.PUBLIC_URL + "/disc.png"} alt=""/>
//             </div>
//         );
//     }
// }

const VideoFooter = ({channel, description,song}) => {
    return ( 
        <div className="videofooter">
                <div className="videofooter_text">
                    <h3>@{channel}</h3>
                    <p>{description}</p>
                    <div className="videofooter_ticker">
                    <MusicNoteIcon className="videofooter_icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                    </div>
                </div>
                <img className="videofooter_record" src={process.env.PUBLIC_URL + "/disc.png"} alt=""/>
            </div>
    );
}
 
export default VideoFooter;