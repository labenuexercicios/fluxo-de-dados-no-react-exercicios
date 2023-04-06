import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = () => {
  return (
    <ProfileWrapper>
      <ProfileImage src={"https://picsum.photos/200"} alt="Profile Image" />
      <ProfileName>Astrodev</ProfileName>
      <ProfileBio>Dev Full Stack</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
