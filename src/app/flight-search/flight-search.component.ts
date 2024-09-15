import { Component, OnInit } from '@angular/core';
import {Router }  from '@angular/router'
import {FlightSearchService}  from './../flight-search.service'


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent implements OnInit {

  cities: any []=[];

  flights:any[]=[

    {IATA_CODE:'IB',Name:'Iberia',Price:'10',Date:'20-10-2024'},
    {IATA_CODE:'BA',Name:'British Airways',Price:'15',Date:'20-10-2024'},
    {IATA_CODE:'LF',Name:'Lufthansa',Price:'7',Date:'20-10-2024'},
    {IATA_CODE:'FR',Name:'Ryan Air',Price:'20',Date:'20-10-2024'},
    {IATA_CODE:'VY',Name:'Vueling',Price:'10',Date:'20-10-2024'},
    {IATA_CODE:'TK',Name:'Turkish Airlines',Price:'5',Date:'20-10-2024'},
    {IATA_CODE:'U2',Name:'Easy Jet',Price:'19.9',Date:'20-10-2024'},
  ]
    
    city:any[]=[
  
      {IATA_CODE:'MAD',City:'Madrid'},
      {IATA_CODE:'BCN',City:'Barcelona'},
      {IATA_CODE:'LHR',City:'London'},
      {IATA_CODE:'CDG',City:'Paris'},
      {IATA_CODE:'FRA',City:'Frankfurt'},
      {IATA_CODE:'IST',City:'Istanbul'},
      {IATA_CODE:'AMS',City:'Amsterdam'},
       {IATA_CODE:'FCO',City:'ROME'},
      {IATA_CODE:'CPH',City:'Copenhagen'}
    ]
  
   searchCriteria={
     flyingFrom:'',
     flyingTo:'',
     date: '',
     adults:1,
     children:0,
     travelClass: 'Economy'
  }; 
 
 

constructor( private flightSeacrhServices:FlightSearchService, private router: Router){}

ngOnInit() {
  this.flightSeacrhServices.getCities().subscribe(
    (data)=>{
      this.cities=data;
    },
    (error)=>{
      console.error ('Error Fetching city data',error)
    }

  );

  

}


onSubmit(){
  this.flightSeacrhServices.searchFlights({date: this.searchCriteria.date}).subscribe((flights)=>{
  this.router.navigate(['/result'],{state:  { flights , searchCriteria:this.searchCriteria}} 

  );}, (error) => {
    console.error('Error fetching flights', error);
    
    this.router.navigate(['/noflight']);
  }
);}
/* date!: string;
onSubmit(){
  this.searchFlights(this.date).subscribe((flights)=>{/* 
  this.flightSeacrhServices.searchFlights(this.date).subscribe((flights)=>{ */
/*   this.router.navigate(['/result'],{state:  { flights }} );}, (error) => {
    console.error('Error fetching flights', error);
  }
);}  */
/* 
  date!: string;
 */
 /*  onSubmit() {
    if (this.date) {
      this.searchFlights(this.date);
    } else {
      console.error('Date is required');
    }
  } */




/* searchFlights(date: string) {
  this.flightSeacrhServices.searchFlights(date).subscribe(
    (data) => {
      console.log('Flights found:', data);
    },
    (error) => {
      console.error('Error fetching flights', error);
    }
  );
 */




}


     

  


