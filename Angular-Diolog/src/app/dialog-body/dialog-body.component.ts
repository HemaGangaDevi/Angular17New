import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";


@Component({
  selector: 'app-dialog-body',
  standalone: true,
  imports: [ MatDialogModule],
  templateUrl: './dialog-body.component.html',
  styleUrl: './dialog-body.component.css'
})
export class DialogBodyComponent {

}
