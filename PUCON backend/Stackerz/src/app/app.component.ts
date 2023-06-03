import { Component, OnInit } from '@angular/core';
// import { FontSizeService } from './font-size.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Al_Quran';

  fontSize:any

  constructor(
    // private fontSizeService: FontSizeService,
    public loadingService: LoadingService
    ) { }

  ngOnInit() {
  }
}
