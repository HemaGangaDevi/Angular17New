import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatRadioModule,FormsModule, MatSlideToggleModule,MatInputModule,MatFormFieldModule,MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

  title = 'user';
  isChecked = true;
  

  // ------------------------------------
  favoriteTeam: string='';
  IPLTeam: string[] = ['CSK', 'RCB', 'SRH', 'KKR','GT','MI','DC','RR'];


  // ----------------------------------

}