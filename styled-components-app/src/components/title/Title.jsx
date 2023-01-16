import styled from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`

Title.defaultProps ={
    children: 'Meu titutlo teste'
}

export default Title