import {
  AddContactContainer,
  AddDetails,
  Title,
  ContainerForm,
  Form,
  Label,
  Input,
  InputHidden,
  AddButton,
  IconAddContact,
  ButtonAvatar,
  AvatarIcon,
  UploadIcon,
} from './contactAddEdit.styled';

export default function ContactAddEdit({
  title,
  titleButton,
  handleSubmit,
  handlePick,
  avatarPicker,
  name,
  phone,
  email,
}) {
  return (
    <AddContactContainer>
      <AddDetails>
        <Title>{title}</Title>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            {/* =============================================== */}
            <Label>
              <ButtonAvatar onClick={handlePick} type="button">
                <AvatarIcon />
                <UploadIcon />
              </ButtonAvatar>
              <InputHidden
                ref={avatarPicker}
                type="file"
                name="avatar"
                accept="image/*,.png,.jpeg,.webp"
              />
            </Label>
            {/* =============================================== */}
            <Label>
              <Input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>
            <Label>
              <Input
                type="tel"
                name="number"
                defaultValue={phone}
                placeholder="Phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>

            <Label>
              <Input
                type="tel"
                name="email"
                defaultValue={email}
                placeholder="Email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="The email address must be set to letters and contain @, it must not contain spaces, dashes, or parentheses. "
              />
            </Label>

            <AddButton type="submit">
              {titleButton}&nbsp;
              <IconAddContact />
            </AddButton>
          </Form>
        </ContainerForm>
      </AddDetails>
    </AddContactContainer>
  );
}
