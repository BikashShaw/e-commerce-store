import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
 
})
export class ProductsHeaderComponent implements OnInit {
@Output() columnsCountChange = new EventEmitter<number>();
@Output() itemCountChange = new EventEmitter<number>();
@Output() sortChange = new EventEmitter<String>();
sort = 'desc';
itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string ): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(newItemsCount: number): void {
    this.itemsShowCount = newItemsCount;
    this.itemCountChange.emit(newItemsCount);
  }

  onColumnsUpdated(collNum: number): void {
    this.columnsCountChange.emit(collNum);
  }
}
