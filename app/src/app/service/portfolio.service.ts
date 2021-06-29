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
      "https://imed-portfolio-back.herokuapp.com/portfolio-descriptions"
    )
  }

  /**
   * @returns Portfolio Projetc
   */
  getProjects(){
    return this.http
    .get(
      "https://imed-portfolio-back.herokuapp.com/projects"
    )
  }

  /**
   * @param projectId Id of requested project
   * @returns Single project
   */
  getProjectsById(projectId){
    return this.http
    .get(
      `https://imed-portfolio-back.herokuapp.com/${projectId}`   
    )
  }
}
