import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiryform } from '../model/enquiryform';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-enquiryofcustomer',
  templateUrl: './enquiryofcustomer.component.html',
  styleUrls: ['./enquiryofcustomer.component.css']
})
export class EnquiryofcustomerComponent implements OnInit {
  equiryform:FormGroup;
  b:Enquiryform;
  constructor(private fb:FormBuilder,private common:CommonService,private router:Router) { }

  ngOnInit(): void {

    this.equiryform=this.fb.group({
      name:[''],
      panno:['']
    })
  }


  formSubmit()
  {
    this.common.getdata().subscribe(data=>{
      for(let a of data)
      {
        if(this.equiryform.get('name').value===a.per.name && this.equiryform.get('panno').value===a.per.panno)
        {
           this.b=a;
           this.equiryform.reset();
        }
      }
    });

    this.router.navigate(['equiryform']);

  }

  defaulter(b)
  {
    b.per.status="costomere is defaulter";
    this.common.update(b).subscribe();
  }
  good(b)
  {
    b.per.status="costomere is good";
    this.common.update(b).subscribe();


  }
  pending(b)
  {
    b.per.status="costomer installlments are pending";
        this.common.update(b).subscribe();



  }
}
