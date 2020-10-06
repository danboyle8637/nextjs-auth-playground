import App from "next/app"
import { RecoilRoot } from "recoil"
import { Auth0Provider } from "@auth0/auth0-react"

import Layout from "../src/Layout"
import Global from "../styles/Global"
import NavContainer from "../src/components/NavContainer"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_CLIENT_ONLY_DOMAIN!}
          clientId={process.env.NEXT_PUBLIC_CLIENT_ONLY_CLIENT_ID!}
          redirectUri={process.env.NEXT_PUBLIC_CLIENT_ONLY_REDIRECT_URI!}
        >
          <RecoilRoot>
            <Global />
            <Layout>
              <Component {...pageProps} />
              <NavContainer />
            </Layout>
          </RecoilRoot>
        </Auth0Provider>
      </>
    )
  }
}

export default MyApp
