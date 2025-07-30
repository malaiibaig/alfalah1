// * npx shadcn@latest init 
// * npm i vite-plugin-svgr

import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/home/header'
// import TrustpilotReviews from '../components/home/trustpilotReviews'
// import Stats from '@/components/home/stats'
// import Properties from '@/components/home/properties'
// import Communities from '@/components/home/communities'
// import Agents from '@/components/home/agents'
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
      {/* <Stats />
      <Properties title={constants.properties.title} />
      <Communities />
      <Agents />
      <Chart />
      <Articles />
      <Faqs /> */}
    </div>
  )
}
