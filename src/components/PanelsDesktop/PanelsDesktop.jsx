import React from 'react'

import { Panel } from '../Panel'

export const PanelsDesktop = ({ panelNames, tasks }) => {


  return (
    <>
      {panelNames.map((name, index) =>
        <Panel name={name} data={tasks[name]} key={index} />
      )}
    </>
  )
}

