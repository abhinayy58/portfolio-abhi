import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {technologies} from '../constants'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {textVariant} from '../utils/motion'
const Tech = () => {
  return (
    <>
     <motion.dev variants={textVariant()}>
      <p className={styles.sectionSubText}>What Skill I have</p>
      <h2 className={styles.sectionHeadText}>Skill</h2>
    </motion.dev>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, i) =>(
        <div className='w-28 h-28' key={i}>
          <BallCanvas icon={technology.icon} />
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")