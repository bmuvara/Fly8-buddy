import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import {DataSharingService} from './../shared/data-sharing.service'
@Component({
  selector: 'app-book-successfully',
  templateUrl: './book-successfully.component.html',
  styleUrl: './book-successfully.component.css'
})
export class BookSuccessfullyComponent implements OnInit {
  flightDetails: any;
  passengerDetails: any;
  searchCriteria: any;

  constructor( private router:Router, private dataSharingService: DataSharingService){

  }

  ngOnInit(): void {/* 
    const navigation= this.router.getCurrentNavigation(); */

    /* this.flightDetails=navigation?.extras?.state?.['flightDetails'];
    this.passengerDetails=navigation?.extras?.state?.['passengerDetails'] */

     // Retrieve the data from the service
 /* this.flightDetails=this.dataSharingService.getFlightDetails();
this.passengerDetails=this.dataSharingService.getPassengerDetails(); 
     
    console.log('Flightdd details:' ,this.searchCriteria);
    console.log('Passenger details:',this.passengerDetails)

    if(!this.passengerDetails || this.flightDetails){
      console.error('Missing data! Redirecting to home page...');

      this.router.navigate(["/"])
    } */

    const navigation= this.router.getCurrentNavigation()
    this.flightDetails=navigation?.extras?.state?.['flights']
    this.flightDetails=navigation?.extras?.state?.['flightDetails'];
    this.passengerDetails=navigation?.extras?.state?.['passengerDetails']
  }

  // Inside TicketSuccessfullyBookedComponent
goToTicketDetails() {
  console.log('Passenger details',this.passengerDetails)
  console.log('flight details',this.flightDetails)
  this.router.navigate(['/ticket-details/:id'], {
    state: {
      flightDetails: this.flightDetails,
      passengerDetails: this.passengerDetails
    }
  });
}


}
