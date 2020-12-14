import { Injectable } from "@angular/core";
import { Comments } from "./comments";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  Url = "https://jsonplaceholder.typicode.com/comments"; // URL to web api
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comments[]> {
    return this.http
      .get<Comments[]>(this.Url)
      .pipe(catchError(this.handleError("getHeroes", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
