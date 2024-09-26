import { Component, inject } from '@angular/core';
import { Activity } from '../../activity.interface';
import { BoredService } from '../../bored.service';

@Component({
  selector: 'app-bored',
  standalone: true,
  imports: [],
  templateUrl: './bored.component.html',
  styleUrl: './bored.component.css'
})
export class BoredComponent {

  activity?: Activity;
  selectedType: string | null = null;

  private boredService = inject(BoredService);

  onFilterChange(type: string | null) {
    this.selectedType = type;
  }

  generateActivity() {
    if(this.selectedType) {
      this.boredService.getFilteredActivities(this.selectedType).subscribe(data => {
        console.log(data);
        this.activity = data;
        this.selectedType = null;
      });
    } else {
      this.boredService.getRandomActivity().subscribe(data => {
        console.log(data);
        this.activity = data;
        this.selectedType = null;
      });
    }
  }

}
