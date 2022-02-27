import React, { useContext } from 'react'
import styled from 'styled-components';
import { actionTypes } from '../reducer/reducer';
import { ReducerContext } from '../reducer/ReducerContext';
import { searchImages } from '../utils/searchImages';
import Button from './Button';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #E5E5E5;
  border-radius: 20px;
  padding: 40px;
`;

const Header = styled.div`
  font-size: 18px;
`;

const Category = styled.li`
  cursor: pointer;
  font-size: 18px;
`;

const CategoryWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  max-height: 4em;
  height: 10vh;
  list-style-type: disc;
  // padding: 0;
  // margin: 0;
  li::before {
    content: "\2022";
    color: red;
    width: 1em;
    margin-left: -1em;
  }
`;

const filters = [
  {
    header: 'Sort by',
    key: 'sortBy',
    categories: [
      {
        name: 'Relevance',
        type: 'relevant'
      },
      {
        name: 'Newest',
        type: 'latest',
      }
    ],
  },
  {
    header: 'Color',
    key: 'color',
    categories: [
      {
        name: 'Any',
        type: '',
      },
      {
        name: 'Black and White',
        type: 'black_and_white',
      }
    ],
  },
  {
    header: 'Orientation',
    key: 'orientation',
    categories: [
      {
        name: 'Any',
        type: '',
      },
      {
        name: 'Landscape',
        type: 'landscape',
      },
      {
        name: 'Portrait',
        type: 'portrait',
      },
      {
        name: 'Square',
        type: 'squarish',
      }
    ],
  }
]

const Filters = () => {
  const { state, dispatch } = useContext(ReducerContext)
  const cateogryHandler = ({ key, type }) => {
    if (type === '') return;
    dispatch({ type: actionTypes.setFilters, payload: { [key]: type } });
    searchImages({ searchValue: state.search, dispatch, options: state.filters })
  };

  return (
    <FilterContainer>
    {filters.map(filter => {
      const { header, categories, key } = filter;
      return (
        <div>
          <Header>{header.toUpperCase()}</Header>
          <CategoryWrapper>
            {categories.map((category, i) => {
              return (
                <Category key={i} onClick={() => cateogryHandler({ key, ...category })}>{category.name}</Category>
              )
            })}
          </CategoryWrapper>
        </div>
      )}
    )}
    <Button label="Clear Filters" onClick={() => dispatch({ type: actionTypes.resetFilters })} />
  </FilterContainer>
  )
}

export default Filters
