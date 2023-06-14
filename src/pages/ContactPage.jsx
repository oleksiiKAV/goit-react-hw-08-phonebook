import { ContactForm, ContactList, Filter, Loader } from 'components';
import {
  SubtitleStyled,
  TitleStyled,
} from 'components/ContactForm/ContactForm.styled';

const ContactPage = () => {
  return (
    <div style={{padding:'70px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <SubtitleStyled>Contacts</SubtitleStyled>
      <Filter />
      <Loader />
      <ContactList />
    </div>
  );
};

export default ContactPage;
