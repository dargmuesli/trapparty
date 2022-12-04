<template>
  <Bar
    :chart-data="data"
    :chart-id="id"
    :chart-options="options"
    :height="height"
  />
</template>

<script setup lang="ts">
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import type { ChartOptions } from 'chart.js'
import merge from 'lodash.merge'
import { Bar } from 'vue-chartjs/dist/index' // TODO: wait for vue-chartjs support chartjs v4 (https://github.com/apertureless/vue-chartjs/pull/934)
import { TChartData } from 'vue-chartjs/dist/types'

export interface Props {
  id: string
  data: TChartData<'bar', number[], unknown>
  height?: number
  horizontal?: boolean
  optionsAdditional?: ChartOptions<'bar'>
}
const props = withDefaults(defineProps<Props>(), {
  height: 150,
  horizontal: true,
  optionsAdditional: undefined,
})

// computations
const options = computed((): ChartOptions<'bar'> => {
  const optionsDefault: ChartOptions<'bar'> = {
    indexAxis: props.horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        font: {
          size: 24,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
        ticks: {
          font: {
            size: 17,
          },
        },
      },
      y: {
        grid: {
          // borderColor: '#666', // TODO: check if needed
          color: '#666',
        },
        stacked: true,
        ticks: {
          font: {
            size: 17,
          },
        },
      },
    },
  }
  return merge(optionsDefault, props.optionsAdditional) // TODO: replace with defu
})

// initialization
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
)
</script>
