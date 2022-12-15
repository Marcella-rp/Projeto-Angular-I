import { Component, Input } from '@angular/core';
import { Footer } from 'src/models/footer.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() public dataFooter!: Footer;

  public footer = {
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
  };
}
