import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule }     from '@angular/common/http';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { SharedModule }     from './shared/shared.module';
import { ServicesModule }   from './services/services.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServicesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
