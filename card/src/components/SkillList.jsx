import React from 'react'
import skills from './skills'
import Skill from './Skill'


function SkillList() {
  return (
    <div className='skill-list'>
       {skills.map(skill =>
        <Skill
         skill={skill.skill}
         color={skill.color}
         level={skill.level}
        />) }
       
    </div>
  )
}

export default SkillList