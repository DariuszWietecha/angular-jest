import { Component, Input, HostBinding } from '@angular/core';
import { ICompany } from '../../../services/companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent {
  @HostBinding('class') className = 'card col-4';
  @Input() company: ICompany;
  @Input() showEditButton = true;
  constructor() { }
}
