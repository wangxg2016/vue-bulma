<template>
<xcontent :classname="'bg-light'">
  <span slot="title">Charts</span>
  <div class="notification is-white">
    引入Chart.js 2.3.0，这部分没什么说的，实际应用中ajax数据处理为主，vue+chart很搭。
  </div>
  <div class="columns is-multiline">
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv0" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv1" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv2" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv3" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv4" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv5" width="400" height="300"></canvas>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <canvas ref="cv6" width="400" height="300"></canvas>
      </div>
    </div>
  </div>
</xcontent>
</template>
<script>
import Chart from 'chart.js'
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent
  },
  data () {
    return {
      chart1: null,
      chart2: null,
      chart3: null,
      data1: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '折线图',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      },
      data2: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '柱状图',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      data3: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: '雷达图',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      data4: {
        datasets: [{
          data: [11, 16, 7, 3, 14],
          backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
          label: '区域图'
        }],
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
      },
      data5: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      },
      data6: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '指标一',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          },
          {
            label: '指标二',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90],
            spanGaps: false
          }
        ]
      },
      areaOptions: {
        // Boolean - If we should show the scale at all
        showScale: true,
        // Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        // String - Colour of the grid lines
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        // Number - Width of the grid lines
        scaleGridLineWidth: 1,
        // Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        // Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        // Boolean - Whether the line is curved between points
        bezierCurve: true,
        // Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        // Boolean - Whether to show a dot for each point
        pointDot: false,
        // Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        // Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        // Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        // Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        // Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        // String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        // Boolean - whether to make the chart responsive to window resizing
        responsive: true
      }
    }
  },
  methods: {
    draw (type, json, dom, options) {
      if (options) {
        this.chart1 = new Chart(dom.getContext('2d'), {
          type: type,
          options: options,
          data: json
        })
      } else {
        this.chart1 = new Chart(dom.getContext('2d'), {
          type: type,
          data: json
        })
      }
    }
  },
  mounted () {
    this.draw('line', this.data6, this.$refs.cv0)
    this.draw('line', this.data1, this.$refs.cv1)
    this.draw('bar', this.data2, this.$refs.cv2)
    this.draw('radar', this.data3, this.$refs.cv3)
    this.draw('polarArea', this.data4, this.$refs.cv4)
    this.draw('pie', this.data5, this.$refs.cv5)
    this.draw('doughnut', this.data5, this.$refs.cv6)
  }
}
</script>
<style lang="less">
  canvas{
    user-select:none;
  }
</style>