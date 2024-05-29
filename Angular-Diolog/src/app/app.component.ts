import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Diolog';
// constructor(private matDialog : MatDialog){}
//   openbox(){
//     this.matDialog.open(DialogBodyComponent,{


//       width:'500px'
//     })


constructor(public dialog: MatDialog) {}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(DialogBodyComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}
  }
