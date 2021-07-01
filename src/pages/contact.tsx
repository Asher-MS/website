import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'

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
          <div>
            <p className="font-bold">
              <span className="text-4xl">Contact </span> info
            </p>

            <div className="grid-cols-2">
              <ContactCard
                title="STAY IN TOUCH"
                infoList={['711-2880 Nulla St.', 'Mankato Mississippi 96522']}
              />
            </div>
          </div>

          <div></div>
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default Contact
