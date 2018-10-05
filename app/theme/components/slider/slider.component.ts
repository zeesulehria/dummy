import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  moduleId: module.id
})
export class SliderComponent implements OnInit {

  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() value = 0;
  constructor() { }

  ngOnInit() {
  }
}