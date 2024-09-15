import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private flightDetails: any;
  private searchCriteria: any;
  private passengerDetails: any;
 
  setFlightDetails(details: any){

    this.searchCriteria=details;
  }

  getFlightDetails(){
    return this.searchCriteria
  }

  setPassengerDetails(details:any){

    this.passengerDetails=details;
  }

  getPassengerDetails(){
    return this.getPassengerDetails
  }

  clearData(){

    this.searchCriteria=null;
    this.passengerDetails=null;
  }

}
