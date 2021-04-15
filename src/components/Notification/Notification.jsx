import React from 'react'
import PropTypes from 'prop-types'

import { NotificationComponent } from './elements'

export const Notification = ({ text }) => {
  return (
    <NotificationComponent>
      { text}
    </NotificationComponent>
  )
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
}