import React, { ReactNode } from 'react'
import { Section } from '../layout/Section'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type UseCaseCardProps = {
  src: string;
  title: string;
  link: string;
};

function ArrowPrev (onClickHandler: () => void, hasPrev: boolean, label: string): ReactNode {
  return (
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} className="nextButton">
        <style jsx>
          {`
            .nextButton {
              border-radius: 60px;
              position: absolute;
              z-index: 4;
              top: calc(50% - 15px);
              margin-left: 20px;
              width: 60px;
              height: 60px;
              cursor: pointer;
              background: #ffffff;
              box-shadow: 8px 8px 36px -18px rgba(1, 57, 57, 2);
            }

            .nextButton:focus {
              outline: 0;
            }

            .arrow {
              height: 20px;
              width: auto;
            }
          `}
        </style>
        <img className="arrow" src={'/assets/images/arrow-left.svg'} />
      </button>
    )
  )
}

function ArrowNext (onClickHandler: () => void, hasNext: boolean, label: string): ReactNode {
  return (
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} className="nextButton">
        <style jsx>
          {`
            .nextButton {
              border-radius: 60px;
              position: absolute;
              z-index: 2;
              top: calc(50% - 15px);
              margin-right: 20px;

              width: 60px;
              height: 60px;
              cursor: pointer;
              background: #ffffff;
              right: 0px;
              box-shadow: 8px 8px 36px -18px rgba(1, 57, 57, 2);
            }

            .nextButton:focus {
              outline: 0;
            }

            .arrow {
              height: 20px;
              width: auto;
            }
          `}
        </style>
        <img className="arrow" src={'/assets/images/arrow-right.svg'} />
      </button>
    )
  )
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
      <img className="backGroundImage" src={src} />
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
        renderArrowPrev={ArrowPrev}
        renderArrowNext={ArrowNext}
      >
        <UseCaseSet />
        <UseCaseSet />
        <UseCaseSet />
      </Carousel>
    </Section>
  )
}

export default UseCases
