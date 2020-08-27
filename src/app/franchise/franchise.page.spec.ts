import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FranchisePage } from './franchise.page';

describe('FranchisePage', () => {
  let component: FranchisePage;
  let fixture: ComponentFixture<FranchisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FranchisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
