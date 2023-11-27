import styled from "styled-components"

export const StackInner = styled.div`
  height: 100vh;
  display: flex;
  font-weight: 700;
`

export const StackBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: left;
  &:first-child {
    // align-items: end;
    background-color: #f5f5f5;
    // flex-direction: column;
  }
`
export const StackBoxInner = styled.div`
  // display: flex;
  &:first-child {
    margin-right: 20px;
  }
`

export const StackTitle = styled.h2`
  position: relative;
  text-align: left;
  z-index: 1;
  margin-bottom: 20px;
  font-size: 30px;
  &:after {
    content: "";
    position: absolute;
    top: 33%;
    left: -5px;
    width: 110%;
    height: 20px;
    background-color: #F8D568;
    z-index: -1;
    transition: all 0.3s;
  }
`