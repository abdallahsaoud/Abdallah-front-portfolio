import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioDescription } from '@app/interface/portfolioDescription';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'https://portfolio-abdallah-saoud-680b87858be7.herokuapp.com/api';
  private strapiUrl = 'https://portfolio-abdallah-saoud-680b87858be7.herokuapp.com';

  constructor(private http: HttpClient) { }

  /**
   * @returns Portfolio Description
   */
  getDescription(): Observable<PortfolioDescription[]> {
    return this.http
      .get<{ data: any[] }>(`${this.apiUrl}/portfolio-descriptions?populate=*`)
      .pipe(
        map(response => response.data.map(item => this.mapToPortfolioDescription(item)))
      );
  }

  getProjects(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(`${this.apiUrl}/projects?populate=section.image,cardImage`).pipe(
      map(response => response.data.map(item => this.transformProjectData(item)))
    );
  }

  getProjectsById(projectId: string): Observable<any> {
    return this.http.get<{ data: any }>(`${this.apiUrl}/projects/${projectId}?populate=section.image,cardImage`).pipe(
      map(response => this.transformProjectData(response.data))
    );
  }

  private transformProjectData(item: any): any {
    return {
      _id: item.id,
      title: item.attributes?.title ?? '',
      subTitle: item.attributes?.subtitle ?? '',
      published_at: item.attributes?.publishedAt ?? '',
      sections: item.attributes?.section?.map(section => this.transformSectionData(section)) ?? [],
      createdAt: item.attributes?.createdAt ?? '',
      updatedAt: item.attributes?.updatedAt ?? '',
      __v: 0,
      id: item.id,
      cardImage: item.attributes?.cardImage?.data ? this.transformImageData(item.attributes.cardImage.data[0]) : null,
      projectCreation: item.attributes?.projectCreation ?? ''
    };
  }

  private transformSectionData(section: any): any {
    return {
      __component: section.__component,
      _id: section.id,
      stats: section.stats ?? null,
      link: section.link ?? null,
      title: section.title ?? '',
      subtitle: section.subtitle ?? '',
      text: section.text ?? '',
      image: section.image?.data ? this.transformImageData(section.image.data[0]) : null,
      gallery: section.gallery?.data ? section.gallery.data.map(galleryItem => this.transformImageData(galleryItem)) : []
    };
  }

  private transformImageData(image: any): any {
    return {
      _id: image.id,
      name: image.attributes?.name ?? '',
      url: this.strapiUrl + (image.attributes?.url ?? ''),
      formats: image.attributes?.formats ?? {}
    };
  }

  private mapToPortfolioDescription(item: any): PortfolioDescription {
    return {
      firstName: item.attributes.firstName,
      lastName: item.attributes.lastName,
      job: item.attributes.job,
      description: item.attributes.descriptionText, // Assuming descriptionText maps to description
      contact: item.attributes.contact.map(contact => ({
        __component: contact.__component,
        _id: contact.id,
        link: contact.link,
        linkName: contact.linkName,
        __v: 0,
        id: contact.id
      })),
      descriptionText: item.attributes.descriptionText,
    };
  }
}
