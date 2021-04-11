import React, { useEffect, useState } from 'react'
import { initializeTasks, moveTask } from './reducers/taskReducer'
import { useDispatch, useSelector } from 'react-redux'

import { Panel } from './components/Panel'
import {panelNames} from './content'

import './App.css';

const App = () => {
  const [disabled, setDisabled] = useState(true)
  const action = useSelector(state => state.action.lastAction)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeTasks())

  }, [dispatch])
  useEffect(() => {
    action ? setDisabled(false) : setDisabled(true);
  }, [action])

  const tasks = useSelector(state => state.tasks)
  if (Object.keys(tasks).length === 0) {
    return (<div>Loading...</div>)
  }

  const handleClick = () => {
    const sourcePanel = action.destinationPanel
    const destinationPanel = action.sourcePanel
    dispatch(moveTask(action.index, sourcePanel, destinationPanel))
    setDisabled(true)
  }

  return (
    <div className="container">
      <h1 className="title">BOARD OF ERRORS</h1>
      <div className="wrapper">
        <button
          className="button_undo"
          onClick={() => handleClick()}
          disabled={disabled}
        >Undo last action</button>
        <div className="panel_container">
          {panelNames.map((name, index) =>
            <Panel name={name} data={tasks[name]} key={index} />)}
        </div>
      </div>

    </div>
  );
}

export default App;
