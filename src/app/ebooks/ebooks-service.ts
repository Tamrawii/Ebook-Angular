import { Injectable } from '@angular/core';
import { IEbooks } from './iebooks';

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

  getEbooks(): IEbooks[] {
    return [...this.ebooks]; // search about it
  }

  // addEbooks...
}
