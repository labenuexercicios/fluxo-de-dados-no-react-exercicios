import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import { useState } from "react"

function ProfileScreen() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [image, setImage] = useState("")

 

  const clearInputs = (event) => {
    event.target.name.value = ""
    event.target.bio.value = ""
    event.target.image.value = ""
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

      <ProfileForm submit={submit} name={name} bio={bio} image={image}/>
    </ScreenContainer>
  );
}

export default ProfileScreen;