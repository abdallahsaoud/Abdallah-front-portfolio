import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/*** SERVICE ***/
import { PortfolioService } from '@app/service/portfolio.service';


/*** INTERFACE ***/
import { PortfolioDescription } from '../../interface/portfolioDescription';

@Component({
  selector: 'app-description-overview',
  templateUrl: './description-overview.component.html',
  styleUrls: ['./description-overview.component.scss']
})
export class DescriptionOverviewComponent implements OnInit {

  portfolioDescription: PortfolioDescription;// TODO INTERFACE

  @Output() descriptionAvailable = new EventEmitter();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // GET Description from strapi
    this.portfolioService.getDescription().subscribe((result) => {
      this.portfolioDescription = result[0];
      this.descriptionAvailable.emit('true')
    });
  }

}
