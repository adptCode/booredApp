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

  activity?: Activity;
  selectedType: string | null = null;

  private boredService = inject(BoredService);

  onFilterChange(type: string | null) {
    this.selectedType = type;
  }

  generateActivity() {
    console.log(this.selectedType)
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
