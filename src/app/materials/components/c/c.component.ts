import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {
  material: string

  constructor(private materialService: MaterialService) {
    this.material = "";
    materialService.material$.subscribe(
      m => {
        this.material = m; // received material
      }
    );
  }

  ngOnInit(): void {
  }

}
