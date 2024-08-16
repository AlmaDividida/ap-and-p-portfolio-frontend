import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        loadComponent: () => import('./pages/inicio/inicio.component'),
        title: "AP&P Inicio"
    },
    {
        path: "nosotros",
        loadComponent: () => import('./pages/nosotros/nosotros.component'),
        title: "AP&P Nosotros"
    },
    {
        path: "aviso-privacidad",
        loadComponent: () => import('./pages/aviso-privacidad/aviso-privacidad.component'),
        title: "AP&P Aviso de Privacidad"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "inicio",
    }
];
