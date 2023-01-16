import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  border: 0;
  color: ${props => props.theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`

export default Button