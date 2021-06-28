import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const SUBDOMAIN = process.env.SUBDOMAIN
const LIST_ID = process.env.LIST_ID
const API_KEY = process.env.API_KEY

export default function subscribeHandler (req: NextApiRequest, res: NextApiResponse) {
  const requestEmail = JSON.parse(req.body).email
  const mailchimpSubscribeURL = `https://${SUBDOMAIN}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`
  const headers = { Authorization: `apiKey ${API_KEY}` }
  const requestBody = { email_address: requestEmail, status: 'subscribed' }
  fetch(mailchimpSubscribeURL, {
    method: 'post',
    body: JSON.stringify(requestBody),
    headers
  }).then((res) => res.json())
  res.status(200).json({ response: 'success' })
}
