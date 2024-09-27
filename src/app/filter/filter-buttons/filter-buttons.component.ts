import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-buttons.component.html',
  styleUrl: './filter-buttons.component.css'
})
export class FilterButtonsComponent implements OnChanges{

  @Output() filterChange = new EventEmitter<string | null>();
  @Input() resetFilter: boolean = false;

  currentFilter: string | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resetFilter'] && this.resetFilter) {
      this.reset();  // Chiama il metodo di reset
    }
  }

  setFilter(type: string | null) {
    this.currentFilter = type;
    this.filterChange.emit(type);
  }

  reset() {
    this.currentFilter = null;  // Resetta lo stato del filtro
    this.filterChange.emit(null);  // Notifica il componente principale che il filtro è stato resettato
  }

}
