import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
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
