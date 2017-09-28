import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    // { path: 'phone/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: '' }
];
