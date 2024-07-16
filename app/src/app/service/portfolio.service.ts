import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioDescription } from '@app/interface/portfolioDescription';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  /**
   * @returns Portfolio Description
   */
  getDescription(){
    return this.http
    .get<PortfolioDescription>(
      "https://portfolio-abdallah-saoud-680b87858be7.herokuapp.com/api/portfolio-descriptions"
    )
  }

  /**
   * @returns Portfolio Projetc
   */
  getProjects(){
    return this.http
    .get(
      "https://portfolio-abdallah-saoud-680b87858be7.herokuapp.com/api/projects"
    )
  }

  /**
   * @param projectId Id of requested project
   * @returns Single project
   */
  getProjectsById(projectId){
    return this.http
    .get(
      `https://portfolio-abdallah-saoud-680b87858be7.herokuapp.com/api/projects/${projectId}`   
    )
  }
}
