import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";

const ProfileForm = ({
  nome,
  onChangeNome,
  bio,
  onChangeBio,
  imageUrl,
  onChangeImageUrl,
  buttonEnviar
}) => {

  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={nome}
            onChange={onChangeNome}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={bio}
            onChange={onChangeBio}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={imageUrl}
            onChange={onChangeImageUrl}
          />
        </InputWrapper>

        <Button onClick={buttonEnviar}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;


//https://codesandbox.io/s/fluxo-de-dados-feedback-forked-t0r07c?file=/src/components/ProfileForm/ProfileForm.js