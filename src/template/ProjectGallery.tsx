import React, { ReactNode } from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const appStoreSearchHeader = 'App store search'
const appStoreSearchCopy =
  'Use Transformers to search through a rich app store dataset. This example uses the power of Jina to apply to a search we all know too well. See how you could improve any app store!'
const appStoreSearchAuthor = 'Alex C-G'

const memeSearchHeader = 'Meme search'
const memeSearchCopy =
  'Learn how to use the neural search framework, Jina, to build a Financial Question Answering (QA) search application with the FiQA dataset, PyTorch, and...'
const memeSearchAuthor = 'Florian Hönicke'

const financialSearchHeader = 'Financial QA'
const financialSearchCopy =
  'A Financial QA system using a fine-tuned BERT model FinBERT-QA. Check out how you can build your own engine to answer domain specific questions.'
const financialSearchAuthor = 'Albert Hofmann'

type CardProps = {
  img: ReactNode;
  headerString: string;
  copy: string;
  footer: ReactNode;
};

const Card = ({ img, headerString, copy, footer }: CardProps) => (
  <div className="rounded-xl w-96 m-2 shadow cursor-pointer">
    {img}
    <div className="px-6 pt-8 pb-4 flex flex-col h-72">
      <h3 className="text-xl font-bold mb-6">{headerString}</h3>
      <p className="flex-1">{copy}</p>
      {footer}
    </div>
  </div>
)

type ProjectGalleryCardProps = {
  img: ReactNode;
  headerString: string;
  copy: string;
  authorImg: ReactNode;
  authorName: string;
};

function ProjectGalleryCard ({
  img,
  headerString,
  copy,
  authorImg,
  authorName
}: ProjectGalleryCardProps) {
  const Footer = () => (
    <div className="flex">
      {authorImg}
      <span>{authorName}</span>
    </div>
  )

  return <Card img={img} headerString={headerString} copy={copy} footer={<Footer />} />
}

function ProjectGallery () {
  const DefaultCardImg = () => <img alt="DefaultImg" src="/assets/images/defaultCardImg.png" />
  const DefaultAuthorImg = () => (
    <img alt="DefaultAuthor" src="/assets/images/defaultProfileImg.png" />
  )
  return (
    <Section>
      <h2 className="text-black mb-16 text-center font-bold text-4xl">
        <span className="text-primary-500">
          {websiteCopyStrings.contributeProjectGalleryHeaderPart1}
        </span>{' '}
        {websiteCopyStrings.contributeProjectGalleryHeaderPart2}
      </h2>
      <div className="flex justify-center">
        <ProjectGalleryCard
          img={<DefaultCardImg />}
          headerString={appStoreSearchHeader}
          copy={appStoreSearchCopy}
          authorImg={<DefaultAuthorImg />}
          authorName={appStoreSearchAuthor}
        />
        <ProjectGalleryCard
          img={<DefaultCardImg />}
          headerString={memeSearchHeader}
          copy={memeSearchCopy}
          authorImg={<DefaultAuthorImg />}
          authorName={memeSearchAuthor}
        />
        <ProjectGalleryCard
          img={<DefaultCardImg />}
          headerString={financialSearchHeader}
          copy={financialSearchCopy}
          authorImg={<DefaultAuthorImg />}
          authorName={financialSearchAuthor}
        />
      </div>
    </Section>
  )
}

export default ProjectGallery
