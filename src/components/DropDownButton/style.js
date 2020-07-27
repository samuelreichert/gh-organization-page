import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  color: #2F445C;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 8px 12px;
  position: relative;

  ${props => props.right && css`
    margin-right: ${props.right};
  `}

  ${props => props.isActive && css`
    background-color: #63A9F3;
    color: #ffffff;
  `}

  &:hover {
    background-color: #F8F8F8;
    color: #2F445C;
  }
`;

export const Check = styled.span`
  color: #63A9F3;
  font-size: 16px;
`;

export const DropDown = styled.div`
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-shadow: 0 0 16px rgba(0,0,0,.075);
  color: #2F445C;
  display: none;
  margin: 0;
  min-width: 170px;
  outline: none;
  padding: 10px 0;
  position: absolute;
  left: 0;
  top: 46px;

  ${props => props.isOpen && css`
    display: block;
  `}
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 14px;

  &:hover {
    background-color: #F8F8F8;
  }
`
