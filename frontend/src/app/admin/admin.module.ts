import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterailModule';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { OrderByStatusComponent } from './components/analytics/order-by-status/order-by-status.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { NewspostComponent } from './components/create/newspost/newspost.component';
import { CareerpostComponent } from './components/create/careerpost/careerpost.component';
import { ServicepostComponent } from './components/create/servicepost/servicepost.component';
import { PhotouploadComponent } from './components/create/photoupload/photoupload.component';
import { VideopostComponent } from './components/create/videopost/videopost.component';
import { CareerlistComponent } from './components/list/careerlist/careerlist.component';
import { NewslistComponent } from './components/list/newslist/newslist.component';
import { ServicelistComponent } from './components/list/servicelist/servicelist.component';
import { GlobalbpolistComponent } from './components/list/globalbpolist/globalbpolist.component';
import { GallerylistComponent } from './components/list/gallerylist/gallerylist.component';
import { TeamlistComponent } from './components/list/teamlist/teamlist.component';
import { VideolistComponent } from './components/list/videolist/videolist.component';
import { ApplicationComponent } from './components/application/application.component';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { CommentsComponent } from './components/comments/comments.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ApplicantListComponent } from './components/list/applicant-list/applicant-list.component';
import { TeampostComponent } from './components/create/teampost/teampost.component';
import { GlobalBpoPostComponent } from './components/create/global-bpo-post/global-bpo-post.component';






@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostProductComponent,
    PostCouponComponent,
    CouponsComponent,
    OrdersComponent,
    PostProductFaqComponent,
    UpdateProductComponent,
    AnalyticsComponent,
    OrderByStatusComponent,
    CreateComponent,
    ListComponent,
    NewspostComponent,
    CareerpostComponent,
    ServicepostComponent,
    PhotouploadComponent,
    VideopostComponent,
    CareerlistComponent,
    NewslistComponent,
    ServicelistComponent,
    GlobalbpolistComponent,
    GallerylistComponent,
    TeamlistComponent,
    VideolistComponent,
    ApplicationComponent,
    ContactMessageComponent,
    CommentsComponent,
    ApplicantListComponent,
    TeampostComponent,
    GlobalBpoPostComponent,
   
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatBadgeModule
  ]
})
export class AdminModule { }
