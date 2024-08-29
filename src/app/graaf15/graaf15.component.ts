import { Component, VERSION, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'graaf15',
  templateUrl: './graaf15.component.html',
  styleUrls: [ './graaf15.component.scss' ]
})
export class Graaf15Component implements OnInit  {
  //name = 'Angular ' + VERSION.major;
  options: any;
  valik = "xxx";

  valdkonnaandmed: any;
  ///valdkonnake: any;

  name = new FormControl();
  dropdown = new FormControl();
  optionxx = ['Loomakasvatus'];
  options2 = ['Taimekasvatus', 'Loomakasvatus', 'Põllumajanduslikud abitegevused', 'Metsakasvatus', 'Metsamajanduse abitegevused', 'Kalapüük', 'Muu kaevandamine', 'Toiduainete tootmine', 'Joogi tootmine', 'Tekstiilitootmine', 'Rõivatootmine', 'Puidu saagimine ja hööveldamine', 'Paberimassi, paberi ja papi tootmine', 'Trükindus ja salvestiste paljundus', 'Keemiatootmine', 'Plasttoodete tootmine', 'Muude mittemetalsetest mineraalidest toodete tootmine', 'Metalltoodete tootmine, v.a masinad ja seadmed', 'Arvutite, elektroonika- ja optikaseadmete tootmine', 'Elektriseadmete tootmine', 'Üldmasinate tootmine', 'Mootorsõidukite tootmine', 'Muude transpordivahendite tootmine', 'Mööbli tootmine', 'Jalatsitootmine', 'Muu tootmine', 'Masinate, seadmete remont ja paigaldus', 'Tööstuslike masinate ja seadmete paigaldus', 'Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine', 'Veekogumine ja kanalisatsioon', 'Jäätmekogumine, töötlus, taaskasutamine', 'Üldehitus', 'Teede ja trasside ehitus', 'Eriosade ehitus', 'Mootorsõidukite hulgi ja jaemüük', 'Üldine vahendamine', 'Põllumajandustoorme ja elusloomade hulgimüük', 'Kodutarvete hulgimüük', 'Muude asjade, masinate ja seadmete hulgimüük', 'Muu spetsialiseeritud hulgimüük', 'Spetsialiseerimata hulgikaubandus', 'Spetsialiseerimata jaemüük', 'Toidu jaemüük', 'Mootorikütuse jaemüük', 'Arvutite ja seadmete jaemüük', 'Muude kodutarvete jaemüük', 'Kultuuri ja vabaaja kaupade jaemüük', 'Jaemüük kioskites ja turgudel', 'Jaemüük posti või interneti teel', 'Muu sõitjate maismaavedu', 'Kaubavedu maanteel ja kolimisteenused', 'Sõitjate veevedu (veetransport)', 'Kauba õhutransport', 'Laondus', 'Veondust abistavad tegevused', 'Posti ja kullerteenus', 'Majutus', 'Toidu ja joogi serveerimine', 'Kirjastamine', 'Kinofilmid, muusika ja Videod', 'Elektrooniline side', 'Programmeerimine', 'Infoalane tegevus', 'Finantsvahendus', 'Kinnisvara', 'Juriidilised toimingud', 'Arvepidamine', 'Peakontorid', 'Juhtimisalane nõustamine', 'Arhitektid, insenerid', 'Teimimine, analüüs', 'Teadus- ja arendustegevus', 'Reklaam, turu-uuringud', 'Disainerite tegevus', 'Fotograafia', 'Muu kutsetegevus', 'Veterinaaria', 'Mootorsõidukite rentimine', 'Tarbeesemete üürimine ja kasutusrent', 'Muude masinate, materiaalse vara üürimine, kasutusrent', 'Intellektuaalomandi rentimine', 'Tööhõive', 'Reisibürood ja reisikorraldus', 'Turvatöö, juurdlus', 'Hoonete, maastike hooldus', 'Büroohaldus', 'Haridus', 'Tervishoid', 'Hoolekandeasutuste tegevus', 'Loome, kunst, meelelahutus', 'Muude kultuuriasutuste tegevus', 'Sporditegevus, lõbustus, vaba aeg', 'Arvutite, tarbeesemete parandus', 'Muu teenindus'];
  testSubscription: Subscription;
  valdkonnake = "Taimekasvatus";

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

      if (this.valdkonnake == 'Põllumajanduslikud abitegevused') {
        this.valdkonnaandmed = this.newdata3;
      }

      if (this.valdkonnake == 'Metsakasvatus') {
        this.valdkonnaandmed = this.newdata4;
      }

      //return this.valdkonnaandmed;


    }

    minVarKaibs = 3.4;


  newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
    [1.4, 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
    [this.minVarKaibs, 0, 6],
    [8.07, 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
    [2.2, 1, 6], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
    [1.05, 2, 4],
    [1.9, 2, 6]
  ];

  newdata2 =  [
    [2.07, 1, 4],
    [3.4, 0, 6],
    [4.05, 2, 4],
    [2.2, 1, 6],
    [6.4, 0, 4],
    [1.9, 2, 6]
  ];

  newdata3 =  [
    [3.07, 1, 4],
    [3.4, 0, 6],
    [4.75, 2, 4],
    [2.2, 1, 6],
    [6.8, 0, 4],
    [1.9, 2, 6]
  ]; 

  newdata4 =  [
    [2.23, 1, 4],
    [3.4, 0, 6],
    [1.5, 2, 4],
    [2.2, 1, 6],
    [4.8, 0, 4],
    [1.9, 2, 6]
  ];



  naitajad = [
    'Varude käibesagedus', '    Lühiajalise võlgnevuse käibekordaja', 'Vara käibesagedus'
  ];



 // dataList: Array<any> = [];
 // schedule: { branch: '' };
  
//  constructor() {
//    this.dataList = [
//      { code: 1, name: "shohel" },
//      { code: 2, name: "rana" },
//      { code: 3, name: "shipon" }
//    ]
 // }


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


      //color: [
        //'#c23531',
        //'#2f4554',
        //'#c4ccd3'
      //],




      tooltip: {

        //formatter: params => {
        //    return '<div style="width:300px; height: 400px">working j</div>';
        //  },
        //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
        // confine: true
        trigger: 'item',
        confine: true,
      
        formatter: function(params) {
          if (params.value[2] == 6) {var xx = "Minu näitaja: "}
          if (params.value[2] == 4) {var xx = "Sektori keskmine näitaja: "}

          if (params.value[1] == 0) {var zz = " Varude käibesagedus"}
          if (params.value[1] == 1) {var zz = " Lühiajalise võlgnevuse käibekordaja"}
          if (params.value[1] == 2) {var zz = " Vara käibesagedus"}

                  return xx+params.value[0]+"<br>" +zz}      
      
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


      //color: [
      //  '#c23531',
      //  '#2f4554',
      //  '#c4ccd3'
      //],


      type: 'scatter',
      symbolSize: function (val) {
        return val[2] * 6;
      },
      //symbolColor: function (val) {
      //  if (val[2] == 6)
      //  return 'red';
      //},
      itemStyle: {

        color: (params) => {
          if (params.value[2] == 6) {
            return '#2f4554';
          }
          if (params.value[2] == 4) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            return '#2ea0f5';//'#' + randomColor; //#7289ab  //return '#2ea0f5';
          } else {
            return '#c4ccd3';
          }
        }
       
      }
    }
  ]

   };


  }, 2000);

   /// }
  } ///ngoninit
}