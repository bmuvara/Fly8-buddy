import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  passengerForm!: FormGroup; 

  flightDetails: any;  

  passengerDetails: any ={
    firstAdultName: '',
    secondAdultName: '',
    childName:  ''
  };

  

  constructor( private router: Router){
    const navigation= this.router.getCurrentNavigation()
    this.flightDetails=navigation?.extras?.state?.['flights']
    console.log('Retrieved flight details in CustomerDetailsComponent:', this.flightDetails);
  }

/*   addChild(){ this.passengerDetails.push({name:''})

} */

//Method for  reset the form

   resetForm(form:any)
   {
      form.resetForm();// Resets the form controls
      this.passengerDetails={
        firstAdultName: '',
    secondAdultName: '',
    childName:  ''

      };

   }

   proceedToTicketDetails(): void {
    if (this.flightDetails && this.passengerDetails) {
    // Navigate to the TicketDetailsComponent and pass both flight and customer details
    console.log('Passenger details',this.passengerDetails)
    console.log('flight details',this.flightDetails)
    this.router.navigate(['/ticket-details/:date'], {
      state: {
        flightDetails: this.flightDetails,
        passengerDetails: this.passengerDetails
      }
    });
  }  else {
    console.error('Missing flightDetails or passengerDetails.');
  }
   }
/* onSubmit (){
  console.log('Passenger details',this.passengerDetails)

} */

/* onSubmit(){ */
 /*  this.flightSeacrhServices.searchFlights(this.searchCriteria).subscribe((flights)=>{
  this.router.navigate(['/result'],{state:  { flights , searchCriteria:this.searchCriteria}} );}
); */
//Prepare navigation extras
/* console.log('Passenger details',this.passengerDetails)
const navigationExtras: NavigationExtras={

  state:{passengerDetails :this.passengerDetails,flightDetails : this.flightDetails}
}; */

// Navigate to ticket-details with the form data

/* this.router.navigate(['ticket-details/:date'],navigationExtras)

} */

}
