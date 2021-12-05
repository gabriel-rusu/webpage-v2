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

  period(item: any) {
    const start =  [item.start.month, item.start.year].join(' ');
    const end = item.end ? [item.end.month, item.end.year].join(' ') : 'Present';
    return start + ' - ' + end;
  }

  issued(item: any) {
    return [item.date.month, item.date.year].join(' ');
  }

  verify(issuerLogo: string) {
    console.log('issuerLogo: ', issuerLogo)
    console.log('issuer logo: ', issuerLogo.indexOf('coursera') !== -1)
    return issuerLogo.indexOf('coursera') !== -1;
  }
}
