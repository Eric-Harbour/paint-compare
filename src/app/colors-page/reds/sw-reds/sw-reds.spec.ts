import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwReds } from './sw-reds';

describe('SwReds', () => {
  let component: SwReds;
  let fixture: ComponentFixture<SwReds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwReds],
    }).compileComponents();

    fixture = TestBed.createComponent(SwReds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
