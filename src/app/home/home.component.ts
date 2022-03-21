import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  selectedYear: any;

  constructor() {
    this.selectedYear = { name: '2022', code: '2022' };
  }

  ngOnInit(): void {}

  //   columnDefs = [
  // 		{headerName: 'Make', field: 'make' },
  // 		{headerName: 'Model', field: 'model' },
  // 		{headerName: 'Price', field: 'price'}
  // 	];

  // 	rowData = [
  // 		{ make: 'Toyota', model: 'Celica', price: 35000 },
  // 		{ make: 'Ford', model: 'Mondeo', price: 32000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 		{ make: 'Porsche', model: 'Boxter', price: 72000 },
  // 	];

  barData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: '#42A5F5',
        data: [50, 25, 12, 48, 90, 76, 42],
		stack: 'Stack 0',
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [21, 84, 24, 75, 37, 65, 34],
		stack: 'Stack 1',
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [41, 52, 24, 74, 23, 21, 32],
		stack: 'Stack 1',
      },
    ],
  };

  pieData = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
      },
    ],
  };

  chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
	responsive: true,
  };

  stakedOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  years = [
    { name: '2022', code: '2022' },
    { name: '2021', code: '2021' },
    { name: '2020', code: '2020' },
  ];
}