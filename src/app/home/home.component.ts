import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HomeService
  ]
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit() {
    /*
    this.service.getMessage().subscribe(response => {
      this.content = response;
    });
    */
    
    this.service.allEvents().subscribe(response => {
      console.log(response);
      this.allEvents = response;
    });
  }

  private content: string;

  public allEvents: any;

  public test(): void {
    console.log('test()');
    this.service.test();
  }
}
