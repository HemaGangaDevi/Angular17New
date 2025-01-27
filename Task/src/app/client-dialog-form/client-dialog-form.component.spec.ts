import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDialogFormComponent } from './client-dialog-form.component';

describe('ClientDialogFormComponent', () => {
  let component: ClientDialogFormComponent;
  let fixture: ComponentFixture<ClientDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDialogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
