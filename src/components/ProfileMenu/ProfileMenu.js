import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = (props) => {
  const {name, bio, image} = props
  return (
    <ProfileWrapper>
      <ProfileImage src={image} />
      <ProfileName>{name}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
