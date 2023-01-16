import styled from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};

  span{
    font-size: 12px;
  }
`

Title.defaultProps ={
    children: 'Meu titutlo teste'
}

export default Title