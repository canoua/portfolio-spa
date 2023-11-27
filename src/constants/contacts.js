import styled from "styled-components"

export const ContactInner = styled.div`
  height: 100vh;
  display: flex;
`

export const ContactBox = styled.div`
  width: 50%;
  height: 100%;
  &:first-child {
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ContactTitle = styled.h2`
  
`
 
export const Form = styled.form`
  width: 50%;
  border-radius: 5px;
  padding: 30px;
  background-color: #292929;
`

export const Input = styled.input`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  background: transparent;
  outline: none;
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #F8D568;
  color: #F8D568;
  &::placeholder {
    color: #F8D568;
  }
`

export const Button = styled.button`
  font-family: 'Nunito', sans-serif;  
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  cursor: pointer;
  background: #F8D568;
  width: 100%;
  border: none;
`