import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import contactActions from "../../redux/contacts/contactActions";
import { Container, TextP } from "./Filter.style";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Container>
      <TextP>Find contacts by name</TextP>
      <input
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => dispatch(contactActions.changeFilter(e.target.value))}
      />
    </Container>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
