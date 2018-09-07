import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-download-zip-form',
  templateUrl: './download-zip-form.component.html',
  styleUrls: ['./download-zip-form.component.css']
})
export class DownloadZipFormComponent{
  form: FormGroup;
  orders = [
    { id: 1, name: 'order 1' },
    { id: 2, name: 'order 2' },
    { id: 3, name: 'order 3' },
    { id: 4, name: 'order 4' }
  ];

  constructor(private formBuilder: FormBuilder) {
    // Create a new array with a form control for each order
    const controls = this.orders.map(c => new FormControl(false));
    // controls[0].setValue(true); // Set the first checkbox to true (checked)

    this.form = this.formBuilder.group({
      orders: new FormArray(controls, minSelectedCheckboxes(1))
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);

    // console.log(selectedOrderIds);


    console.log("Is it valid ? : " + this.form.valid)
  }
}


function  minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
    // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
