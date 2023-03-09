import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FdaProductDataSource, FdaProductItem } from './fda-product-datasource';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-fda-product',
    templateUrl: './fda-product.component.html',
    styleUrls: ['./fda-product.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class FdaProductComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FdaProductItem>;
  dataSource: FdaProductDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new FdaProductDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
