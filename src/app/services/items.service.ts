import { HttpClient } from "@angular/common/http";
import { Item } from "./../models/item";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor(private httpClient: HttpClient) {}
  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(
      "https://fakestoreapi.com/products?limit=10"
    );
  }
}
