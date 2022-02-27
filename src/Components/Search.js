import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import searchIcon from '../assets/Search-icon.svg';
import { actionTypes } from '../reducer/reducer';
import { ReducerContext } from '../reducer/ReducerContext';
import { searchImages } from '../utils/searchImages';
import Button from './Button';
import Filters from './Filters';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
`

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  border: 1px solid;
  border-radius: 20px;
  background: #E5E5E5;
`;

const TextInput = styled.input`
  flex: 1;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  margin-right: 24px;
`;

const Searchbar = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <NavContainer>
      <Wrapper>
        <SearchContainer>
          <Icon
            src={searchIcon}
          />
          <TextInput
            value={state.search}
            placeholder={"Search"}
            onChange={(e) => {
              searchImages({
                searchValue: e.target.value,
                dispatch
              });
              dispatch({ type: actionTypes.setSearch, payload: e.target.value, options: state.options });
            }}
          />
        </SearchContainer>
        <Button label="Filters" onClick={() => setShowFilters(!showFilters)} />
      </Wrapper>
      {showFilters && (
        <Filters />
      )}
    </NavContainer>
  )
}

export default Searchbar
