import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/models/news.model';
import { AuthenService} from '../../services/authen.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  news$: Observable<News> = this.newsService.get();
  public runW: News[]=[];
  
  constructor(private newsService: NewsService, public authService: AuthenService){  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.newsService.get().subscribe((data:any) =>{
      this.runW = data;
    })
  }
}
