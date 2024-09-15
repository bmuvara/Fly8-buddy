import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightResultsComponent}  from './flight-results/flight-results.component';
import {FlightSearchComponent} from './flight-search/flight-search.component'
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NoflightComponent } from './noflight/noflight.component';
import { BookSuccessfullyComponent } from './book-successfully/book-successfully.component';

const routes: Routes = [
  {path:'',component:FlightSearchComponent},
  {path:'noflight',component:NoflightComponent},
  {path: 'result', component:FlightResultsComponent},
  {path: 'customer-details', component:CustomerDetailsComponent},
  {path: 'success', component:BookSuccessfullyComponent},
  {path: 'ticket-details/:id', component:TicketDetailsComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
