import { NextApiRequest, NextApiResponse } from 'next'
import Auth0 from '../../utils/auth0'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await Auth0.handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}