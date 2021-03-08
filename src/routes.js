/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Asignaciones from "views/Asignaciones";
import Usuarios from "views/Usuarios";
import Reportes from "views/Reportes";
import MisListas from "views/MisListas";
import DetallesAsignacionLista from "./views/DetallesAsignacionLista";
import Catalogos from "./views/Catalogos";
import EjecucionLista from "./views/EjecucionLista";
import CrearLista from "./views/CrearLista";
import Listados from "./views/Listados";
import CrearAsignacion from "./views/CrearAsignacion";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/listados",
    name: "Listados",
    icon: "nc-icon nc-tile-56",
    component: Listados,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/notifications",
    name: "Asignaciones",
    icon: "nc-icon nc-tap-01",
    component: Asignaciones,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    icon: "nc-icon nc-single-02",
    component: Usuarios,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/crear-usuario",
    name: "Crear usuario",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/typography",
    name: "Catálogos",
    icon: "nc-icon nc-box",
    component: Catalogos,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/ejecucion-lista",
    name: "Ejecucion Lista",
    icon: "nc-icon nc-box",
    component: EjecucionLista,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/reportes",
    name: "Reportes",
    icon: "nc-icon nc-chart-bar-32",
    component: Reportes,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/mis-listas",
    name: "MisListas",
    icon: "nc-icon nc-tile-56",
    component: MisListas,
    layout: "/admin",
  },
  {
    path: "/detalles-asignacion-lista",
    name: "Detalles lista",
    icon: "nc-icon nc-tile-56",
    component: DetallesAsignacionLista,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/crear-lista",
    name: "Crear lista",
    icon: "nc-icon nc-tile-56",
    component: CrearLista,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/crear-asignacion",
    name: "Crear asignacion",
    icon: "nc-icon nc-tile-56",
    component: CrearAsignacion,
    layout: "/admin",
    invisible: true
  },
 /* {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },*/
  {
    pro: true,
    path: "/upgrade",
    name: "Cerrar sesión",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
