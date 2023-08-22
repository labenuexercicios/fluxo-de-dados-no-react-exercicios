import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";

const ProfileForm = (props) => {
  const {submit, name, bio, image, mudarName, mudarBio, mudarImage} = props
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form onSubmit={submit}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            //value={name}
            //onChange={mudarName}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            //value={bio}
            //onChange={mudarBio}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            //value={image}
            //onChange={mudarImage}
          />
        </InputWrapper>

        <Button type="submit">Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
