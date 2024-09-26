import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './filter-buttons.component.html',
  styleUrl: './filter-buttons.component.css'
})
export class FilterButtonsComponent {

  @Output() filterChange = new EventEmitter<string | null>();

  currentFilter: string | null = null;

  setFilter(type: string | null) {
    this.currentFilter = type;
    this.filterChange.emit(type);
  }

}
