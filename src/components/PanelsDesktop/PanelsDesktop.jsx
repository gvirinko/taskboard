import React from 'react'
import PropTypes from 'prop-types'

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

PanelsDesktop.propTypes = {
  panelNames: PropTypes.array.isRequired,
  tasks: PropTypes.object.isRequired
}