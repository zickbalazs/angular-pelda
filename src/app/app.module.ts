import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { RatingComponent } from './rating/rating.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    RatingComponent,
    SidebarComponent,
    UploadModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
