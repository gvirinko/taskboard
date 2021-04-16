import styled from 'styled-components'
import { BACKGROUND, FONT } from '../../colors'

export const NotificationComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-color: ${BACKGROUND};
  color: ${FONT};
  font-size: 2vh;
`