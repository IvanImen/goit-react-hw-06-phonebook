import { InputStyled } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'store/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.phonebook.filter);

  const handleFilterChange = e => {
    dispatch(setFilterAction(e.target.value.trim().toLowerCase()));
  };

  return (
    <InputStyled
      placeholder="Filter contact numbers"
      type="text"
      name="filter"
      onChange={handleFilterChange}
      value={filter}
    />
  );
};
