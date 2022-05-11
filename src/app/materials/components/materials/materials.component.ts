import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.form = {} as FormGroup;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  save(event: Event) {
    event.preventDefault();
    console.log("material name: " + this.form.value['material']);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      material: ['', [Validators.required]]
    });
  }
}
