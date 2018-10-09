import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  moduleId: module.id
})
export class SliderComponent implements OnInit {

  @Input() maxValue = 100;
  @Input() minValue = 0;
  @Input() value = 0;
  @Input() row = 0;
  @Input() colSpan = 0;

  constructor() { }

  ngOnInit() {
  }
}