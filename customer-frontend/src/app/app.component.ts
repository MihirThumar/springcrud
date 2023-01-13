import { Component, InjectionToken, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular + Springboot';

  constructor(private  render: Renderer2) { }
  ngOnInit(): void {
  }

}

