import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(public retrieve:RetrieveService) { }

  ngOnInit() {
  this.retrieve.getList().subscribe( ey => {
    // .toPromise().then( ey => {
      this.entries = ey
      console.log(this.entries)
    });
  }

}
