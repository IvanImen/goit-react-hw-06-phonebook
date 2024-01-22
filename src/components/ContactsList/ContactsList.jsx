import { ContactsListItem } from 'components';
import React from 'react';
import { ListStyled } from './ContactsList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ListStyled>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} name={name} number={number} id={id} />
        );
      })}
    </ListStyled>
  );
};
