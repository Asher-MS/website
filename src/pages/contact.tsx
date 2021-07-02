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
    <p>{title}</p>
    {infoList.map((info, idx) => (
      <p key={`infoListItem-${idx}`}>
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
        <div className="flex flex-row">
          <div className="flex-1">
            <h1 className="font-bold">
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
            <h2 className="flex flex-row items-center justify-center">
              {websiteCopyStrings.contactFormSlackHeaderPart1}
              <img src="/assets/images/data-icon.svg" />
              {websiteCopyStrings.contactFormSlackHeaderPart2}
            </h2>
            <div className="bg-gray-100 flex flex-col items-center  rounded-full">
              <h1>
                {websiteCopyStrings.contactFormHeaderPart1}{' '}
                <span>{websiteCopyStrings.contactFormHeaderPart2}</span>
              </h1>
              <p>{websiteCopyStrings.contactFormCopy}</p>
              <form className="w-8/12">
                <input
                  className="bg-white w-full"
                  id="name"
                  type="text"
                  placeholder={websiteCopyStrings.contactFormName}
                />
                <input
                  className="bg-white w-full"
                  id="email"
                  type="text"
                  placeholder={websiteCopyStrings.contactFormEmail}
                />
                <input
                  className="bg-white w-full"
                  id="message"
                  type="text"
                  placeholder={websiteCopyStrings.contactFormMessage}
                />
                <Button primary fullRounded>
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
