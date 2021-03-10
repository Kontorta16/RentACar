import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor() {}
  filterText = '';
  cars: Car[] = [
    {
      Id: 1,
      BrandId: 1,
      ColorId: 1,
      DailyPrice: 220,
      Description: 'Otomatik',
      ModelYear: 2019,
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      Id: 2,
      BrandId: 1,
      ColorId: 1,
      DailyPrice: 220,
      Description: 'Düz',
      ModelYear: 2019,
      imageUrl:
        'data:image/jpeg;base64,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',
    },
  ];
  ngOnInit(): void {}
}
