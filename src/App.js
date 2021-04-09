import React, { useEffect } from 'react'
import { initializeTasks } from './reducers/taskReducer'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from "./components/Card"

import './App.css';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeTasks())
  }, [dispatch])

  const tasks = useSelector(state => state)

  if (tasks.length === 0) {
    return (<div>Loading...</div>)
  }
  return (
    <div className="container">
      <h1 className="title">Task Board</h1>
      <div className="panel_container">
        <div className="panel">
          <h2 className="panel_title">Backlog</h2>
          <div className="panel_cards">
            {tasks.backlog.map(item =>
              <Card code={item.code} text={item.text} index={item.index} key={item.index} direction="unresolved =>"></Card>)
            }
          </div>
        </div>
        <div className="panel">
          <h2 className="panel_title">Unresolved</h2>
          {tasks.unresolved.map(item =>
            <Card code={item.code} text={item.text} key={item.index} direction="resolved =>"></Card>)
          }
        </div>
        <div className="panel">
          <h2 className="panel_title">Resolved</h2>
          {tasks.resolved.map(item =>
            <Card code={item.code} text={item.text} key={item.index} direction=" unresolved <="></Card>)

          }
        </div>
      </div>
    </div>
  );
}

export default App;
