import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import { useState } from "react"

function ProfileScreen() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [image, setImage] = useState("")

  const mudarName = (event) => {
    setName(event.target.value)
  }
  const mudarBio = (event) => {
    setBio(event.target.value)
  }
  const mudarImage = (event) => {
    setImage(event.target.value)
  }

  const clearInputs = (event) => {
    event.target.name.value = ""
    event.target.bio.value = ""
    event.target.imageUrl.value = ""
  }
  
  const submit = (event) => {
    event.preventDefault()
    setName(event.target.name.value)
    setBio(event.target.bio.value)
    setImage(event.target.imageUrl.value)
    clearInputs(event)

 
  }
  return (
    <ScreenContainer>
      <ProfileMenu name={name} bio={bio} image={image} />

      <ProfileForm submit={submit} name={name} bio={bio} image={image}
      mudarName={mudarName} mudarBio={mudarBio} mudarImage={mudarImage}/>
    </ScreenContainer>
  );
}

export default ProfileScreen;