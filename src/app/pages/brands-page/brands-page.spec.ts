import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsPage } from './brands-page.component';

describe('BrandsPage', () => {
  let component: BrandsPage;
  let fixture: ComponentFixture<BrandsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
