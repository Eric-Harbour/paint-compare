import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorsPage } from './colors-page.component';

describe('ColorsPage', () => {
  let component: ColorsPage;
  let fixture: ComponentFixture<ColorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
