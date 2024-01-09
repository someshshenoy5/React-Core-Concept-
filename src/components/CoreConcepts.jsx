import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
const CoreConcepts = () => {
  return (
    <div>
      <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((topic) => (<CoreConcept key={topic.title} {...topic}/>))}
          </ul>
        </section>
    </div>
  )
}

export default CoreConcepts
