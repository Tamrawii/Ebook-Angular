import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ebooks-add',
  standalone: false,
  templateUrl: './ebooks-add.html',
  styleUrl: './ebooks-add.css',
})
export class EbooksAdd {
  hidden: boolean = false;
  
  addEbook(f: NgForm) {
    console.log(f);
  }
}
