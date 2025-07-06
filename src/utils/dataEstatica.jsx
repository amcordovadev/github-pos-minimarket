import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";



export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: "fluent-color:home-16",
    to: "/",
  },
  {
    label: "VENDER",
    icon: "fluent-emoji:shopping-cart", //fluent-emoji:shopping-cart o fluent-emoji:dollar-banknote
    to: "/pos",
  },
  {
    label: "Kardex",
    icon: "flat-ui:box",
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: "flat-ui:graph",
    to: "/reportes",
  },

];
export const SecondarylinksArray = [

  {
    label: "Configuración",
    icon: "icon-park:setting-two",
    to: "/configuracion",
    color: "#CE82FF"
  },



];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",

  },
  {
    icono: "🌚",
    descripcion: "dark",

  },
];

//data configuracion
export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "Registra tus productos",
    icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/configuracion/productos",

  },
  {
    title: "Personal",
    subtitle: "Ten el control de tu personal",
    icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
    link: "/configuracion/usuarios",

  },

  {
    title: "Tu empresa",
    subtitle: "Configura tus opciones básicas",
    icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/configuracion/empresa",

  },
  {
    title: "Categoria de productos",
    subtitle: "Asigna categorias a tus productos",
    // icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
    icono: "https://i.ibb.co/Lh13j22W/categoria.png",
    link: "/configuracion/categorias",

  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona tus marcas",
    icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/configuracion/marcas",

  },

];
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];