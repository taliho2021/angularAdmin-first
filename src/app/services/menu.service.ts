import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SideBarMenuItem } from '../layouts/sidebar/sidebar.menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuitems() : Observable<SideBarMenuItem[]> {
    return this.http.get<SideBarMenuItem[]>('../../assets/data/menuItem.json')
  }
}
