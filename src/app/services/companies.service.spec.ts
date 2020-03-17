import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesService } from './companies.service';

describe('CompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [CompaniesService],
  }));

  it('should be created', () => {
    const service: CompaniesService = TestBed.get(CompaniesService);
    expect(service).toBeTruthy();
  });
});
