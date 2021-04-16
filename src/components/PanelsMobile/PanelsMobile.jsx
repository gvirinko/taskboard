import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Notification } from '../Notification'
import { Panel } from '../Panel'
import { PANELNAMES } from '../../content'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

export const PanelsMobile = () => {
  const [notification, setNotification] = useState('Loading...')
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
  // getting data on errors from state
  const tasks = useSelector(state => state.tasks)
  // checking if there is any data returned
  if (Object.keys(tasks).length === 0) {
    setTimeout(() => {
      setNotification('Something wrong with server, please try later...')
    }, 5000)
    return (<Notification text={notification} />)
  }

  return (
    <div className="panel_container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {PANELNAMES.map((name, index) =>
            <div className="swiper-slide" key={index}>
              <Panel name={name} data={tasks[name]} />
            </div>
          )}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

