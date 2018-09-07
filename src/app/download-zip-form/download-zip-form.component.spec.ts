import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadZipFormComponent } from './download-zip-form.component';

describe('DownloadZipFormComponent', () => {
  let component: DownloadZipFormComponent;
  let fixture: ComponentFixture<DownloadZipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadZipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadZipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
