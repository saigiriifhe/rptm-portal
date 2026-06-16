import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface RptmMenu {
  title: string;
  image: string;
  route: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  rptmMenus: RptmMenu[] = [
    {
      title: 'About RPTM',
      image: 'assets/images/about.jpg',
      route: '/about-rptm',
      description: 'Know more about Resources Planning & Talent Management.'
    },
    {
      title: 'Our Team',
      image: 'assets/images/team.jpg',
      route: '/our-team',
      description: 'Meet our dedicated team members.'
    },
    {
      title: 'Faculty Recruitment',
      image: 'assets/images/faculty.jpg',
      route: '/faculty-recruitment',
      description: 'Faculty planning, recruitment and development.'
    },
    {
      title: 'Academic Infrastructure',
      image: 'assets/images/infrastructure.jpg',
      route: '/academic-infrastructure',
      description: 'Infrastructure, Labs, Workshops and Library planning.'
    },
    {
      title: 'Enable Digitalization',
      image: 'assets/images/digital.jpg',
      route: '/enable-digitalization',
      description: 'Digitization initiatives across the University.'
    },
    {
      title: 'Training & Development',
      image: 'assets/images/training.jpg',
      route: '/training-development',
      description: 'Training programs and faculty development activities.'
    }
  ];

}