import { Component, VERSION, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'graaf14',
  templateUrl: './graaf14.component.html',
  styleUrls: [ './graaf14.component.scss' ]
})
export class Graaf14Component implements OnInit  {
  //name = 'Angular ' + VERSION.major;
  options: any;
  valik = "xxx";

  valdkonnaandmed: any;
  ///valdkonnake: any;

  name = new FormControl();
  dropdown = new FormControl();
  optionxx = ['Loomakasvatus'];
  options2 = ['Taimekasvatus', 'Loomakasvatus', 'Põllumajanduslikud abitegevused', 'Metsakasvatus', 'Metsamajanduse abitegevused', 'Kalapüük', 'Muu kaevandamine', 'Toiduainete tootmine', 'Joogi tootmine', 'Tekstiilitootmine', 'Rõivatootmine', 'Puidu saagimine ja hööveldamine', 'Paberimassi, paberi ja papi tootmine', 'Trükindus ja salvestiste paljundus', 'Keemiatootmine'];
  testSubscription: Subscription;
  valdkonnake = "Loomakasvatus";

  //testSubscription: any;
  muudaVaartust() {
    this.testSubscription = this.dropdown.valueChanges
    // .pipe(debounceTime(100))
    //.subscribe(value => console.log(value));
    .subscribe (value => this.valdkonnake = value);
    ///.subscribe (value => localStorage.setItem("valdkond", value));
    //.subscribe (value => localStorage.setItem("maakond", JSON.stringify(value)));
    }

    paneAndmed() {
      if (this.valdkonnake == 'Taimekasvatus') {
        this.valdkonnaandmed = this.newdata;
      }

      if (this.valdkonnake == 'Loomakasvatus') {
        this.valdkonnaandmed = this.newdata2;
      }

      return this.valdkonnaandmed;


    }


  startdata =  [
    [10.0, 8.04],
    [8.07, 6.95],
    [13.0, 7.58],
    [9.05, 8.81],
    [11.0, 8.33],
    [14.0, 7.66],
    [13.4, 6.81],
    [10.0, 6.33],
    [14.0, 8.96],
    [12.5, 6.82],
    [9.15, 7.2],
    [11.5, 7.2],
    [3.03, 4.23],
    [12.2, 7.83],
    [2.02, 4.47],
    [1.05, 3.33],
    [4.05, 4.96],
    [6.03, 7.24],
    [12.0, 6.26],
    [12.0, 8.84],
    [7.08, 5.82],
    [5.02, 5.68]
  ];

  newdata =  [
    [8.07, 1, 4],
    [1.05, 2, 4],
    [1.4, 0, 4]
  ];

  newdata2 =  [
    [2.07, 1, 4],
    [4.05, 2, 4],
    [6.4, 0, 4]
  ];



  naitajad = [
    'Varude käibesagedus', '    Lühiajalise võlgnevuse käibekordaja', 'Vara käibesagedus'
  ];



  dataList: Array<any> = [];
  schedule: { branch: '' };
  
  constructor() {
    this.dataList = [
      { code: 1, name: "shohel" },
      { code: 2, name: "rana" },
      { code: 3, name: "shipon" }
    ]
  }


  ngOnInit(): void {////};

    setInterval (() => {
   
  ////joonista() {
    this.options = {
      grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
      },
      xAxis: {},
      yAxis: {
        type: 'category',
          data: this.naitajad,
          axisLine: {
            show: false
          }
      },
    series: [
    {
      //symbolSize: 20,
      data: this.valdkonnaandmed,
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] * 6;
      },
      symbolColor: function (val) {
        return 
      }
    }
  ]

   };


  }, 2000);

   /// }
  } ///ngoninit
}