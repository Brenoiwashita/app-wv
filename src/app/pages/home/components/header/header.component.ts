import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy {
  public name = '';

  private readonly onDogChanged = () => {
    // Run inside Angular zone so change detection runs
    this.zone.run(() => {
      this.name = (window as any).dog ?? '';
      this.cdr.markForCheck();
    });
  };

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit(): void {
    // Initial value
    this.name = (window as any).dog ?? '';

    // Listen to an event that you can dispatch whenever window.dog changes
    window.addEventListener('dog-changed', this.onDogChanged);
  }

  ngOnDestroy(): void {
    window.removeEventListener('dog-changed', this.onDogChanged);
  }
}
