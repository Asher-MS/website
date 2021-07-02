import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Button } from '../button/Button'

type IContactCardProps = {
  title: string;
  infoList: string[];
};

const ContactCard = ({ title, infoList }: IContactCardProps) => (
  <div>
    <p className="mb-3">{title}</p>
    {infoList.map((info, idx) => (
      <p className="text-gray-500" key={`infoListItem-${idx}`}>
        {info} <br />
      </p>
    ))}
  </div>
)

const Contact = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <Section>
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <h1 className="font-bold mb-16">
              <span className="text-4xl">{websiteCopyStrings.contactInfoHeaderPart1} </span>{' '}
              {websiteCopyStrings.contactInfoHeaderPart2}
            </h1>

            <div className="grid grid-cols-2 gap-10">
              <ContactCard
                title={websiteCopyStrings.contactInfoCard1Header}
                infoList={websiteCopyStrings.contactInfoCard1InfoList}
              />
              <ContactCard
                title={websiteCopyStrings.contactInfoCard2Header}
                infoList={websiteCopyStrings.contactInfoCard2InfoList}
              />
              <ContactCard
                title={websiteCopyStrings.contactInfoCard3Header}
                infoList={websiteCopyStrings.contactInfoCard3InfoList}
              />
              <ContactCard
                title={websiteCopyStrings.contactInfoCard4Header}
                infoList={websiteCopyStrings.contactInfoCard4InfoList}
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="flex flex-row items-center justify-center text-2xl font-bold mb-10">
              <span className="mr-5"> {websiteCopyStrings.contactFormSlackHeaderPart1}</span>
              <img className="mr-1 w-7 " src="/assets/images/slack-icon.svg" />
              {websiteCopyStrings.contactFormSlackHeaderPart2}
            </h2>
            <div className="bg-gray-100 flex flex-col items-center rounded-3xl pt-8 pb-10">
              <h1 className="text-xl font-bold mb-3 ">
                {websiteCopyStrings.contactFormHeaderPart1}{' '}
                <span className="text-5xl">{websiteCopyStrings.contactFormHeaderPart2}</span>
              </h1>
              <p className="text-gray-600 mb-10">{websiteCopyStrings.contactFormCopy}</p>
              <form className="w-8/12">
                <input
                  className="bg-white w-full rounded-lg mb-8 px-4 py-3"
                  id="name"
                  type="text"
                  placeholder={websiteCopyStrings.contactFormName}
                />
                <input
                  className="bg-white w-full rounded-lg mb-8  px-4 py-3"
                  id="email"
                  type="text"
                  placeholder={websiteCopyStrings.contactFormEmail}
                />
                <textarea
                  className="bg-white w-full rounded-lg mb-8  px-4 py-3"
                  id="message"
                  placeholder={websiteCopyStrings.contactFormMessage}
                  rows={9}
                />
                <Button primary fullRounded className="py-3">
                  {websiteCopyStrings.contactFormButton}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Contact
