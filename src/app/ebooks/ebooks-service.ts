import { Injectable } from '@angular/core';
import { IEbooks } from './iebooks';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbooksService {
  private ebooks: IEbooks[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 30,
    },

    {
      id: 2,
      title: 'The slight edge',
      author: 'Jeff Olsen',
      price: 25,
    },
  ];

  ebooksChanged = new Subject<IEbooks[]>();

  getEbooks(): IEbooks[] {
    return [...this.ebooks]; // search about it
  }

  getEBookById(id: number): IEbooks | undefined {
    return this.ebooks.find((ebook) => ebook.id === id);
  }

  getLastId(): number {
    return this.ebooks[this.ebooks.length - 1].id;
  }

  addEbook(ebook: IEbooks) {
    this.ebooks = [...this.ebooks, ebook];
  }

  editBook(ebook: IEbooks) {
    this.ebooks = this.ebooks.map((e) => (e.id === ebook.id ? ebook : e));
  }

  deleteEbook(id: number) {
    if (confirm('Etes-vous sûre de vouloir supprimer le livre?')) {
      this.ebooks = this.ebooks.filter((ebook) => ebook.id !== id);

      console.log(this.ebooks);
      this.ebooksChanged.next([...this.ebooks]);
    }
  }
}
