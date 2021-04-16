import React from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Pagination])

import { Panel } from '../Panel'

export const PanelsMobile = ({ panelNames, tasks }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {panelNames.map((name, index) =>
        <SwiperSlide key={index}>
          <Panel name={name} data={tasks[name]} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

PanelsMobile.propTypes = {
  panelNames: PropTypes.array.isRequired,
  tasks: PropTypes.object.isRequired
}