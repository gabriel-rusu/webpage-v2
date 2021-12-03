import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'webpage-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @HostBinding('attr.class') classes = 'background';
  items: any;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.items = require('../../../assets/data.json');
  }

}
