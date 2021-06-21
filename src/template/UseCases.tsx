import React from 'react'
import { Section } from '../layout/Section'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type UseCaseCardProps = {
  src: string;
  title: string;
  link: string;
};

function UseCaseCard ({ src, title, link }: UseCaseCardProps) {
  return (
    <div className="card">
      <style jsx>
        {`
          .card {
            width: 28.75rem;
            position: relative;
          }

          .backGroundImage {
            border-radius: 8px;
            filter: brightness(60%) grayscale(30%);
          }
          .title {
            font-weight: 600;
            font-size: 24px;
            color: white;
          }

          /* Centered text */
          .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
      <img className="backGroundImage" src={src} />
      <div className="centered">
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

function UseCases () {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          Use <span className="text-primary-500">Cases</span>
        </h2>
      </div>
      <Carousel>
        <UseCaseCard
          src="https://summalinguae.com/wp-content/uploads/2017/03/pexels-jessica-lewis-3405456-scaled.jpg"
          title="GAMING"
          link="www.google.de"
        />
        <UseCaseCard
          src="https://summalinguae.com/wp-content/uploads/2017/03/pexels-jessica-lewis-3405456-scaled.jpg"
          title="PLACEHOLDER"
          link="www.google.de"
        />
        <UseCaseCard
          src="https://summalinguae.com/wp-content/uploads/2017/03/pexels-jessica-lewis-3405456-scaled.jpg"
          title="PLACEHOLDER"
          link="www.google.de"
        />
        <UseCaseCard
          src="https://summalinguae.com/wp-content/uploads/2017/03/pexels-jessica-lewis-3405456-scaled.jpg"
          title="PLACEHOLDER"
          link="www.google.de"
        />
      </Carousel>
    </Section>
  )
}

export default UseCases
