import { Component, OnInit } from '@angular/core';
import { EbooksService } from '../ebooks-service';
import { IEbooks } from '../iebooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css',
})
export class EbooksList implements OnInit {
  [x: string]: any;
  ebooks: IEbooks[] = [];
  constructor(private ebookService: EbooksService, private router: Router) {}
  // Methode 2: private ebooks = inejct(EbookService);

  deleteEbook(id: number) {
    this.ebookService.deleteEbook(id);
    this.router.navigate(['/ebooks']);
  }
  ngOnInit(): void {
    this.ebooks = this.ebookService.getEbooks();
    this.ebookService.ebooksChanged.subscribe((ebooks) => (this.ebooks = ebooks));
  }
}
