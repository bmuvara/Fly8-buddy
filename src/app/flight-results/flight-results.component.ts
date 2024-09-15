import { Component,OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {FlightSearchService}  from './../flight-search.service';
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrl: './flight-results.component.css'
})
export class FlightResultsComponent  {
  
 flights: any []=[]; 
 
 flightss:any[]=[

  {IATA_CODE:'IB',Name:'Iberia',Price:'10',Date:'20-10-2024'},
  {IATA_CODE:'BA',Name:'British Airways',Price:'15',Date:'20-10-2024'},
  {IATA_CODE:'LF',Name:'Lufthansa',Price:'7',Date:'20-10-2024'},
  {IATA_CODE:'FR',Name:'Ryan Air',Price:'20',Date:'20-10-2024'},
  {IATA_CODE:'VY',Name:'Vueling',Price:'10',Date:'20-10-2024'},
  {IATA_CODE:'TK',Name:'Turkish Airlines',Price:'5',Date:'20-10-2024'},
  {IATA_CODE:'U2',Name:'Easy Jet',Price:'19.9'}
]

  searchCriteria: any;

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

  constructor(private flightSearchService:FlightSearchService,private router:Router){
  const navigation= this.router.getCurrentNavigation();
  this.searchCriteria=navigation?.extras?.state?.['flights'];

  console.log('Retrieved flight details in CustomerDetailsComponent:', this.flights);

  }

  ngOnInit() {

    if(this.searchCriteria){
this.flightSearchService.searchFlights(this.searchCriteria).subscribe(
  (flights)=>{
    this.flights=flights

  },

  (error)=>{
    console.error('Error fetching flight data',error);
  }
);

    }

    
    
  }
  /*   selectedCity: string; */
selectedCity: string | null = null;
onCityChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedCity = selectElement.options[selectElement.selectedIndex].text;
}

// In your Results Component
bookTicket(flights: any) {
  console.log('flight details',this.flights)
  
  this.router.navigate(['/customer-details'], {
    state: {  flights:flights }
    
  });
}


  downloadTicket(flight: any) {
    const ticketDetails = `
      Airline: ${flight.children}
      Price: ${flight.Price}
      Departure Date: ${flight.Date}
    `;
    const blob = new Blob([ticketDetails], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'ticket.txt');
  }
}

