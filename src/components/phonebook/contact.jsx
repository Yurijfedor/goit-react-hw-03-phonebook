import PropTypes from 'prop-types';
import { ButtonEl } from './contactForm.styled';
import { Box } from 'constans';

export const Contact = ({
  contactInfo: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
      {name}: {number}
      <ButtonEl data-id={id} onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonEl>
    </Box>
  );
};

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
