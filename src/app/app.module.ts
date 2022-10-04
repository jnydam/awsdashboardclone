import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwsheaderComponent } from './awsheader/awsheader.component';
import { AwslowerbodyComponent } from './awslowerbody/awslowerbody.component';
import { CenterdisplayComponent } from './awslowerbody/centerdisplay/centerdisplay.component';
import { InnerheaderComponent } from './awslowerbody/centerdisplay/innerheader/innerheader.component';
import { RecentvisitwelcomerowComponent } from './awslowerbody/centerdisplay/recentvisitwelcomerow/recentvisitwelcomerow.component';
import { HealthcostusagerowComponent } from './awslowerbody/centerdisplay/healthcostusagerow/healthcostusagerow.component';
import { BuildsolutiontrustedrowComponent } from './awslowerbody/centerdisplay/buildsolutiontrustedrow/buildsolutiontrustedrow.component';
import { ResusablecardComponent } from './ui/resusablecard/resusablecard.component';

@NgModule({
  declarations: [
    AppComponent,
    AwsheaderComponent,
    AwslowerbodyComponent,
    CenterdisplayComponent,
    InnerheaderComponent,
    RecentvisitwelcomerowComponent,
    HealthcostusagerowComponent,
    BuildsolutiontrustedrowComponent,
    ResusablecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
