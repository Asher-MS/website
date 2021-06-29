import React from 'react'
import { Section } from '../layout/Section'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type UseCaseCardProps = {
  src: string;
  title: string;
  link: string;
};

function Arrow (direction: 'left' | 'right') {
  const ArrowButton = ({
    onClickHandler,
    label
  }: {
    onClickHandler: () => void;
    label: string;
  }) => (
    <button type="button" onClick={onClickHandler} title={label} className={'arrowButton'}>
      <style jsx>
        {`
            .arrowButton {
              border-radius: 60px;
              position: absolute;
              z-index: 4;
              top: calc(50% - 15px);
              margin-${direction}: 20px;
              width: 60px;
              height: 60px;
              cursor: pointer;
              background: #ffffff;
              box-shadow: 8px 8px 36px -18px rgba(1, 57, 57, 2);
              ${direction === 'right' && 'right: 0px;'}
            }

            .arrowButton:focus {
              outline: 0;
            }

            .arrow {
              height: 20px;
              width: auto;
            }
          `}
      </style>
      <img alt="arrowLeft" className="arrow" src={`/assets/images/arrow-${direction}.svg`} />
    </button>
  )
  switch (direction) {
    case 'left':
      return function ArrowLeft (onClickHandler: () => void, hasPrev: boolean, label: string) {
        return hasPrev && <ArrowButton label={label} onClickHandler={onClickHandler} />
      }
    case 'right':
      return function ArrowRight (onClickHandler: () => void, hasNext: boolean, label: string) {
        return hasNext && <ArrowButton label={label} onClickHandler={onClickHandler} />
      }
  }
}

function UseCaseCard ({ src, title }: UseCaseCardProps) {
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
      <img alt="useCase" className="backGroundImage" src={src} />
      <div className="centered">
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

function UseCaseSet () {
  return (
    <div className="flex justify-between px-12">
      <UseCaseCard
        src="/assets/images/use-case-ecommerce.png"
        title="ECOMMERCE"
        link="www.google.de"
      />
      <UseCaseCard src="/assets/images/use-case-gaming.png" title="GAMING" link="www.google.de" />
      <UseCaseCard src="/assets/images/use-case-academy.png" title="ACADEMY" link="www.google.de" />
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
      <Carousel
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={Arrow('left')}
        renderArrowNext={Arrow('right')}
      >
        <UseCaseSet />
        <UseCaseSet />
        <UseCaseSet />
      </Carousel>
    </Section>
  )
}

export default UseCases
