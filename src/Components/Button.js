import React from 'react';
import styled from 'styled-components';

const FiltersButton = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: #C4C4C4;
  padding: 16px 24px;
  border-radius: 20px;
  color: #E5E5E5;
  width: 200px;
  height: fit-content;
`;

const Button = (props) => {
  return (
    <FiltersButton onClick={props.onClick}>
      {props.label}
    </FiltersButton>
  )
}

export default Button;
