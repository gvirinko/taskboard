import React, { useEffect } from 'react'
import { initializeTasks, moveTask } from './reducers/taskReducer'
import { useDispatch, useSelector } from 'react-redux'

import { Panel } from './components/Panel'
import {panelNames} from './content'

import './App.css';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeTasks())
  }, [dispatch])

  const tasks = useSelector(state => state.tasks)
  const action = useSelector(state => state.action.lastAction)

  if (Object.keys(tasks).length === 0) {
    return (<div>Loading...</div>)
  }

  const handleClick = () => {
    const sourcePanel = action.destinationPanel
    const destinationPanel = action.sourcePanel
    dispatch(moveTask(action.index, sourcePanel, destinationPanel))
  }

  return (
    <div className="container">
      <h1 className="title">TASK BOARD</h1>
      <button className="button_undo" onClick={()=> handleClick()}>Undo last action</button>
      <div className="panel_container">
        {panelNames.map((name, index) =>
          <Panel name={name} data={tasks[name]} key={index} />)}
      </div>
    </div>
  );
}

export default App;
