import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import { StateContextProvider } from '/context'

export default function App({
  Component, pageProps: { ...pageProps }
}) {
  return (
    <ThirdwebProvider activeChain="goerli">
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </ThirdwebProvider>
  )
}

