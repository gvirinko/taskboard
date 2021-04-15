import styled from 'styled-components'
import { background, font } from '../../colors'

export const NotificationComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${background};
  font-color: ${font};
  font-size: 2vh;
`