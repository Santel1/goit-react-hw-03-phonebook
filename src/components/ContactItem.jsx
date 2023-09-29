export const ContactItem = props => {
  return (
    <div>
      <li>
        <span>{props.name}</span>
        <span>{props.number}</span>
        <button onClick={() => props.handleDeleteContacts(props.name)}>
          Delete
        </button>
      </li>
    </div>
  );
};
