// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.html',
//   styleUrl: './header.scss',
// })
// export class Header {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  menus = [
    {
      title: 'About RPTM',
      route: '/about-rptm'
    },
    {
      title: 'Our Team',
      route: '/our-team'
    },
    {
      title: 'Faculty Recruitment',
      route: '/faculty-recruitment'
    },
    {
      title: 'Academic Infrastructure',
      route: '/academic-infrastructure'
    },
    {
      title: 'IT Infrastructure',
      route: '/enable-digitalization'
    },
    {
      title: 'Training & Development',
      route: '/training-development'
    }
  ];

}
