import { AddCvdDataSource, AddCvdItem } from './add-cvd-datasource';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';

@Component({
  selector: 'app-add-cvd',
  templateUrl: './add-cvd.component.html',
  styleUrls: ['./add-cvd.component.scss'],
})
export class AddCvdComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AddCvdItem>;
  dataSource: AddCvdDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new AddCvdDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
