const sizes = {
  mobile: "576px",   // Para dispositivos móviles (hasta 576px)
  tablet: "768px",   // Para tabletas (desde 768px)
  laptop: "992px",   // Para laptops (desde 992px)
  desktop: "1200px", // Para pantallas de escritorio grandes (desde 1200px)
};

export const Device = {
  // Media query para dispositivos móviles y más grandes (min-width: 576px)
  mobile: `(min-width: ${sizes.mobile})`,
  // Media query para tabletas y más grandes (min-width: 768px)
  tablet: `(min-width: ${sizes.tablet})`,
  // Media query para laptops y más grandes (min-width: 992px)
  laptop: `(min-width: ${sizes.laptop})`,
  // Media query para pantallas de escritorio y más grandes (min-width: 1200px)
  desktop: `(min-width: ${sizes.desktop})`,
};