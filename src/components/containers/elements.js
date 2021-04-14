import styled from 'styled-components'
import { background, font } from '../../colors'

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  background-color: ${background};
  font-family: Roboto, Georgia, serif;
  color: ${font};
`

export const AppTitle = styled.h1`
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  font-size: 4vw;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 15px;
    margin-top: 5px;
    font-size: 8vw;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
  }
`

export const ContentContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  @media (min-width: 1280px) {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`

export const PanelContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
  background-color: ${background};
`