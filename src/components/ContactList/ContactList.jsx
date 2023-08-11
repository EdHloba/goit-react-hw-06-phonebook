import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
