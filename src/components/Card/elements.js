import styled from 'styled-components'
import { card, card_border, card_hover } from '../../colors'

export const CardComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border: 0.5px solid ${card_border};
  border-radius: 5px;
  box-shadow: 1px 2px 5px;
  background-color: ${card};
  font-size: 1.2vw;
  line-height: 1.2;
  &:hover {
    background-color: ${card_hover};
  }
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 12px;
  }
`

export const CardDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 14vw;
  height: 5vh;
  @media (min-width: 320px) and (max-width: 600px) {
    width: 80%;
    height: 7vh;
  }
`

export const CardErrorName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`

export const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`