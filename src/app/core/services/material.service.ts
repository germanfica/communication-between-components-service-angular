import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  // Observable string sources
  private materialSource = new Subject<string>();

  // Observable string streams
  material$ = this.materialSource.asObservable();

  constructor() { }

  // Service message commands
  sendMaterial(mat: string) {
    this.materialSource.next(mat); // send material
  }
}
