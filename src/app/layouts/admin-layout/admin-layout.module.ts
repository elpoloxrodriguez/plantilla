import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { PrincipalComponent } from '../../pages/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscadorComponent } from 'src/app/pages/generico/buscador/buscador.component';
import { NgxUiLoaderModule,  NgxUiLoaderConfig } from "ngx-ui-loader";
import { PerfilComponent } from 'src/app/pages/generico/perfil/perfil.component';
import { ConfigurarComponent } from 'src/app/pages/configurar/configurar.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';



import { CambiarclaveComponent } from 'src/app/pages/generico/perfil/cambiarclave/cambiarclave.component';
import { HechiceroComponent } from 'src/app/pages/generico/hechicero/hechicero.component';
import { TablaComponent } from 'src/app/pages/generico/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#79c680",
  "bgsOpacity": 0.2,
  "bgsPosition": "center-center",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 8,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#1ea24a",
  "fgsPosition": "center-center",
  "fgsSize": 50,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.63)",
  "pbColor": "#79c680",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),


    MatCommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    AutocompleteLibModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,

  ],
  declarations: [
    PrincipalComponent,
    BuscadorComponent,
    PerfilComponent,
    ConfigurarComponent,
    ReportesComponent,
    CambiarclaveComponent,
    HechiceroComponent,
    TablaComponent,
  ]
})

export class AdminLayoutModule {}
