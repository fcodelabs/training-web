
import { useAppSelector } from '../../redux/store/hooks';
import "./Profile.css"

const Profile = () => {
    const name = useAppSelector((state) => state.user.userName)
    return (
        <div className="profile-wrapper">
            <div className="profile-name">
                <img src={"/user-avatar.svg"} className='image-profile'></img>
                <div className="profile-name-text"  >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Profile;