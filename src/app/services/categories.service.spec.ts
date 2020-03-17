import { CategoriesService } from './categories.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [CategoriesService],
  }));

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });
});
