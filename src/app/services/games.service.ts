import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private http: HttpClient
  private apiKey: string

  constructor(http: HttpClient) {
    this.http = http
    this.apiKey ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTk5MDE1MDIyZDEyNWMyNGU1MWFhYTA2OTQwMmRiYiIsIm5iZiI6MTczNjg4NTUwNy45ODQsInN1YiI6IjY3ODZjNTAzOGMyMzA5Y2VhZmJiODllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kaESCOeTcsKPIEqZ9OUvetLKpd2GLXx37Jhifz2QQQg'
  }

  listarJogos() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey,
      },
    });
  }
}