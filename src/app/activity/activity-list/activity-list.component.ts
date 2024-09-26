import { Component, Input } from '@angular/core';
import { Activity } from '../../activity.interface';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent {

  @Input() activity?: Activity
}
