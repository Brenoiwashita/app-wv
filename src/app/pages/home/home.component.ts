import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { UpdatesComponent } from './components/updates/updates.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenuCardComponent, UpdatesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
