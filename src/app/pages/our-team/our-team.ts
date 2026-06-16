import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './our-team.html',
  styleUrl: './our-team.scss',
})
export class OurTeam {
   teamMembers = [
    {
      designation: 'Chief, RPTM',
      name: 'Prof. (Dr.) Jigeesh Nasina',
      qualification: 'Ph.D. (Management Science) & Ph.D. (Physics)',
      image: 'assets/images/jigeesh-sir.png',
      description: `
      He has extensive experience in academic leadership and management,
      particularly within the higher education sector. Has more than 35 years
      of experience in both industry and academia in Information Technology,
      Project Management, Administration, Teaching and Research.
      His research covers IT, Cloud Computing, Project Management,
      Operations Management, Knowledge Management and HR Management.
      `
    },

    {
      designation: 'Dy. Chief, RPTM',
      name: 'Gp. Capt. N. Siva Prasad (Rtd)',
      qualification:
        'B.E. (Electrical Engineering), M.E. (Guided Missile Technology), PGDBM',
      image: 'assets/images/siva-prasad.png',
      description: `
      Commissioned in 1979, Gp. Capt. Siva Prasad (Rtd.) has more than
      25 years of experience in the Defense sector and 20 years in
      Corporate and Academic Institutions. He has held instructional,
      managerial and strategic leadership roles and specializes in
      Information Technology, Operations, Quality and Project Management.
      `
    },

    {
      designation: 'Dy. Registrar, Coordination',
      name: 'B. Sravana Kumar',
      qualification:
        'MBA & M.Phil. in Development Economics',
      image: 'assets/images/sravana-kumar.png',
      description: `
      Associated with ICFAI since 2003 and the University since 2010.
      He worked with Case Research Center, IBS Hyderabad and later
      with Accreditation Departments. Coordinated institutional reports,
      NIRF, NAAC, UGC and MHRD submissions and data aggregation activities.
      `
    },

    {
      designation: 'Counselling Division',
      name: 'Dr. Shyamala Reuben',
      qualification:
        'Professor, Psychologist & Leadership Trainer',
      image: 'assets/images/shyamala.png',
      description: `
      Dr. Shyamala Rouben has over 20 years of experience in higher education,
      human capital development and organizational behaviour. Her expertise
      includes counselling, talent development, mentoring, behavioural sciences,
      leadership capacity building and employee wellbeing.
      `
    }
  ];

  developers = [
    {
      name: 'Mr. D. Sai Sampath Kumar',
      role: 'Web Developer',
      image: 'assets/images/dev1.jpg'
    },
    {
      name: 'Mr. P. Saigiri',
      role: 'Web Developer',
      image: 'assets/images/dev2.png'
    },
    {
      name: 'Mr. S. Sriharivas',
      role: 'Web Developer',
      image: 'assets/images/dev3.jpg'
    }
  ];

}
