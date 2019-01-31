import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CelularesComponent } from './components/celulares/celulares.component';
import { CelularComponent } from './components/celulares/celular.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CelularesService } from './services/celulares.service';


@NgModule({
  declarations: [
    AppComponent,
    CelularesComponent,
    CelularComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    CelularesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
