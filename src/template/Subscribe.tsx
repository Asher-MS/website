/* eslint-disable */
import React, { useState } from 'react';

import { Section } from '../layout/Section';
import { websiteCopyStrings } from '../utils/websiteCopyStrings';
import Icon from './Icon';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmitClick = () => {
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Section>
        <div className="bg-primary-500 flex flex-col items-center max-w-screen-lg mx-auto rounded-3xl pt-16 pb-16">
          {submitted ? (
            <>
              <div className="flex">
                <Icon name="paper-plane" className="mr-10" />
                <div className="">
                  <h2 className="font-bold text-3xl text-white">
                    {websiteCopyStrings.subscribeTitle}
                  </h2>
                  <p className="text-gray-100 mt-2">{websiteCopyStrings.subscribeSubtitle}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-bold text-3xl text-white">{websiteCopyStrings.subscribeTitle}</h2>
              <p className="text-gray-100 mt-2 mb-8">{websiteCopyStrings.subscribeSubtitle}</p>
              <div id="mc_embed_signup_scroll" className="flex flex-row w-full justify-center">
                <input
                  className="rounded-lg p-2 w-3/6"
                  type="email"
                  value={email}
                  placeholder={websiteCopyStrings.subscribeInputPlaceholder}
                  name="EMAIL"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div aria-hidden="true" className="hidden-input">
                  {error}
                  <input type="text" name="b_135040dff373660039d95c86c_6873344704" value="" />
                </div>
                <div className="clear">
                  <button
                    className="text-black bg-secondary-500 rounded-lg ml-4 p-2"
                    value={websiteCopyStrings.subscribeButtonLabel}
                    name="subscribe"
                    aria-label="Newsletter subscribe button"
                    onClick={handleSubmitClick}
                  >
                    {websiteCopyStrings.subscribeButtonLabel}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Section>

      <style jsx>
        {`
          .hidden-input {
            position: absolute;
            left: -5000px;
          }
        `}
      </style>
    </div>
  );
};

export default Subscribe;
