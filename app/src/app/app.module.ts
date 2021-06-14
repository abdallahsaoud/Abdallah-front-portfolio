import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*** MODULE ***/
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/*** COMPONENT ***/
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { ProjectComponent } from './component/project/project.component';
import { DescriptionOverviewComponent } from './component/description-overview/description-overview.component';
import { ProjectSectionComponent } from './component/project-section/project-section.component';
import { DynamicSectionElementComponent } from './component/dynamic-section-element/dynamic-section-element.component';


/*** LAYOUT ***/
import { AppLayoutComponent } from './layout/app-layout.component';
import { GalleryComponent } from './component/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectComponent,
    DescriptionOverviewComponent,
    ProjectSectionComponent,
    AppLayoutComponent,
    DynamicSectionElementComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GalleryModule,
    LightboxModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
