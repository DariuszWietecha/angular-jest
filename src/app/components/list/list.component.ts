import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() createEndpoint = '';
  @Input() items: any[];
  @Input() showCreateButton = true;
  @Input() title: string;
  @ContentChild(TemplateRef, {static: true}) templateVariable: TemplateRef<any>;

}
