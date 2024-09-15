import { Injectable } from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http'
import {Observable}  from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  private apiUrl='http://localhost:3002/api';

  constructor(private http:HttpClient) { }

  getCities(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/cities`)
  }

 
 /*  searchFlights(searchCriteria:any ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/searchFlights`, searchCriteria.date);
  }
   */

  
/*   searchFlights(
    date: string
    ): Observable<any> {
   /*  return this.http.get<any>(`${this.apiUrl}/searchFlights/${Date}`); *//* 
    return this.http.post<any>(`${this.apiUrl}/searchFlights/`,searchCriteria.date);  */
/*      const url = `${this.apiUrl}/searchFlights}`; 
     return this.http.post<any>(url, {date})
  }
 */
 
  
  

/*   searchFlights(searchCriteria: {
    flyingFrom: string;
    flyingTo: string;
    date: string;
    adults: number;
    children: number;
    travelClass: string;
  }): Observable<any> {
    // Implementation to fetch flights based on the criteria
    /* return this.http.post<any>(`${this.apiUrl}/searchFlights/`,searchCriteria.date); */
     /*const url = `${this.apiUrl}/searchFlights?date=${searchCriteria.date}`; */
     /*return this.http.post<any>(url, searchCriteria.date); */
   /*} */

   
  searchFlights(searchCriteria:{date: string;}): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/searchFlights`,searchCriteria);
  
  }

  getFlightById(date:string): Observable<any>{

    return this.http.get<any>(`${this.apiUrl}/flights/${date}`)
  }


  
}
