
import { useAppSelector } from '../../redux/hooks';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    padding: 5px 5px 1px 1px;
    margin-top: 10px;
    z-index: 1;`

const ProfileName = styled.div`
    z-index: 1;
    width: 100%;
    margin-right: 2%;`

const ProfileNameText = styled.div`
    z-index: 1;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: rgb(0, 0, 0);

    @media screen and (max-width: 768px) {
        transform: scale(0.85);
    }`

const ImageProfile = styled.img`
    z-index: 1;
    width: 95%;
    border-radius: 50%;
    object-fit: cover;`;

const Profile = () => {
    const name = useAppSelector((state) => state.user.userName)
    return (
        <ProfileWrapper>
            <ProfileName>
                <ImageProfile src={"https://res.cloudinary.com/dzsokhvfq/image/upload/v1703007607/vpgx1dyoefgkgebbbrrs.svg"}></ImageProfile>
                <ProfileNameText >
                    {name}
                </ProfileNameText>
            </ProfileName>
        </ProfileWrapper>
    );
};

export default Profile;