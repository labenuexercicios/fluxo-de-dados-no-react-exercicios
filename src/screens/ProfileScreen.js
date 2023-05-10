import { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  const [nome, setNome] = useState("")
  const [bio, setBio] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [nome1, setNome1] = useState("")
  const [bio1, setBio1] = useState("")
  const [imageUrl1, setImageUrl1] = useState("")


  const onChangeNome = (event) => {
    setNome(event.target.value)
    console.log(event.target.value)
  }


  const onChangeBio = (event) => {
    setBio(event.target.value)
    console.log(event.target.value)
  }

  const onChangeImageUrl = (event) => {
    setImageUrl(event.target.value)
    console.log(event.target.value)
  }

  const buttonEnviar = () => {
    setNome1(nome)
    setBio1(bio)
    setImageUrl1(imageUrl)
  }

  return (
    <ScreenContainer>
      <ProfileMenu
        nome={nome1}
        bio={bio1}
        imageUrl={imageUrl1}
      />

      <ProfileForm
        nome={nome}
        onChangeNome={onChangeNome}
        bio={bio}
        onChangeBio={onChangeBio}
        imageUrl={imageUrl}
        onChangeImageUrl={onChangeImageUrl}
        buttonEnviar={buttonEnviar}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;