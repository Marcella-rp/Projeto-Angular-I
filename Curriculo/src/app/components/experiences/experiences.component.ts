import { Component, Input } from '@angular/core';
import { Experiences } from 'src/models/experiences.models';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  @Input() public experiences!: Experiences[];
}
