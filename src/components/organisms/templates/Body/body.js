import React from 'react'
import Newsletter from '../../../molecules/Newsletter/Newsletter'
import PartnerLogo from '../../../molecules/PartnerLogo/partnerLogo'
import PopularCourses from '../../../molecules/PopularCourses/PopularCourses'
import VideoAction from '../../../molecules/VideoAction/videoAction'
import CourseSection from '../../forms/CourseSection/CourseSection'
import PracticeAdvice from '../../forms/PracticeAdvice/PracticeAdvice'
import TeamSect from '../../forms/TeamSect/TeamSect'
import TestimonySect from '../../forms/TestimonySect/TestimonySect'



export default function Body() {
  return (
    <>
     <VideoAction />
     <PartnerLogo />
     <PracticeAdvice />
     <CourseSection />
     <PopularCourses />
     <TestimonySect />
     <TeamSect />
     <Newsletter />
    </>
  )
}
