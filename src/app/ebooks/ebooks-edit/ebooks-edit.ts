import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEbooks } from '../iebooks';
import { EbooksService } from '../ebooks-service';

@Component({
  selector: 'app-ebooks-edit',
  standalone: false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css',
})
export class EbooksEdit {
  ebook: IEbooks = {
    id: 0,
    title: '',
    author: '',
    price: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EbooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    const currentEbook = this.service.getEBookById(+id!);
    if (currentEbook != undefined) this.ebook = currentEbook;
  }

  editEbook() {
    this.service.editBook(this.ebook);
    this.router.navigate(['/ebooks']);
  }
}
