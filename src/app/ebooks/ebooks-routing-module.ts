import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbooksList } from './ebooks-list/ebooks-list';
import { EbooksAdd } from './ebooks-add/ebooks-add';
import { EbooksEdit } from './ebooks-edit/ebooks-edit';

const routes: Routes = [
  { path: '', component: EbooksList },
  { path: 'add', component: EbooksAdd },
  { path: 'edit/:id', component: EbooksEdit }, // the id will be shown in the url (https://www.ebooks.edit/1)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbooksRoutingModule {}
