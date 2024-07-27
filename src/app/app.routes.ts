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
        path: "**",
        pathMatch: "full",
        redirectTo: "inicio",
    }
];
