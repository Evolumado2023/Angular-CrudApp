import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFormUserComponent } from './default-form-user.component';

describe('DefaultFormUserComponent', () => {
  let component: DefaultFormUserComponent;
  let fixture: ComponentFixture<DefaultFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultFormUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
