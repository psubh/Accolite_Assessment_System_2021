import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>("/api/courses");
  }

  create(project: Project) {
    return this.httpClient.post("/api/course", project);
  }

  update(project: Project) {
    return this.httpClient.put(`/api/course/${project.id}`, project);
  }

  delete(project: Project) {
    return this.httpClient.delete(`/api/course/${project.id}`);
  }
}
