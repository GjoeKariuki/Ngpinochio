import { Component, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatListModule,MatMenuModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() sidenavclose = new EventEmitter
  onSidenavClose(){
    this.sidenavclose.emit()
  }
}
