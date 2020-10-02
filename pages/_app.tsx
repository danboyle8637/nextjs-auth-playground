import App from "next/app"
import { RecoilRoot } from "recoil"

import Layout from "../src/Layout"
import Global from "../styles/Global"
import NavContainer from "../src/components/NavContainer"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <RecoilRoot>
          <Global />
          <Layout>
            <Component {...pageProps} />
            <NavContainer />
          </Layout>
        </RecoilRoot>
      </>
    )
  }
}

export default MyApp
