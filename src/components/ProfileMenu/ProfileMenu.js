import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = ({ nome, imageUrl, bio }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={imageUrl} alt="Profile Image" />
      <ProfileName>{nome}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
