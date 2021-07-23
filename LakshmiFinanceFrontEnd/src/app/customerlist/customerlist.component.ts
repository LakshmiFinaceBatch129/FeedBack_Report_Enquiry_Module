import { Component, OnInit } from '@angular/core';
import { Enquiryform } from '../model/enquiryform';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
list:Enquiryform[];
  constructor(private common:CommonService) { }

  ngOnInit(): void {
 
    
  }

  getdata()
  {
    this.common.getdata().subscribe(data=>{
      this.list=data;
    });
  }
}
