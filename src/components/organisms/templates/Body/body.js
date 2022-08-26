import React from 'react'
import PartnerLogo from '../../../molecules/PartnerLogo/partnerLogo'
import VideoAction from '../../../molecules/VideoAction/videoAction'
import CourseSection from '../../forms/CourseSection/CourseSection'
import PracticeAdvice from '../../forms/PracticeAdvice/PracticeAdvice'



export default function Body() {
  return (
    <>
     <VideoAction />
     <PartnerLogo />
     <PracticeAdvice />
     <CourseSection />
    </>
  )
}
