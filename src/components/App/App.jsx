import React from 'react';

import { ContactForm, ContactsList, Filter } from 'components';
import { ContainerStyled, SectionStyled, TitleStyled } from './AppStyled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  // );

  // useEffect(() => {
  //   isLoaded &&
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts, isLoaded]);

  return (
    <SectionStyled>
      <ContainerStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm />
        <TitleStyled>Contacts</TitleStyled>
        <Filter />
        <ContactsList />
      </ContainerStyled>
    </SectionStyled>
  );
};
