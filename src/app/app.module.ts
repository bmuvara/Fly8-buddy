import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import {provideHttpClient} from '@angular/common/http';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NoflightComponent } from './noflight/noflight.component';
import { BookSuccessfullyComponent } from './book-successfully/book-successfully.component'

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    TicketDetailsComponent,
    CustomerDetailsComponent,
    NoflightComponent,
    BookSuccessfullyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
