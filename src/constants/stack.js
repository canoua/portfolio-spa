import styled from "styled-components"

export const StackInner = styled.div`
  height: 100vh;
  display: flex;
  font-weight: 700;
`

export const StackBox = styled.div`
  padding: 30px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    background-color: #f5f5f5;
  }
`

export const StackBoxInner = styled.div`
  width: 50%;
  &:first-child {
    margin-right: 20px;
  }
`

export const StackList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const StackListItem = styled.li`
  display: inline-block;
  cursor: pointer;
  font-size: 25px;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 15px;
  text-align: center;
  background-color: #292929;  
  color: #F8D568;
  padding: 10px 15px;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    transition: all .3s ease-in-out;
    box-shadow: 0px 3px 15px #292929;
  }
`