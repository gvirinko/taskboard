import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../Card'
import { PanelComponent, PanelTitle, PanelTitleText, PanelCards } from './elements'

export const Panel = ({ name, data }) => {
  return (
    <PanelComponent>
      <PanelTitle>
        <PanelTitleText>{name.toUpperCase()}</PanelTitleText>
      </PanelTitle>
      <PanelCards>
        {data.map(item =>
          <Card className='card_test'
            code={item.code}
            text={item.text}
            index={item.index}
            key={item.index}
            sourcePanel={name}>
          </Card>)
        }
      </PanelCards>
    </PanelComponent>
  )
}

Panel.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}