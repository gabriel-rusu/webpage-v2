import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'webpage-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @HostBinding('attr.class') classes = 'background';

  constructor() { }

  ngOnInit(): void {
  }

}
