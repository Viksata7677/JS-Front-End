function solve(arr) {
    let heroes = {};

    let heroesCount = Number(arr.shift());
    
    for (let i = 0; i < heroesCount; i++) {
        let [heroName, heroHp, heroBullets] = arr.shift().split(' ');
        
        heroes[heroName] = {heroHp, heroBullets}
    }
    
    let command = arr.shift();
    
    while (command !== 'Ride Off Into Sunset') {
        let tokens = command.split(' - ');        
        let action = tokens.shift();
        let heroName = tokens.shift();
        
        if (action === 'FireShot') {
            let target = tokens.shift();
            if (heroes[heroName].heroBullets > 0) {
                heroes[heroName].heroBullets--;
                console.log(`${heroName} has successfully hit ${target} and now has ${heroes[heroName].heroBullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
                
            }
            
        } else if (action === 'TakeHit') {
            let damage = Number(tokens.shift());
            let attacker = tokens.shift();

            heroes[heroName].heroHp -= damage;

            if (heroes[heroName].heroHp > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroes[heroName].heroHp} HP!`);
            } else {
                console.log(`${heroName} was gunned down by ${attacker}!`);
                
            }

        } else if (action === 'Reload') {
            if (heroes[heroName].heroBullets < 6) {
                let reloadedBullets = 6 -heroes[heroName].heroBullets;
                console.log(`${heroName} reloaded ${reloadedBullets} bullets!`)
                heroes[heroName].heroBullets = 6;
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        } else if (action === 'PatchUp') {
            let amount = Number(tokens.shift());

            if (heroes[heroName].heroHp < 100) {
                if (heroes[heroName].heroHp + amount > 100) {
                    amount = 100 - heroes[heroName].heroHp;
                }
                heroes[heroName].heroHp += amount;

                console.log(`${heroName} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${heroName} is in full health!`);
            }

        }
        
        command = arr.shift();
    }

    const entries = Object.entries(heroes).filter(entry => entry[1].heroHp > 0);
    for (const [heroName, heroStats] of entries) {
        console.log(`${heroName}`);
        console.log(` HP: ${heroStats.heroHp}`);
        console.log(` Bullets: ${heroStats.heroBullets}`);
    }
    
}

solve((["2",

"Gus 100 0",

"Walt 100 6",

"FireShot - Gus - Bandit",

"TakeHit - Gus - 100 - Bandit",

"Reload - Walt",

"Ride Off Into Sunset"]))