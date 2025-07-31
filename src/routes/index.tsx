// * npx shadcn@latest init 
// * npm i vite-plugin-svgr
// * npm install react-icons --save

import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/home/header'
import TrustpilotReviews from '@/components/home/trustpilotReviews'
import Services from '@/components/home/services'
import Agents from '@/components/home/agents'
import Types from '@/components/home/types'
// import Chart from '@/components/home/chart'
// import Articles from '@/components/home/articles'
// import Faqs from '@/components/home/faqs'
// import { constants } from '@/lib/constants'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full">
      <Header />
      <TrustpilotReviews />
      {/* <Properties title={constants.properties.title} /> */}
      <Services />
      <Types />
      <Agents />

      {/* <Articles /> */}
      {/* <Faqs />  */}
    </div>
  )
}
