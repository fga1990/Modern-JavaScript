// import {heroes} from "./data/heroes";
import heroes, {owners} from "./heroes";

console.log({heroes});
console.log({owners});

const getHeroByIdOld = (id) => {
    return heroes.find(hero => hero.id === id);
}

export const getHeroById = (id) => heroes.find( (hero )=> hero.id === id);

export const getHeroByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner);

console.log(getHeroByIdOld(1));
console.log(getHeroById(2));
console.log(getHeroById(5));
console.table(getHeroByOwner('DC'));
console.table(getHeroByOwner('Marvel'));