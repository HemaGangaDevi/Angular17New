import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-client-dialog-form',
  standalone: true,
  imports: [ MatDialogModule ,MatFormFieldModule ,MatSelectModule ],
  templateUrl: './client-dialog-form.component.html',
  styleUrl: './client-dialog-form.component.css'
})
export class ClientDialogFormComponent {
  [x: string]: any;
  getFloatLabelValue(): FloatLabelType {
    return this['floatLabelControl'].value || 'auto';
  }
 
}

