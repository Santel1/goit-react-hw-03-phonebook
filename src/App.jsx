import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Phonebook } from 'components/Phonebook';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contactData => {
    if (
      this.state.contacts.some(contact => contact.name === contactData.name)
    ) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContacts = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== contactName
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactsList
          filteredContacts={filteredContacts}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </div>
    );
  }
}
