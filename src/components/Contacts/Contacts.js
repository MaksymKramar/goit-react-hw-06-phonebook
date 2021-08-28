import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ContactList,
  Item,
  NameSpan,
  TextP,
  DelBtn,
} from "./Contacts.style";
import { useDispatch, useSelector } from "react-redux";
import contactActions from "../../redux/contacts/contactActions";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";

function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(contactActions.deleteContact(id));

  return (
    <Container>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <TextP>
              <NameSpan>{name}</NameSpan>: {number}
            </TextP>
            <DelBtn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DelBtn>
          </Item>
        ))}
      </ContactList>
    </Container>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
