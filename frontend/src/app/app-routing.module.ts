import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic/login/login.component';
import { SignupComponent } from './basic/signup/signup.component';
import { HomeComponent } from './basic/home/home.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './fifo/about/about.component';
import { ContactComponent } from './fifo/contact/contact.component';
import { GalleryComponent } from './fifo/gallery/gallery.component';
import { GlobalbpoComponent } from './fifo/globalbpo/globalbpo.component';
import { NewsComponent } from './fifo/news/news.component';
import { ServiceComponent } from './fifo/service/service.component';
import { ApplicationFormComponent } from './career/application-form/application-form.component';
import { CareerViewListComponent } from './career-view-list/career-view-list.component';
import { VideoComponent } from './fifo/video/video.component';
import { TeamComponent } from './fifo/team/team.component';
import { AppDesignDevelopmentComponent } from './fifo/service/app-design-development/app-design-development.component';
import { BackOfficeComponent } from './fifo/service/back-office/back-office.component';
import { ContactCenterComponent } from './fifo/service/contact-center/contact-center.component';
import { CreativeDesignComponent } from './fifo/service/creative-design/creative-design.component';
import { DigitalMarketingComponent } from './fifo/service/digital-marketing/digital-marketing.component';
import { SkillsDevelopmentComponent } from './fifo/service/skills-development/skills-development.component';
import { ContactMessageComponent } from './admin/components/contact-message/contact-message.component';
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
import { DetailsComponent } from './Practice/details/details.component';
import { EditComponent } from './Practice/edit/edit.component';
import { NavbarComponent } from './fifo/navbar/navbar.component';
import { ViewComponent } from './Practice/view/view.component';

const routes: Routes = [

  { path: " ", component: HomeComponent},

{ path: "login", component: LoginComponent},
{ path: "signup", component: SignupComponent},
{ path: "home", component: HomeComponent},
// { path: "order", component: TrackOrderComponent},
{ path: "career", component: CareerComponent},
{ path: "about", component: AboutComponent},
{ path: "contact", component: ContactComponent},
{ path: "job-Details/:id", component: ApplicationFormComponent},
{ path: "gallery", component: GalleryComponent},
// { path: "gallery/:id", component: GalleryComponent},

{ path: "globalBpoAlliance", component: GlobalbpoComponent},
{ path: "news", component: NewsComponent},
{ path: "service", component: ServiceComponent},
{ path: "CareerView", component: CareerViewListComponent},
{ path: "video", component: VideoComponent},
{ path: "team", component: TeamComponent},
{ path: "app-design-development", component: AppDesignDevelopmentComponent},
{ path: "back-office", component: BackOfficeComponent},
{ path: "contact-center", component: ContactCenterComponent},
{ path: "creative-design", component: CreativeDesignComponent},
{ path: "digital-marketing", component: DigitalMarketingComponent},
{ path: "skills-development", component: SkillsDevelopmentComponent},
{ path: "client-contact-list", component: ContactMessageComponent},


{ path: "towhid-hossain", component: TowhidHossainComponent},
{ path: "jahangir-hossain-uzzal", component: JahangirHossainUzzalComponent},
{ path: "nurul-islam", component: NurulIslamComponent},
{ path: "tariqul-hasan", component: TariqulHasanComponent},
{ path: "obaidul-haque", component: ObaiduHaqueComponent},
{ path: "atia-bilkis", component: AtiaBilkisComponent},
{ path: "rashaduzamman-rian", component: RashaduzammanRianComponent},
{ path: "tamanna-sharker", component: TamannaSharkerComponent},


{ path: "practice-create", component: CreateComponent},
{ path: "practice-list", component: ListComponent},
{ path: "practice-details", component: DetailsComponent},
{ path: "practice-edit", component: EditComponent},


{ path: "nav", component: NavbarComponent},
{ path: "view", component: ViewComponent},





{ path: '', component: HomeComponent},



{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }, 
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
