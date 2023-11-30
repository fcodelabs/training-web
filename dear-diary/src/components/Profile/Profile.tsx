
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./Profile.css"

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-name">
                <AccountCircleRoundedIcon className="profile-icon" style={{ fontSize: 40, color: '#33A8E4' }} />
                <div className="profile-name-text">
                    User
                </div>
            </div>
        </div>
    );
};

export default Profile;