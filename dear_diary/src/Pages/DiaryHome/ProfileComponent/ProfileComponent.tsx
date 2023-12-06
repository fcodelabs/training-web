import Box from '@mui/material/Box';
import ProfileIcon from "./Avatar.png"
import "./ProfileComponent.css";

function ProfileComponent(){
    return(
        <div className="profile">
            <div className="profile-pic">
                <Box>
                    <img src={ProfileIcon} alt="icon" className="profile-icon" />
                </Box>
            </div>

            <div className="profile-name">
                    <div className="name">
                        William
                    </div>
            </div>
        </div>
    );
}
export default ProfileComponent
