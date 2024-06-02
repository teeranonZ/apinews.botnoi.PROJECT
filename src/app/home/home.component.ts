import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsapiService } from '../newsapi.service';
import { Observable } from 'rxjs';
import { NewsArticle } from '../news-article.model';
import { NewsStorageService } from '../news-storage.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  category: string | null = null;
  newsDisplay: NewsArticle[] = [];
  totalResults = 0;
  private previousNews: NewsArticle[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsapiService: NewsapiService,
    private newsStorageService: NewsStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.fetchNews();
    });
  }

  fetchNews(): void {
    let newsObservable: Observable<NewsArticle[]>;

    if (this.category) {
      newsObservable = this.newsapiService.getNewsByCategory(this.category);
    } else {
      newsObservable = this.newsapiService.getTopHeadlines();
    }

    newsObservable.subscribe(
      data => {
        if (data && data.length > 0) {
          this.newsDisplay = data.map((item: any) => ({
            source: {
              id: item.source.id,
              name: item.source.name
            },
            author: item.author,
            title: item.title,
            description: item.description,
            url: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt,
            content: item.content
          }));
          this.previousNews = this.newsDisplay;
        } else {
          this.newsDisplay = this.previousNews;
        }
        this.totalResults = this.newsDisplay.length;
      },
      
      error => {
        this.newsDisplay = this.previousNews;
        this.totalResults = this.newsDisplay.length;
        this.newsStorageService.setMockNews(); // ใช้ mock news ในกรณีที่ไม่สามารถโหลดข้อมูลจาก API ได้
        const mockNews = this.newsStorageService.getNews();
        this.newsDisplay = mockNews; // ใช้ข้อมูล mock แสดงผลแทน
        this.totalResults = this.newsDisplay.length;
      }
    );
  }

  onTagSelected(tag: string): void {
    this.category = tag;
    this.fetchNews();
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}