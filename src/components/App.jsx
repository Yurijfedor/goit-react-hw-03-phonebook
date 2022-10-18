import { Component } from 'react';
import { Box } from 'constans';
import { nanoid } from 'nanoid';
import { ContactForm } from './phonebook/contactForm';
import { ContactList } from './phonebook/contactList';
import { Filter } from './phonebook/filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const LS_KEY = 'my contacts';

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    // }
  }

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
