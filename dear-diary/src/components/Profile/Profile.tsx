
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useAppSelector } from '../../redux/store/hooks';
import "./Profile.css"

const Profile = () => {
    const name = useAppSelector((state) => state.user.userName)
    return (
        <div className="profile-wrapper">
            <div className="profile-name">
                <AccountCircleRoundedIcon className="profile-icon" style={{ fontSize: 40, color: '#33A8E4' }} />
                <div className="profile-name-text">
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Profile;