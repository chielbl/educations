import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Education } from "../_types/Education";

@Injectable({
  providedIn: "root",
})
export class EducationService {
  private apiUrl =
    "https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl);
  }

  get(id: Education["id"]): Observable<Education> {
    return this.http.get<Education>(`${this.apiUrl}/${id}`);
  }

  create(body: Education): Observable<Education> {
    return this.http.post<Education>(this.apiUrl, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  update(body: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/${body.id}`, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
