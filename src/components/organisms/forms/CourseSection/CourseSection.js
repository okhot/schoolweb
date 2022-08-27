import React from 'react'
import '../CourseSection/CourseSection.css'
import CourseCard from '../../../molecules/Courses/CourseCard'
import course1 from '../../../../images/course1.png'
import course2 from '../../../../images/course2.png'
import course3 from '../../../../images/course3.png'
import course4 from '../../../../images/course4.png'


export default function CourseSection() {
       return(
        <section>

                <div className='header'>
                <h4>Courses</h4>
                <h1>Every Client Matters</h1>
                <p>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

        <div className='coursesection'>
        <CourseCard 
        image = {course1}
        sale = {'Sale'}
        heading = {'Join Us'}
        rating = {'4.9'}
        title = {'2,769 online courses'}
        description = {'We focus on ergonomics and meeting you....'}
        download = {'15 Sales'}
        price = {'$16.48'}
        discount = {'$6.48'}
        />

        <CourseCard 
        image = {course2}
        sale = {'Sale'}
        heading = {'Join Us'}
        rating = {'4.9'}
        title = {'2,769 online courses'}
        description = {'We focus on ergonomics and meeting you....'}
        download = {'15 Sales'}
        price = {'$16.48'}
        discount = {'$6.48'}
        />

<CourseCard 
        image = {course3}
        sale = {'Sale'}
        heading = {'Join Us'}
        rating = {'4.9'}
        title = {'2,769 online courses'}
        description = {'We focus on ergonomics and meeting you....'}
        download = {'15 Sales'}
        price = {'$16.48'}
        discount = {'$6.48'}
        />

        <CourseCard 
        image = {course4}
        sale = {'Sale'}
        heading = {'Join Us'}
        rating = {'4.9'}
        title = {'2,769 online courses'}
        description = {'We focus on ergonomics and meeting you....'}
        download = {'15 Sales'}
        price = {'$16.48'}
        discount = {'$6.48'}
        />
        </div>


        </section>
        
       ) 
}
