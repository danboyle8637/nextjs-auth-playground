import { NextApiRequest, NextApiResponse } from 'next'
import Auth0 from '../../utils/auth0'

export const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await Auth0.handleCallback(req, res, { redirectTo: "/dashboard" });
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}