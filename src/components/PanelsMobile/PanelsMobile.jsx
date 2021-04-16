import React, { useEffect } from 'react'

import { Panel } from '../Panel'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

export const PanelsMobile = ({ panelNames, tasks }) => {
  // initializing a Swiper instance to display data for mobile view,
  // with one panel per slide and pagination on bottom
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    })

  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {panelNames.map((name, index) =>
          <div className="swiper-slide" key={index}>
            <Panel name={name} data={tasks[name]} />
          </div>
        )}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

