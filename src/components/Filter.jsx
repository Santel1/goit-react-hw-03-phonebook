export const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
  />
);
