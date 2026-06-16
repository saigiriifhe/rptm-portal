// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { AboutRptmComponent } from './pages/about-rptm/about-rptm.component';
// import { OurTeamComponent } from './pages/our-team/our-team.component';
// import { FacultyRecruitmentComponent } from './pages/faculty-recruitment/faculty-recruitment.component';
// import { AcademicInfrastructureComponent } from './pages/academic-infrastructure/academic-infrastructure.component';
// import { EnableDigitalizationComponent } from './pages/enable-digitalization/enable-digitalization.component';
// import { TrainingDevelopmentComponent } from './pages/training-development/training-development.component';

import { Home } from './pages/home/home';
import { AboutRptm } from './pages/about-rptm/about-rptm';
import { OurTeam } from './pages/our-team/our-team';
import { FacultyRecruitment } from './pages/faculty-recruitment/faculty-recruitment';
import { AcademicInfrastructure } from './pages/academic-infrastructure/academic-infrastructure';
import { EnableDigitalization } from './pages/enable-digitalization/enable-digitalization';
import { TrainingDevelopment } from './pages/training-development/training-development';
import { Fiop1 } from './pages/fiop1/fiop1';
import { Fiop2 } from './pages/fiop2/fiop2';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about-rptm',
    component: AboutRptm
  },
  {
    path: 'our-team',
    component: OurTeam
  },
  {
    path: 'faculty-recruitment',
    component: FacultyRecruitment
  },
  {
    path: 'academic-infrastructure',
    component: AcademicInfrastructure
  },
  {
    path: 'enable-digitalization',
    component: EnableDigitalization
  },
  {
    path: 'training-development',
    component: TrainingDevelopment
  },
  {
  path: 'training-development/fiop-1',
  component: Fiop1
},
{
  path: 'training-development/fiop-2',
  component: Fiop2
}

];
