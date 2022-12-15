import { BasicInfo } from './../../../models/basic-info.models';
import { Component, Input } from '@angular/core';
import { KnowledgeSectionData } from 'src/models/knowledge-section-data.models';
import { DataApp } from 'src/models/data-app.models';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css'],
})
export class InfoGeneralComponent {
  public basicInfo!: BasicInfo;
  public skills!: KnowledgeSectionData;
  public languages!: KnowledgeSectionData;

  title = 'Curriculo';

  public data: DataApp = {
    basicInfo: {
      name: 'Jane Doe',
      profileImg: '../assets/images/img_perfil.png',
      office: 'Designer',
      city: 'London, UK',
      email: 'ex@mail.com',
      phoneNumber: '12244355534',
    },
    skilss: {
      title: 'Skills',
      knowledge: [
        {
          name: 'Adobe Photoshop',
          level: '90%',
          numberLevel: 90,
        },
        {
          name: 'Photography',
          level: '80%',
          numberLevel: 80,
        },
        {
          name: 'Illustrator',
          level: '75%',
          numberLevel: 75,
        },
        {
          name: 'Media',
          level: '50%',
          numberLevel: 50,
        },
      ],
    },
    languages: {
      title: 'Languages',
      knowledge: [
        {
          name: 'English',
          numberLevel: 100,
        },
        {
          name: 'Spanish',
          numberLevel: 55,
        },
        {
          name: 'German',
          numberLevel: 25,
        },
      ],
    },
    experience: [
      {
        titleSection: {
          name: 'Work Experience',
          icon: 'work',
        },
        experiences: [
          {
            title: 'Front End Developer / w3schools.com',
            timeStart: 'Jan 2015',
            timeEnd: 'Current',
            description:
              'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
          },
          {
            title: 'Web Developer / something.com',
            timeStart: 'Mar 2012',
            timeEnd: 'Dec 2014',
            description:
              'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
          },
          {
            title: 'Graphic Designer / designsomething.com',
            timeStart: 'Jun 2010',
            timeEnd: 'Mar 2012',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
      {
        titleSection: {
          name: 'Education',
          icon: 'stars',
        },
        experiences: [
          {
            title: 'W3Schools.com',
            timeStart: 'Forever',
            timeEnd: 'Forever',
            description: 'Web Development! All I need to know in one place',
          },
          {
            title: 'London Business School',
            timeStart: '2013',
            timeEnd: '2015',
            description: 'Master Degree',
          },
          {
            title: 'School of Coding',
            timeStart: '2010',
            timeEnd: '2013',
            description: 'Bachelor Degree',
          },
        ],
      },
    ],
    footer: {
      info: 'Find me on social media.',
      //to fix: define format icons and source
      socialMedia: [
        {
          icon: 'facebook',
          link: '',
        },
        {
          icon: 'snapchat',
          link: '',
        },
        {
          icon: 'snapchat',
          link: '',
        },
        {
          icon: 'facebook',
          link: '',
        },
        {
          icon: 'snapchat',
          link: '',
        },
        {
          icon: 'facebook',
          link: '',
        },
      ],
      developed: {
        text: 'Powered by',
        textLink: 'w3.css',
        link: 'https://www.w3schools.com/w3css/default.asp',
      },
    },
  };
}
