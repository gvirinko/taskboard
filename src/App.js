import React, { useEffect } from 'react'
import { initializeTasks } from './reducers/taskReducer'
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

  if (Object.keys(tasks).length === 0) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="container">
      <h1 className="title">Task Board</h1>
      <button className="button_undo">Undo last action</button>
      <div className="panel_container">
        {panelNames.map((name, index) =>
          <Panel name={name} data={tasks[name]} key={index} />)}
      </div>
    </div>
  );
}

export default App;
