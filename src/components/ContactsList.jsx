import { ContactItem } from './ContactItem';
import { nanoid } from 'nanoid';

export const ContactsList = ({ filteredContacts, handleDeleteContacts }) => {
  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <ContactItem
              key={nanoid()}
              name={contact.name}
              number={contact.number}
              handleDeleteContacts={handleDeleteContacts}
            />
          );
        })}
      </ul>
    </div>
  );
};
