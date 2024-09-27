import { Component, inject } from '@angular/core';
import { Activity } from '../../activity.interface';
import { BoredService } from '../../bored.service';
import { FilterButtonsComponent } from "../../filter/filter-buttons/filter-buttons.component";
import { ActivityListComponent } from "../../activity/activity-list/activity-list.component";

@Component({
  selector: 'app-bored',
  standalone: true,
  imports: [FilterButtonsComponent, ActivityListComponent],
  templateUrl: './bored.component.html',
  styleUrl: './bored.component.css'
})
export class BoredComponent {

  activity?: Partial<Activity>;
  selectedType: string | null = null;
  resetFilter: boolean = false;

  private boredService = inject(BoredService);

  onFilterChange(type: string | null) {
    this.selectedType = type;
  }

  generateActivity() {
    console.log(this.selectedType)
    if(this.selectedType) {
      this.boredService.getFilteredActivities(this.selectedType).subscribe({
        next: (data) => {
          console.log(data);
          this.activity = data;
          this.resetFilters();
        },
        error: (err) => {
          if (err.message === 'Too Many Requests') {
            this.activity = { activity: 'Too Many Requests, please try again later.' };  // Messaggio di errore
          }
        }

      });
    } else {
      this.boredService.getRandomActivity().subscribe({
        next: (data) => {
          this.activity = data;
          this.resetFilters();
        },
        error: (err) => {
          if (err.message === 'Too Many Requests') {
            this.activity = { activity: 'Too Many Requests, please try again later.' };
          }
        }
      });
    }
  }

  resetFilters() {
    this.selectedType = null;
    this.resetFilter = true;
    
  }

}
