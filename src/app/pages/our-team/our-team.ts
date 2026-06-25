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
      postion:'',
      image: 'assets/images/jigeesh-sir.png',
      description: `
      He has extensive experience in academic leadership and management,
      particularly within the higher education sector. Has more than 35 years
      of experience in both industry and academia in Information Technology,
      Project Management, Administration, Teaching and Research.
      His research covers IT, Cloud Computing, Project Management,
      Operations Management, Knowledge Management and HR Management.
      Has publications in both national and international
journals on the subjects of Physics, IT and Management Science. Presented papers
in many national conferences at IITs, IIMs and other reputed institutes and also at
International platforms in USA and Singapore. Supervised several doctoral candidates for their Ph.Ds

      `
    },

    {
      designation: 'Dy. Chief, RPTM',
      name: 'Gp. Capt. N. Siva Prasad (Rtd)',
      qualification:
        'B.E. (Electrical Engineering), M.E. (Guided Missile Technology) & PGDBM',
        postion:'',
      image: 'assets/images/siva-prasad.png',
      description: `
      Commissioned in 1979, Gp. Capt. Siva Prasad (Rtd.) has more than
      25 years of experience in the Defense sector and 20 years in
      Corporate and Academic Institutions. He has held instructional,
      managerial and strategic leadership roles and specializes in
      Information Technology, Operations, Quality and Project Management.
       He is experienced in planning, controlling and executing projects
     related to Mobile Communication and Infrastructure Services and Knowledge
     Management projects. 
      `
    },

    {
      designation: 'Dy. Registrar, Coordination',
      name: 'B. Sravana Kumar',
      qualification:
        'M.B.A & M.Phil.  (Development Economics)',
        postion:'',
      image: 'assets/images/sravana-kumar.png',
      description: `
      Associated with Icfai since 2003 and the university since 2010. Developed cases at
      Case Research Center, IBS Hyderabad and later was with accreditations department
      since 2012. Liaised with the department to prepare institutional statutory reports,
      collect and compile data for NIRF and other ranking and rating agencies. Coordinated
      report preparation and data aggregation for MHRD, UGC and NAAC. 

      `
    },

    {
      designation: 'Counselling Division',
      name: 'Dr. Shyamala Reuben',
      qualification:
        `Ph.D. (Sociology) &  M.Sc. (Psychology)  `,
        position:' Assistant Professor',
      image: 'assets/images/shyamala.png',
      description: `
      Dr. Shyamala Reuben is an academician, psychologist, researcher, and leadership
trainer with over 20 years of experience in higher education, human resource development,
organizational behaviour, counselling, and talent management.   As a faculty member, researcher, and leadership facilitator, Dr. Reuben integrates
psychology, organizational development, and human values to develop resilient individuals, effective teams, and leaders.
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
      image: 'assets/images/dev6.png'
    },
    {
      name: 'Mr. S. Sriharivas',
      role: 'Web Developer',
      image: 'assets/images/dev3.png'
    }
  ];

}


//Her educational qualifications include Ph.D. in Sociology and M.Sc. in Psychology.
