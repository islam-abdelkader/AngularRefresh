import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { ContentComponent } from './Components/Layout/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/Layout/sidebar/sidebar.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { UsdtoegpPipe } from './_pipes/usdtoegp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    SidebarComponent,
    HighlightDirective,
    UsdtoegpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
