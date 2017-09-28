import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entryId:string;
  entry;
  constructor(public retrieve:RetrieveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.entryId = String(params['id'])
        this.retrieve.get(this.entryId)
        .subscribe( ey => {
          console.log(ey)
            this.entry = ey
            });
      });



  }

}
