import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/home/header'
import TrustpilotReviews from '@/components/home/trustpilotReviews'
import Services from '@/components/home/services'
import Agents from '@/components/home/agents'
import Types from '@/components/home/types'
import Chart from '@/components/home/chart'
import Testimonials from '@/components/common/testimonial'
import About from '@/components/home/about'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full">
      <Header />
      <TrustpilotReviews />
      <Services />
      <Types />
      <Chart />
      <Agents />
      <Testimonials />
      <About />
    </div>
  )
}
