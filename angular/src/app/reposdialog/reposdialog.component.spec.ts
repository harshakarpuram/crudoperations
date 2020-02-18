import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposdialogComponent } from './reposdialog.component';

describe('ReposdialogComponent', () => {
  let component: ReposdialogComponent;
  let fixture: ComponentFixture<ReposdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
