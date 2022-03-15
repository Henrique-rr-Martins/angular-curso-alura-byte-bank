import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
// import config. para usar padrões pt
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';

// função para configurar o padrão de uma linguagem e passar uma string que vai ser usada como alias
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    // provê o serviço de locale de pt
    { provide: LOCALE_ID, useValue: 'pt' },
    // provê a moeda local usada na aplicação
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
