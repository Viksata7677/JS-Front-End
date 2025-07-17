function register(arr) {
    let heroes = [];

    for (const str of arr) {
        let [heroName, heroLevel, heroItems] = str.split(' / ');
        heroLevel = Number(heroLevel);

        let heroOjb = {
            hero: heroName,
            level: heroLevel,
            items: heroItems, 
        };

        heroes.push(heroOjb);

    }

    heroes.sort((a, b) => a.level - b.level);

    for (const heroOjb of heroes) {
        console.log(`Hero: ${heroOjb.hero}`);
        console.log(`level => ${heroOjb.level}`);
        console.log(`items => ${heroOjb.items}`);
    }
}