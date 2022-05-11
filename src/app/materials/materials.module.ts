import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './components/materials/materials.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';


@NgModule({
  declarations: [
    MaterialsComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }
