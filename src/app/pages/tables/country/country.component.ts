import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Country, CountryDataSource } from './country-datasource';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatSortModule, MatPaginatorModule]
})
export class CountryComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Country>;
  dataSource: CountryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'flag', 'area', 'population'];

  constructor() {
    this.dataSource = new CountryDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
