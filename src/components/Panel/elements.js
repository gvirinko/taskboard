import styled from 'styled-components'
import { panel } from '../../colors'

export const PanelComponent = styled.div`
  position: relative;
  min-width: 30vw;
  align-content: center;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 1px 2px 5px;
  background-color: ${panel};
  @media (min-width: 320px) and (max-width: 600px) {
    border-radius: 0;
    border: 0.5px solid #ECEFF4;
    width: 100%;
    height: 600px;
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
    width: 300px;
    height: 60px;
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
  margin-top: 8vh;
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
    max-height: 60vh;
    margin-top: 50px;
    padding-top: 0px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    max-height: 55vh;
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    max-height: 53vh;
  }
  @media (min-width: 1000px) and (max-width: 1280px) {
    max-height: 57vh;
  }
  @media (min-width: 1280px) and (max-width: 1400px) {
    max-height: 60vh;
    margin-top: 100px;
  }
  @media (min-width: 1400px) {
    max-height: 65vh;
  }
`