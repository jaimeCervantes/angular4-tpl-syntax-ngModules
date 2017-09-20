import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTemplateSyntaxComponent } from './fund-template-syntax.component';

describe('FundTemplateSyntaxComponent', () => {
  let component: FundTemplateSyntaxComponent;
  let fixture: ComponentFixture<FundTemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
