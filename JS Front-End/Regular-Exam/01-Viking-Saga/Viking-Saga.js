function solve(arr) {
    let warriors = {};
    let numberOfWarriors = Number(arr.shift());
    
    for (let i = 0; i < numberOfWarriors; i++) {
        let [warriorName, weapon, strength] = arr.shift().split('-');
        strength = Number(strength);
        
        warriors[warriorName] = { weapons: [weapon], strength };
    }
    
    let command = arr.shift();
    
    while (command !== "The Saga Ends") {
        let tokens = command.split(' -> ');
        let action = tokens.shift();
        let warriorName = tokens.shift();

        if (action === 'Raid') {
            let weapon = tokens.shift();
            let strengthRequired = Number(tokens.shift());

            if (warriors[warriorName].weapons.includes(weapon) && warriors[warriorName].strength >= strengthRequired) {
                warriors[warriorName].strength -= strengthRequired;
                console.log(`${warriorName} fought bravely with ${weapon} and now has ${warriors[warriorName].strength} strength!`);
            } else {
                console.log(`${warriorName} couldn't join the raid with ${weapon}!`);
            }

        } else if (action === 'Train'){
            let strengthGained = Number(tokens.shift());
            let oldStrength = warriors[warriorName].strength;

            if (oldStrength < 100) {
                warriors[warriorName].strength += strengthGained;
                if (warriors[warriorName].strength > 100) {
                    warriors[warriorName].strength = 100;
                }
                let actualGained = warriors[warriorName].strength - oldStrength;
                console.log(`${warriorName} trained hard and gained ${actualGained} strength!`);
            } else {
                console.log(`${warriorName} is already at full strength!`);
            }
            
        } else if (action === 'Forge') {
            let newWeapon = tokens.shift();

            if (warriors[warriorName].weapons.includes(newWeapon)) {
                console.log(`${warriorName} already wields ${newWeapon}.`);
            } else {
                warriors[warriorName].weapons.push(newWeapon);
                console.log(`${warriorName} has forged a new weapon: ${newWeapon}!`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(warriors)
    for (const [warriorName, warriorStats] of entries) {
        console.log(`Warrior: ${warriorName}`);
        console.log(` - Weapons: ${warriorStats.weapons.join(', ')}`);
        console.log(` - Strength: ${warriorStats.strength}`);
    }
}

solve([
"3",
"Ragnar-Axe-80",
"Lagertha-Spear-95",
"Bjorn-Sword-100",
"Raid -> Ragnar -> Axe -> 30",
"Forge -> Ragnar -> Shield",
"Train -> Lagertha -> 10",
"Train -> Bjorn -> 5",
"Forge -> Lagertha -> Spear",
"The Saga Ends"
]);
