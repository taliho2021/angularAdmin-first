import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FirmsDataSource, FirmsItem } from './firms-datasource';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-firms',
    templateUrl: './firms.component.html',
    styleUrls: ['./firms.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class FirmsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FirmsItem>;
  dataSource: FirmsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new FirmsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
