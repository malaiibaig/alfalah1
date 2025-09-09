// * npm i highcharts-react-official react-day-picker

import { useEffect, useRef, useState } from 'react'
import * as Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import type { DateRange } from 'react-day-picker'
import { Button } from '@/components/ui/button'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { constants } from '@/lib/constants'

export default function Chart() {
  const [transactionType, setTransactionType] = useState(
    constants.chart.filter1,
  )
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  })

  // State for animation control
  const [inView, setInView] = useState(false)
  const [currentStats, setCurrentStats] = useState( constants.chart.cards.map(() => 0))
  const [chartData, setChartData] = useState<Array<Array<number | null>>>([
    Array(14).fill(null),
    Array(14).fill(null),
  ])

  // Ref for intersection observer
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Handle animations when section comes into view
  useEffect(() => {
    if (!inView) return

    // Update chart data to trigger animation
    setChartData([
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 2, 2],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ])

    // Animate counters
    const duration = 4000
    const startTime = Date.now()
    let animationFrameId: number

    const updateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newStats =  constants.chart.cards.map((stat) => {
        return Math.floor(progress * stat.value)
      })

      setCurrentStats(newStats)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounters)
      }
    }

    animationFrameId = requestAnimationFrame(updateCounters)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [inView])

  // Chart options with dynamic data
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      height: 300,
      spacingLeft: 0,
      style: {
        fontFamily: 'inherit',
      },
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: [
        '6 Jul',
        '7 Jul',
        '8 Jul',
        '9 Jul',
        '10 Jul',
        '11 Jul',
        '12 Jul',
        '13 Jul',
        '14 Jul',
        '15 Jul',
        '16 Jul',
        '17 Jul',
        '18 Jul',
        '19 Jul',
      ],
      tickmarkPlacement: 'on',
      gridLineWidth: 0,
      lineColor: '#E9EBED',
      labels: {
        style: {
          color: '#A0A4A8',
          fontSize: '12px',
        },
      },
    },
    yAxis: {
      title: { text: 'WORTH IN AED' },
      gridLineColor: '#E9EBED',
      labels: {
        style: {
          color: '#A0A4A8',
          fontSize: '12px',
        },
        formatter: function () {
          return this.value + ' B'
        },
      },
    },
    legend: { enabled: false },
    tooltip: {
      shared: true,
      backgroundColor: '#fff',
      borderColor: '#E9EBED',
      style: { color: '#0B0B0B' },
    },
    plotOptions: {
      area: {
        fillOpacity: 0.15,
        marker: {
          enabled: false,
        },
        lineWidth: 2,
        lineColor: undefined,
        states: {
          hover: {
            enabled: true,
          },
        },
        connectNulls: true,
        animation: {
          duration: 1000,
        },
      },
      series: {
        states: {
          inactive: { opacity: 1 },
        },
      },
    },
    series: [
      {
        type: 'areaspline',
        name: 'Series 1',
        color: '#E2C385',
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, 'rgba(226, 195, 133, 0.25)'],
            [1, 'rgba(226, 195, 133, 0)'],
          ],
        },
        data: chartData[0],
        lineWidth: 2,
        lineColor: '#E2C385',
        fillOpacity: 0.15,
        marker: { enabled: false },
        animation: {
          duration: 1000,
        },
      },
      {
        type: 'areaspline',
        name: 'Series 2',
        color: '#B6D3C5',
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, 'rgba(182, 211, 197, 0.15)'],
            [1, 'rgba(182, 211, 197, 0)'],
          ],
        },
        data: chartData[1],
        lineWidth: 2,
        lineColor: '#B6D3C5',
        fillOpacity: 0.15,
        marker: { enabled: false },
        animation: {
          duration: 1000,
        },
      },
    ],
    credits: { enabled: false },
  }

  return (
    <div ref={containerRef} className="w-full bg-bg-solitude pt-8 pb-24">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="w-full bg-white rounded-xl p-6">
            <h1
              className="text-2xl lg:text-4xl"
              dangerouslySetInnerHTML={{ __html: constants.chart.title }}
            />
            <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-4">
              <div className="w-full lg:w-[26%] flex bg-[#E9EBED] rounded-full p-1 justify-between">
                <Button
                  variant={
                    transactionType === constants.chart.filter1
                      ? 'white'
                      : 'ghost'
                  }
                  size="sm"
                  className="rounded-full w-[30%]"
                  onClick={(e) => {
                    e.preventDefault()
                    setTransactionType(constants.chart.filter1)
                  }}
                >
                  {constants.chart.filter1}
                </Button>
                <Button
                  variant={
                    transactionType === constants.chart.filter2
                      ? 'white'
                      : 'ghost'
                  }
                  size="sm"
                  className="rounded-full w-[30%]"
                  onClick={(e) => {
                    e.preventDefault()
                    setTransactionType(constants.chart.filter2)
                  }}
                >
                  {constants.chart.filter2}
                </Button>
              </div>
              <div className="w-full mt-2 lg:mt-0 lg:w-[74%] flex justify-end">
                <DateRangePicker
                  onUpdate={(values) => setRange(values.range)}
                  initialDateFrom={new Date()}
                  initialDateTo={new Date()}
                  align="start"
                  locale="en-GB"
                  showCompare={false}
                />
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-6">
              { constants.chart.cards.map((stat, index) => (
                <div
                  key={index}
                  className="w-[46%] lg:w-[20%] rounded-md bg-[#E9EBED] flex flex-col justify-between items-center p-4"
                >
                  <p className="text-2xl font-bold">
                    {currentStats[index].toLocaleString()}
                  </p>
                  <p className="lg:text-sm text-xs text-center">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="w-full lg:w-[50%] rounded-md p-4">
                <p className="text-lg">
                  {constants.chart.range}{' '}
                  <span className="font-bold">
                    {range.from?.toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>{' '}
                  -{' '}
                  <span className="font-bold">
                    {range.to?.toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </p>
              </div>
            </div>

            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              ref={chartComponentRef}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
