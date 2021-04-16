import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initializeTasks, moveTask } from './reducers/taskReducer'
import GlobalFonts from './fonts/fonts'
import { Notification } from './components/Notification'
import { PanelsMobile } from './components/PanelsMobile'
import { PanelsDesktop } from './components/PanelsDesktop'
import { PANELNAMES, APPTITLE } from './content'
import { AppContainer, AppTitle, ContentContainer, PanelContainer } from './components/containers/elements'
import { ButtonUndo } from './components/Buttons/elements'

const App = () => {
  const [disabled, setDisabled] = useState(true)
  const [notification, setNotification] = useState('Loading...')
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)
  // breakpoint at which swiper component for mobile view should be rendered
  const breakpointForMobileView = 600
  const lastAction = useSelector(state => state.action.lastAction)
  const dispatch = useDispatch()

  // defining user display width to adjust render styles
  useEffect(() => {
    // setDisplayWidth(window.innerWidth)
    window.addEventListener('resize', () => setDisplayWidth(window.innerWidth))
  }, [])
  // saving data to state
  useEffect(() => {
    dispatch(initializeTasks())
  }, [])
  // checking if there is an action saved to state, to define the status of Undo button
  useEffect(() => {
    lastAction ? setDisabled(false) : setDisabled(true)
  }, [lastAction])

  // getting data on errors from state
  const tasks = useSelector(state => state.tasks)
  // checking if there is any data returned
  if (Object.keys(tasks).length === 0) {
    setTimeout(() => {
      setNotification('Something wrong with server, please try later...')
    }, 5000)
    return (<Notification text={ notification }/>)
  }

  // handling Undo button click by flipping destination and source panels,
  // sending the request to state
  const handleClick = () => {
    const sourcePanel = lastAction.destinationPanel
    const destinationPanel = lastAction.sourcePanel
    dispatch(moveTask(lastAction.index, sourcePanel, destinationPanel))
    setDisabled(true)
  }

  return (
    <AppContainer>
      <GlobalFonts />
      <AppTitle>{APPTITLE}</AppTitle>
      <ContentContainer>
        <ButtonUndo
          onClick={handleClick}
          disabled={disabled}
        >Undo last action
        </ButtonUndo>
        <PanelContainer>
          {displayWidth < breakpointForMobileView
            ? <PanelsMobile panelNames={PANELNAMES} tasks={tasks} />
            : <PanelsDesktop panelNames={PANELNAMES} tasks={tasks} />
          }
        </PanelContainer>
      </ContentContainer>
    </AppContainer>
  )
}

export default App
