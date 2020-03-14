import { Component, OnInit } from '@angular/core';
import { CompaniesService, ICompany } from '../../../services/companies.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  @Input() companies: ICompany[];
  @Input() hideCreate;
  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    if (typeof this.companies === 'undefined') {
      this.companiesService.list()
        .subscribe((data) => {
          this.companies = data;
        });
    }
  }

}
