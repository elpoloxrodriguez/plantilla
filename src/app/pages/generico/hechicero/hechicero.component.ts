import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-hechicero',
  templateUrl: './hechicero.component.html',
  styleUrls: ['./hechicero.component.scss'],
})
export class HechiceroComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  grupos : any

  tipologias = new FormControl('');

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
