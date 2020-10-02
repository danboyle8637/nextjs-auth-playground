import { NextApiRequest, NextApiResponse } from 'next'
import Auth0 from '../../utils/auth0'

export const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await Auth0.handleLogout(req, res, { returnTo: "/" });
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}