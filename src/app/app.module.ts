import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GanhadoresComponent } from './ganhadores/ganhadores.component';
import { GanhadoresService } from './ganhadores/ganhadores.service';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		GanhadoresComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [GanhadoresService],
	bootstrap: [AppComponent]
})
export class AppModule { }
