import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';




@Component({
  selector: 'app-home-page',
  imports: [MatToolbar, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
