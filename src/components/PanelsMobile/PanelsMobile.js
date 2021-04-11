import React, { useEffect } from "react";
import { useSelector } from 'react-redux'

import {Panel} from '../Panel'
import {panelNames} from '../../content'

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);


export const PanelsMobile = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

  }, [])
  const tasks = useSelector(state => state.tasks)
  if (Object.keys(tasks).length === 0) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="panel_container">
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
    </div>
  )
};

