import { Subservicio } from "./Subservicio";

export interface Servicio {
    id: number;
    nombre: string;
    subservicios: Subservicio[];
}