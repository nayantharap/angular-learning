import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppTableComponent } from './shared/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    // HomeComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
