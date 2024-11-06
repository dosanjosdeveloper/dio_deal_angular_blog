import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/601150/capsule_616x353.jpg?t=1701395090"
  contentTitle:string="Devil MyCry 5"
  contentDescription:string="Devil MyCry é legal!"

  constructor( private router:ActivatedRoute){}

  ngOnInit(): void {
      this.router.paramMap.subscribe( value =>
        console.log(value.get("Id"))
      )
  }
}
