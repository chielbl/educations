import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Education } from "../_types/Education";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EducationService {
  private apiUrl = environment.API_URL;

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
  
  delete(id: Education["id"]): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
