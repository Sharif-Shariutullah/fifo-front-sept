import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CareerComponent } from '../career/career.component';
import { CreateComponent } from './components/create/create.component';
import { GlobalbpoComponent } from '../fifo/globalbpo/globalbpo.component';
import { CareerpostComponent } from './components/create/careerpost/careerpost.component';
import { NewspostComponent } from './components/create/newspost/newspost.component';
import { PhotouploadComponent } from './components/create/photoupload/photoupload.component';
import { ServicepostComponent } from './components/create/servicepost/servicepost.component';
import { ListComponent } from './components/list/list.component';
import { VideopostComponent } from './components/create/videopost/videopost.component';
import { CareerlistComponent } from './components/list/careerlist/careerlist.component';
import { GallerylistComponent } from './components/list/gallerylist/gallerylist.component';
import { GlobalbpolistComponent } from './components/list/globalbpolist/globalbpolist.component';
import { NewslistComponent } from './components/list/newslist/newslist.component';
import { ServicelistComponent } from './components/list/servicelist/servicelist.component';
import { TeamlistComponent } from './components/list/teamlist/teamlist.component';
import { VideolistComponent } from './components/list/videolist/videolist.component';
import { ApplicationComponent } from './components/application/application.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { ApplicantListComponent } from './components/list/applicant-list/applicant-list.component';
import { TeampostComponent } from './components/create/teampost/teampost.component';
import { GlobalBpoPostComponent } from './components/create/global-bpo-post/global-bpo-post.component';
import { ApplicationFormComponent } from '../career/application-form/application-form.component';

const routes: Routes = [


  { path: 'career', component: CareerComponent },
  { path: 'createEverything', component: CreateComponent },
  { path: 'listOfEverything', component: ListComponent },
  { path: 'newsPost', component: NewspostComponent },
  { path: 'servicePost', component: ServicepostComponent },
  { path: 'globalBpoPost', component: GlobalBpoPostComponent },
  { path: 'photoUploadToGallery', component: PhotouploadComponent },
  { path: 'teamPost', component: TeampostComponent },
  { path: 'careerPost', component: CareerpostComponent },
  { path: 'videoPost', component: VideopostComponent },
  { path: 'careerList', component: CareerlistComponent },
  { path: 'newsList', component: NewslistComponent },
  { path: 'serviceList', component: ServicelistComponent },
  { path: 'globalBpoList', component: GlobalbpolistComponent },
  { path: 'teamList', component: TeamlistComponent },
  { path: 'videoList', component: VideolistComponent },
  { path: 'galleryList', component: GallerylistComponent },
  { path: 'applicant', component: ApplicationComponent },
  { path: 'contactMessageList', component: ContactMessageComponent },
  { path: 'CommentsList', component: CommentsComponent },
  { path: 'ApplicantList', component: ApplicantListComponent },
  { path: '', component: ListComponent },

  { path: 'product', component: PostProductComponent },
  { path: 'category', component: PostCategoryComponent },
  { path: 'product/:productId', component: UpdateProductComponent },
 { path: 'dashboard', component: DashboardComponent },

 { path: "job-Details/:id", component: ApplicationFormComponent},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }





 // { path: 'dashboard', component: DashboardComponent },
  // { path: 'category', component: PostCategoryComponent },
  // { path: 'product', component: PostProductComponent },
  // { path: 'product/:productId', component: UpdateProductComponent },
  // { path: 'post-coupon', component: PostCouponComponent },
  // { path: 'coupons', component: CouponsComponent },
  // { path: 'orders', component: OrdersComponent },
  // { path: 'faq/:productId', component: PostProductFaqComponent }, //eta kotahy kaje lagse???
  // { path: 'analytics', component: AnalyticsComponent },
