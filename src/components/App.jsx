import { Component } from 'react';
import { Box } from 'constans';
import { nanoid } from 'nanoid';
import { ContactForm } from './phonebook/contactForm';
import { ContactList } from './phonebook/contactList';
import { Filter } from './phonebook/filter';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = ({ name, number }) => {
    this.setState({ name, number });
    const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const checkName = contacts.find(el => {
      return el.name === contact.name;
    });
    !checkName
      ? contacts.push(contact)
      : alert(` ${checkName.name} is already in contacts `);
  };

  changeFilterState = value => {
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <Box
        width="400px"
        p={3}
        ml="auto"
        mr="auto"
        mt={4}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilterState} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
