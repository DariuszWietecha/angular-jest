import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ViewsService } from './views.service';

describe('ViewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [ViewsService],
  }));

  it('should be created', () => {
    const service: ViewsService = TestBed.get(ViewsService);
    expect(service).toBeTruthy();
  });
});
