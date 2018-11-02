import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-update-excel',
  templateUrl: './update-excel.component.html',
  styleUrls: ['./update-excel.component.css']
})
export class UpdateExcelComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  filenames = ['taylor_swift.xlsx', 'Fiction.xlsx',
  'taylor_swift.xlsx'];

  updateExcelForm = new FormGroup({
    cellId: new FormControl('',Validators.required),
    filename: new FormControl('',Validators.required),
    value: new FormControl('',Validators.required)
  });

  onSubmit() {
    console.log("Values entered from frond end :" + JSON.stringify(this.updateExcelForm.value));
    this.apiService.updateExcelData(this.updateExcelForm.value).subscribe();
 }

}

