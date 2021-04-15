import styled from 'styled-components'
import { panel } from '../../colors'

export const PanelComponent = styled.div`
  position: relative;
  align-content: center;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 1px 2px 5px;
  background-color: ${panel};
  @media (min-width: 320px) and (max-width: 600px) {
    border-radius: 0;
    border: 0.5px solid #ECEFF4;
    width: 100%;
  }
  @media (min-width: 1280px) {
    min-width: 25vw;
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const PanelTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 16vw;
  @media (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    margin-top: 5;
  }
`

export const PanelTitleText = styled.h2`
  height: 100%;
  text-align: center;
  font-size: 2vw;
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 20px;
    line-height: 2;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media (min-width: 1280px) {
    font-size: 30px;
  }
`

export const PanelCards = styled.div`
  margin-top: 9vh;
  margin-bottom: 20px;
  overflow-y: scroll;
  max-height: 55vh;
  border-radius: 3px;
  &:after {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    content: "";
    background: linear-gradient(180deg, rgba(255,255,255,0) 92%, rgba(216,222,233,0.9682247899159664) 100%);
    pointer-events: none;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    margin-top: 50px;
    padding-top: 0px;
  }
`