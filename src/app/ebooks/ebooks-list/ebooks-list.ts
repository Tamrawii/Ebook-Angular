import { Component, OnInit } from '@angular/core';
import { EbooksService } from '../ebooks-service';
import { IEbooks } from '../iebooks';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css',
})
export class EbooksList implements OnInit {
  ebooks: IEbooks[] = [];
  constructor(private ebookService: EbooksService) {}
  // Methode 2: private ebooks = inejct(EbookService);

  ngOnInit(): void {
    this.ebooks = this.ebookService.getEbooks();
  }
}
