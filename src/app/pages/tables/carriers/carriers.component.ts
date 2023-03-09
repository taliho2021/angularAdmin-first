import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CarriersDataSource, CarriersItem } from './carriers-datasource';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-carriers',
    templateUrl: './carriers.component.html',
    styleUrls: ['./carriers.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class CarriersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CarriersItem>;
  dataSource: CarriersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new CarriersDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
