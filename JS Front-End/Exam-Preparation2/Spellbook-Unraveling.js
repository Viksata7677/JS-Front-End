function spellbook(arr) {
    let spell = arr.shift();
    let command = arr.shift();

    while (command !== 'End') {
        const tokens = command.split('!');
        const action = tokens.shift();
        

        if (action === 'RemoveEven') {
            let newSpell = '';
            for (let i = 0; i < spell.length; i += 2) {
                let char = spell[i];
                newSpell += char;
            }

            spell = newSpell;
            console.log(spell);
            
        } else if (action === 'TakePart') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);

            let newSpell = spell.substring(startIndex, endIndex);
            spell = newSpell;
            console.log(newSpell);

        } else if (action === 'Reverse') {
            const substring = tokens[0];

            if (spell.includes(substring)) {
                spell = spell.replace(substring, '');
                let reversedSubstring = substring.split('').reverse().join('');
                spell += reversedSubstring;

                console.log(spell);
                
            } else {
                console.log('Error');
            }
        }
        
        command = arr.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
}

spellbook((["asAsl2adkda2mdaczsa",

            "RemoveEven",

            "TakePart!1!9",

            "Reverse!maz",

            "End"]))