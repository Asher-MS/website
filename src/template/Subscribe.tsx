import React, { useState } from 'react'

import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  return (
    <div>
      <Section>
        <h2>{websiteCopyStrings.subscribeTitle}</h2>
        <p>{websiteCopyStrings.subscribeSubtitle}</p>
        <form
          action="https://jina.us17.list-manage.com/subscribe/post?u=135040dff373660039d95c86c&amp;id=6873344704"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            {/* <!-- <label for="mce-EMAIL">Subscribe</label> --> */}
            <input
              className="form-control bg-white my-3"
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
                className="btn btn-pill btn-dark shadow-sm get-started mt-3"
                type="submit"
                value={websiteCopyStrings.subscribeButtonLabel}
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </div>
        </form>
      </Section>
    </div>
  )
}

export default Subscribe
