import React, { useEffect, useState } from 'react'
import { initializeTasks, moveTask } from './reducers/taskReducer'
import { useDispatch, useSelector } from 'react-redux'

import GlobalFonts from './fonts/fonts'
import { Notification } from './components/Notification'
import { Panel } from './components/Panel'
import { panelNames, appTitle } from './content'
import { AppContainer, AppTitle, ContentContainer, PanelContainer } from './components/containers/elements'
import { PanelsMobile } from './components/PanelsMobile'
import { ButtonUndo } from './components/Buttons/elements'

const App = () => {
  const [disabled, setDisabled] = useState(true)
  const [notification, setNotification] = useState('Loading...')
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)
  // breakpoint at which slider component for mobile view should be rendered
  const breakpointForMobileView = 600
  const action = useSelector(state => state.action.lastAction)
  const dispatch = useDispatch()

  // defining user display width to adjust render styles
  useEffect(() => {
    window.addEventListener('resize', () => setDisplayWidth(window.innerWidth))
  }, [window.innerWidth])
  // saving data to state
  useEffect(() => {
    dispatch(initializeTasks())
  }, [dispatch])
  // checking if there is an action saved to state, to define the status of Undo button
  useEffect(() => {
    action ? setDisabled(false) : setDisabled(true)
  }, [action])

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
    const sourcePanel = action.destinationPanel
    const destinationPanel = action.sourcePanel
    dispatch(moveTask(action.index, sourcePanel, destinationPanel))
    setDisabled(true)
  }

  return (
    <AppContainer>
      <GlobalFonts />
      <AppTitle>{appTitle}</AppTitle>
      <ContentContainer>
        <ButtonUndo
          onClick={() => handleClick()}
          disabled={disabled}
        >Undo last action
        </ButtonUndo>
        {displayWidth < breakpointForMobileView
          ? <PanelsMobile />
          : <PanelContainer>
            {panelNames.map((name, index) =>
              <Panel name={name} data={tasks[name]} key={index} />)}
          </PanelContainer>
        }
      </ContentContainer>
    </AppContainer>
  )
}

export default App
