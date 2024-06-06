import StreamVideoProvider from "@/providers/StreamClientProvider"
import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "VideoUs",
  description: "Our next generation video conference app",
  icons: '/icons/logo.svg'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>

    </main>
  )
}
export default RootLayout