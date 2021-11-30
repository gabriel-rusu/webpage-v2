import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'webpage-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @HostBinding('attr.class') classes = 'background';
  items: any =  {
    "experience": [{
      "position": "Full Stack Software Engineer",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Canadian_Bank_Note_Company_logo.svg/1200px-Canadian_Bank_Note_Company_logo.svg.png"
    }],
    "education": [

      {
        "title": "Master's degree, Artificial Inteligence",
        "logoUrl": "https://i.ibb.co/tzZ6xt3/download-removebg-preview-auto-x1-colored-illustration-x4-colored.png",
        "institution": "Faculty of Automatic Control and Computers"
      },
      {
        "title": "Bachelor's degree, Systems Engineering",
        "logoUrl": "https://i.ibb.co/tzZ6xt3/download-removebg-preview-auto-x1-colored-illustration-x4-colored.png",
        "institution": "Faculty of Automatic Control and Computers"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
