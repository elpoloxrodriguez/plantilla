import { Routes } from '@angular/router';
import { ConfigurarComponent } from 'src/app/pages/configurar/configurar.component';
import { BuscadorComponent } from 'src/app/pages/generico/buscador/buscador.component';
import { PerfilComponent } from 'src/app/pages/generico/perfil/perfil.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';
import { AuthGuardGuard } from 'src/app/services/seguridad/auth-guard.guard';

import { PrincipalComponent } from '../../pages/principal/principal.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'principal',
        component: PrincipalComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'buscador',
        component: BuscadorComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'configurar',
        component: ConfigurarComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuardGuard]
    },

];
