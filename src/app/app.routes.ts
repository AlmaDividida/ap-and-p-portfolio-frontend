import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        loadComponent: () => import('./inicio/inicio.component'),
        title: "AP&P Inicio"
    },
    {
        path: "nosotros",
        loadComponent: () => import('./nosotros/nosotros.component'),
        title: "AP&P Nosotros"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "inicio",
    }
];
