import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadDataComponent} from './read-data/read-data.component';

const routes: Routes = [
    { path:  '', redirectTo:  'writeData', pathMatch:  'full' },
    { path: 'readData', component: ReadDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }