import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RetrieveService} from './services/retrieve.service'
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
