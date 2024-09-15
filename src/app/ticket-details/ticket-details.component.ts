import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';
import {  ActivatedRoute,Router}  from '@angular/router';
import {FlightSearchService }  from './../flight-search.service';
import {saveAs}  from 'file-saver'
import 'jspdf-autotable'
import {jsPDF} from 'jspdf'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit{

  

  @ViewChild('ticketContent', { static: false })ticketContent!: ElementRef
   
  flights: any []=[];  


  searchCriteria:any
  flightDetails: any;
  passengerDetails:any;
  constructor( 
    private route: ActivatedRoute, 
    private flightSearchService:FlightSearchService,
    private router:Router) {
      //Retrieve the state data passed from CustomerDatailsComponent

      const navigation=this.router.getCurrentNavigation();
      this.passengerDetails=navigation?.extras.state?.['passengerDetails']
      this.flightDetails=navigation?.extras?.state?.['flightDetails'];
      
  console.log('Flight Details:', this.flightDetails);  // Check if this logs the correct data
  console.log('Customer Details:', this.passengerDetails);  // Check if this logs the correct data


    }

ngOnInit(): void {

 /*  const date=this.route.snapshot.paramMap.get('date');
  if (date){
    this.flightSearchService.getFlightById(date).subscribe(

      (flights:any)=>this.flights=this.flights,
      (error:any)=>console.error('Error fetching detals',error)
    )
  } */

//you can also check for null valuess here and handle accordingly
if(!this.passengerDetails || !this.flightDetails){
  console.error('No passenger details or flight details available.');
  this.router.navigate(['/']);// Redirect to home if no data
}  else{
  console.log("Passenger details", this.passengerDetails);
  console.log("Customer details", this.flightDetails)

}

}  

/* downloadTicket(flight: any) {
  const ticketDetails = `
    Airline: ${flight.Name}
    Price: ${flight.Price}
    Departure Date: ${flight.Date}
  `;
  const blob = new Blob([ticketDetails], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, 'ticket.txt');
}
 */

/* downloadTicket() {
  // Get the content of the ticket details HTML
  const ticketHtmlContent = this.ticketContent.nativeElement.innerHTML;

  // Create a Blob from the HTML content
  const blob = new Blob([ticketHtmlContent], { type: 'text/html;charset=utf-8' });
  
  // Download the Blob as an HTML file
  saveAs(blob, 'ticket_details.html');
} */

downloadTicket() {
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    
  });;

  // Get the HTML content from the ticketContent element
  const ticketHtml = this.ticketContent.nativeElement.innerHTML;



  // Use jsPDF to add the content to the PDF
  doc.html(ticketHtml, {
    callback: function (doc) {
      doc.save('ticket.pdf'); // Save the PDF with the name 'ticket.pdf'
    },
    x: 1,
    y: 1,
    width: 190, // Adjust the width to fit content
    windowWidth: 400, // Adjust the window width for better fit
    html2canvas: { scale: 0.3,
      useCORS: true // Ensure images are rendered correctly
    } // Adjust scale to fit content on the page
  });
}

}


