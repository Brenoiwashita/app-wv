import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updates',
  imports: [CommonModule],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss',
  standalone: true
})
export class UpdatesComponent {
  public dueItems =[
    {
      id: 1,
      name: 'Vacina Antirrábica',
      dueInDays: 5
    }
  ]

  getPillClass(days: number): string {
    if (days <= 3) return 'due-pill--danger';
    if (days <= 7) return 'due-pill--warn';
    return 'due-pill--ok';
  }
}
