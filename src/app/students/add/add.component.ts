import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/ervices/services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, apiService: ServicesService) { }

  ngOnInit() {
  	this.addForm = this.formBuilder.group({
  		id: [],
  		username: ['', Validators.required],
  		password: ['', Validators.required],
  		firstName: ['', Validators.required],
  		lastName: ['', Validators.required],
  		age: ['', Validators.required],
  		salary: ['', Validators.required],
  	});
  }

  onSubmit() {
  	console.log(this.addForm.value);

  	this.apiService.createUser(this.addForm.value).subscribe( data => {
  		this.router.navigate(['list-user']);
  	});
  }

}
