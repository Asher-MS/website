import React, { useState } from 'react'

import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  return (
    <div>
      <Section>
        <div className="bg-primary-500 flex flex-col items-center max-w-screen-lg mx-auto rounded-3xl pt-16 pb-20">
          <h2 className="font-bold text-3xl text-white">{websiteCopyStrings.subscribeTitle}</h2>
          <p className="text-gray-100 mt-2 mb-8">{websiteCopyStrings.subscribeSubtitle}</p>
          <form
            action="https://jina.us17.list-manage.com/subscribe/post?u=135040dff373660039d95c86c&amp;id=6873344704"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate w-full"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" className="flex flex-row w-full justify-center">
              {/* <!-- <label for="mce-EMAIL">Subscribe</label> --> */}
              <input
                className="rounded-lg p-2 w-3/6"
                type="email"
                value={email}
                placeholder={websiteCopyStrings.subscribeInputPlaceholder}
                name="EMAIL"
                id="mce-EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              {/* <!-- <div aria-hidden="true"><input type="text" name="b_135040dff373660039d95c86c_6873344704" tabindex="-1" value=""></div> --> */}
              <div className="clear">
                <input
                  className="text-black bg-secondary-500 rounded-lg ml-4 p-2"
                  type="submit"
                  value={websiteCopyStrings.subscribeButtonLabel}
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </Section>
    </div>
  )
}

export default Subscribe
