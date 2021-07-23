import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { EnquiryofcustomerComponent } from './enquiryofcustomer/enquiryofcustomer.component';

const routes: Routes = [{path:'list',component:CustomerlistComponent},{path:'equiryform',component:EnquiryofcustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
