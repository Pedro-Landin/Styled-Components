import styled from "styled-components"

const Title = styled.h1`
  color: red;
`

Title.defaultProps ={
    children: 'Meu titutlo teste'
}

export default Title