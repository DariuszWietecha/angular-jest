import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IStore, selectHomeData } from '../../reducers';
import { loadHomeData } from '../../actions/views.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeData$: Observable<IStore> = this.store.select(selectHomeData);
  routeSub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private store: Store<IStore>
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.store.dispatch(loadHomeData({ categoryId: params.get('categoryId') }));
    });
  }

  ngOnDestroy() { this.routeSub.unsubscribe(); }
}
