import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delayWhen, map, throwError, timer  } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { NewsApiResponse, NewsArticle } from './news-article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  private apiKey = '0c1f2524ce8b4e239605f02f4f6991ed';
  private baseUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=';

  constructor(private _http: HttpClient) {}

  private handleErrors(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private retryStrategy(maxRetry: number = 3, delayMs: number = 1000) {
    let retries = 0;
    return (errors: Observable<any>) => errors.pipe(
      delayWhen(() => timer(delayMs)),
      map(error => {
        if (++retries === maxRetry) {
          throw error;
        }
        return error;
      })
    );
  }

  // ฟังก์ชันสำหรับแปลงข้อมูลบทความข่าว
  private convertArticle(article: any): NewsArticle {
    return {
      ...article,
      publishedAt: new Date(article.publishedAt).toLocaleDateString(), // แปลงวันที่
      source: article.source.name // ดึงชื่อแหล่งที่มา
    };
  }

  getTopHeadlines(): Observable<NewsArticle[]> {
    return this._http.get<NewsApiResponse>(`${this.baseUrl}${this.apiKey}`).pipe(
      map(response => response.articles.map(this.convertArticle)), // แปลงข้อมูลบทความข่าว
      catchError(this.handleErrors),
      this.retryStrategy()
    );
  }

  getNewsByCategory(category: string): Observable<NewsArticle[]> {
    const apiUrl = `${this.baseUrl}${this.apiKey}&category=${category}`;
    return this._http.get<NewsApiResponse>(apiUrl).pipe(
      map(response => response.articles.map(this.convertArticle)), // แปลงข้อมูลบทความข่าว
      catchError(this.handleErrors),
      this.retryStrategy()
    );
  }
}