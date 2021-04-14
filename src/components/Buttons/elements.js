import styled from 'styled-components'
import {
  button_undo, button_undo_font, button_undo_hover, button_undo_disabled,
  button_move, button_move_hover
} from '../../colors'

export const ButtonUndo = styled.button`
  height: 5vw;
  width: 10vw;
  align-self: flex-end;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: ${button_undo};
  color: ${button_undo_font};
  font-size: 1.2vw;
  font-weight: bold;
  &:hover {
    background-color: ${button_undo_hover};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  &:disabled {
    background-color: ${button_undo_disabled};
    transition: none;
    cursor: not-allowed;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    height: 40px;
    width: 80px;
    margin-bottom: 20px;
    font-size: 12px;
  }
  @media (min-width: 1280px) {
    height: 50px;
    width: 120px;
    font-size: 18px;
  }
`

export const ButtonMove = styled.button`
  height: 5vw;
  max-width: 10vw;
  min-width: 70px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  border-radius: 5px;
  background-color: ${button_move};
  font-size: 1.2vw;
  &:hover {
    background-color: ${button_move_hover};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    height: 30px;
    width: 80px;
    max-width: none;
    min-width: 20px;
    font-size: 10px;
  }
    @media (min-width: 1280px) {
    height: 90px;
    width: 200px;
    font-size: 20px;
  }
`