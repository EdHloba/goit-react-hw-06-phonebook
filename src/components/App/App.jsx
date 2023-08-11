import { Container, Title, SubTitle } from './App.styled';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
