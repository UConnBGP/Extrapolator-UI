import { Component, OnInit } from '@angular/core';

import { AsnPolicyStatsRequest } from '../asn-policy-stats-request';
import { ForecastTableService } from '../forecast-table.service';
import * as $ from 'jquery';

//const bootstrap = require('bootstrap');

@Component({
  selector: 'app-forecast-form',
  templateUrl: './forecast-form.component.html',
  styleUrls: ['./forecast-form.component.css']
})
export class ForecastFormComponent implements OnInit {
  public tableResponse: any = {};
  public policies: any = {};
  public parentIfStubAS: boolean = false;
  public req = new AsnPolicyStatsRequest('13335', 'all');
  public objKeys = Object.keys;
  tableContents = '';
  
  constructor(private forecastTableService: ForecastTableService) { }
  
  ngOnInit() {
  }

  /** Writes the table to the page.
    */
  writeTable() {
      // should probably find a cleaner way of doing this...
      this.policies = this.tableResponse;
	
      for (let entry in this.policies) {
        console.log(this.policies[entry][this.req.asn].not_hijacked_not_blocked);
      }

      this.parentIfStubAS = this.policies['invalid_asn_policy'][this.req.asn]['parent_asn'] != this.req.asn;
      delete this.policies.parent_if_stub_as;
  }

  /** Load the table from the API using the forecast-table service.
    */
  loadTable() {
      this.forecastTableService.getForecastTable(this.req.asn)
        .subscribe((data) => {
        this.tableResponse = data;
        console.log(data);
          this.writeTable();});
  }
  
  // debug function to print the request
  get diagnostic() { return JSON.stringify(this.req); }

}
