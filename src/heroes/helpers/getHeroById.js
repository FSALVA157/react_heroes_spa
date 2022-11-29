import { heroes } from "../data/heroes"



export const getHeroById = (id) => {
  
  const listado = heroes;

    return listado.find(hero => hero.id === id);
}
