import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastTableService {

  constructor(private http: HttpClient) { }

  /** Return an Observable of response body. 
    */
  getForecastTable(asn) {
    var result = this.http.get('https://bgpforecast.uconn.edu/asn_policy_stats/' + asn + '/all/');
    console.log(result);

    return result;
  }
}
