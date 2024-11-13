import React from 'react'
import Skill from './Skill'

function SkillList() {
  return (
    <div className='skill-list'>
        <Skill skill='HTML + CSS' emoji='💪' color='orange'/>
        <Skill skill='JavaScript' emoji='💪' color='yellow'/>
        <Skill skill='REACT' emoji='👶' color='turquoise'/>
        <Skill skill='Git + Github' emoji='👶' color='purple'/>
       
    </div>
  )
}

export default SkillList