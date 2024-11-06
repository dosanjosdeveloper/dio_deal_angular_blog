import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCover:string="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiedpuLT34Xi_ngbI3Mm64pNIahrPSSAH8S-3xPRUsHZ6Z7PVbTagpm7wjr9TUjHRqP8eBd4SBluXeg4coCHiMJPGyINtCarGQ4pLUwKOGFyPn82ROHy30ZBg7VyLjnukw0UxqCqM25-ankgzokQv0AeM7TKSsd6Anu6_IwO7HlJvEdxyGd1Q/s540/PROJECTS.jpg"
  @Input()
  cardTitle:string = "Figuras da Marvel"
  @Input()
  Id:string="0"
  
  constructor(){}
  ngOnInit(): void {
      
  }

}
