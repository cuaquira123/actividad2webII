import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CapitalizadoPipe } from './pipe/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    InicioComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
