import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  return (
    <ScreenContainer>
      <ProfileMenu />

      <ProfileForm />
    </ScreenContainer>
  );
}

export default ProfileScreen;