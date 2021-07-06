import React, {useState} from 'react'
import { DivProps } from '../button/Button';
import { Section } from '../layout/Section'

const Accordion = () => {
    return (
        <div>
        <Section>
           <CollapsibleElement title="water" content="something else" /> 
        </Section>
        </div>
    )
}

interface CollapsibleElementProps extends DivProps {
    title: string
    content: string
}

const CollapsibleElement = ({ title, content }: CollapsibleElementProps) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };

export default Accordion

const Chevron = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
)