import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher = '') => {
    const d = ['Marvel Comics','DC Comics'];
    if(publisher.length === 0) return []

    if(!d.includes(publisher)){
        throw new Error(`No publisher with ${publisher} `)
    }
    console.log(publisher)
    return (heroes.filter(hero => hero.publisher === publisher))

}