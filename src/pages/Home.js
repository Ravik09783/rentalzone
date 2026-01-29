// import React from 'react'

import Categories from "../components/Categories"
import ResumePDF from "../components/Resume"
import WhyChooseUs from "../components/WhyChooseUs"

export const Home = () => {
  return (
    <div className="bg-black">
        <Categories />
        <WhyChooseUs />
        {/* <ResumePDF /> */}
    </div>
  )
}
