import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbooksRoutingModule } from './ebooks-routing-module';
import { EbooksList } from './ebooks-list/ebooks-list';
import { EbooksEdit } from './ebooks-edit/ebooks-edit';
import { EbooksAdd } from './ebooks-add/ebooks-add';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EbooksList, EbooksEdit, EbooksAdd],
  imports: [CommonModule, EbooksRoutingModule, FormsModule],
})
export class EbooksModule {
}
