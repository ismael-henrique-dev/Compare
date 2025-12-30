'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export function HomeBanner() {
  return (
    <div className='w-full flex flex-col items-center'>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className='w-full h-100'
      >
        <SwiperSlide>
          <div className='h-48 md:h-100 bg-green-700 rounded-3xl' />
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-48 md:h-100 bg-green-600 rounded-3xl' />
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-48 md:h-100 bg-green-500 rounded-3xl' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
