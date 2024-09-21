import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterailModule } from './DemoAngularMaterailModule';
import { LoginComponent } from './basic/login/login.component';
import { SignupComponent } from './basic/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './basic/home/home.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { TrackOrderComponent } from './track-order/track-order.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CareerComponent } from './career/career.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ServiceComponent } from './fifo/service/service.component';
import { NewsComponent } from './fifo/news/news.component';
import { GalleryComponent } from './fifo/gallery/gallery.component';
import { ContactComponent } from './fifo/contact/contact.component';
import { GlobalbpoComponent } from './fifo/globalbpo/globalbpo.component';
import { AboutComponent } from './fifo/about/about.component';
import { ApplicationFormComponent } from './career/application-form/application-form.component';
import { CareerViewListComponent } from './career-view-list/career-view-list.component';
import { TeamComponent } from './fifo/team/team.component';
import { VideoComponent } from './fifo/video/video.component';
import { ContactCenterComponent } from './fifo/service/contact-center/contact-center.component';
import { BackOfficeComponent } from './fifo/service/back-office/back-office.component';
import { DigitalMarketingComponent } from './fifo/service/digital-marketing/digital-marketing.component';
import { CreativeDesignComponent } from './fifo/service/creative-design/creative-design.component';
import { AppDesignDevelopmentComponent } from './fifo/service/app-design-development/app-design-development.component';
import { SkillsDevelopmentComponent } from './fifo/service/skills-development/skills-development.component';
import { TowhidHossainComponent } from './fifo/team/team-member/towhid-hossain/towhid-hossain.component';
import { JahangirHossainUzzalComponent } from './fifo/team/team-member/jahangir-hossain-uzzal/jahangir-hossain-uzzal.component';
import { NurulIslamComponent } from './fifo/team/team-member/nurul-islam/nurul-islam.component';
import { TariqulHasanComponent } from './fifo/team/team-member/tariqul-hasan/tariqul-hasan.component';
import { ObaiduHaqueComponent } from './fifo/team/team-member/obaidu-haque/obaidu-haque.component';
import { AtiaBilkisComponent } from './fifo/team/team-member/atia-bilkis/atia-bilkis.component';
import { RashaduzammanRianComponent } from './fifo/team/team-member/rashaduzamman-rian/rashaduzamman-rian.component';
import { TamannaSharkerComponent } from './fifo/team/team-member/tamanna-sharker/tamanna-sharker.component';
import { CreateComponent } from './Practice/create/create.component';
import { ListComponent } from './Practice/list/list.component';
import { ViewComponent } from './Practice/view/view.component';
import { DetailsComponent } from './Practice/details/details.component';
import { EditComponent } from './Practice/edit/edit.component';
import { NavbarComponent } from './fifo/navbar/navbar.component';







@NgModule({
  declarations: [AppComponent, 
                LoginComponent, 
                SignupComponent, 
                HomeComponent, 
                TrackOrderComponent, 
                CareerComponent, ServiceComponent, NewsComponent, GalleryComponent, ContactComponent, GlobalbpoComponent, AboutComponent, ApplicationFormComponent, CareerViewListComponent, TeamComponent, VideoComponent, ContactCenterComponent, BackOfficeComponent, DigitalMarketingComponent, CreativeDesignComponent, AppDesignDevelopmentComponent, SkillsDevelopmentComponent, TowhidHossainComponent, JahangirHossainUzzalComponent, NurulIslamComponent, TariqulHasanComponent, ObaiduHaqueComponent, AtiaBilkisComponent, RashaduzammanRianComponent, TamannaSharkerComponent, CreateComponent, ListComponent, ViewComponent, DetailsComponent, EditComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    CustomerModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
