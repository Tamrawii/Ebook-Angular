import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EbooksService } from '../ebooks-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-add',
  standalone: false,
  templateUrl: './ebooks-add.html',
  styleUrl: './ebooks-add.css',
})
export class EbooksAdd {
  constructor(private ebookService: EbooksService, private router: Router) {}

  addEbook(f: NgForm) {
    // console.log(f);
    const newEbook = {
      id: this.ebookService.getLastId() + 1,
      title: f.value.title,
      author: f.value.author,
      price: +f.value.price,
    };

    this.ebookService.addEbook(newEbook);

    this.router.navigate(['/ebooks']);
  }
}
