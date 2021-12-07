import PropTypes from 'prop-types';
import Contact from './Contact';

function ContactList({ contacts, onDeleteContact }) {
  return contacts.length === 0 ? (
    <div>You haven't contacts!</div>
  ) : (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
