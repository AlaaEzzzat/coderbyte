import { ItemsService } from "./../../services/items.service";
import { Item } from "./../../models/item";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  data: Item[] = [];
  constructor(private itemService: ItemsService) {}
  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((itemList) => {
      if (!itemList) return;
      console.log(itemList);
      this.data = itemList;
      console.log(this.data);
    });
  }

  track(index: number, item: Item) {
    return item.id;
  }
}
