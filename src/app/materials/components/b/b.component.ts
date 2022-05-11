import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
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
