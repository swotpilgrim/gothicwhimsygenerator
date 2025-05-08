// Gothic Camp Character Generator Descriptions
var DESCRIPTIONS = {
    // Style Foundation descriptions by character type
    styleFoundations: {
        humanFemale: {
            darkElegance: "Embodying gothic sophistication with an otherworldly grace, this character combines Victorian refinement with supernatural mystery. Every movement is deliberate, every glance suggests knowledge of things beyond mortal understanding.",
            theatricalMacabre: "With dramatic flair and macabre humor, this character transforms horror into entertainment. Their exaggerated gestures and knowing winks make the terrifying delightfully palatable, blending seduction with the supernatural.",
            domesticGothic: "The perfect fusion of homemaking skills and macabre sensibilities. This character brings gothic aesthetics into everyday domestic life, finding beauty in darkness while maintaining an eerily perfect household.",
            victorianHaunt: "Stepping directly from a Victorian ghost story, this character embodies the formal elegance of the 19th century with distinctly supernatural undertones. Their old-world manners and speech patterns suggest connection to another time.",
            occultPractitioner: "Knowledgeable in forbidden arts and arcane practices, this character walks between worlds with practiced ease. Their mannerisms suggest regular communion with forces beyond normal perception.",
            aristocraticDecay: "The last scion of a once-great family line now touched by beautiful decay. This character maintains perfect aristocratic bearing while surrounded by the elegant deterioration of former grandeur."
        },
        humanMale: {
            gothicPatriarch: "The enthusiastic head of an unusual household, this character combines dramatic flair with genuine family devotion. Their eccentric passions and theatrical declarations are matched only by their loyalty to loved ones.",
            macabreScientist: "Pushing the boundaries of conventional science into disturbing realms, this character's brilliant mind operates beyond normal ethics. Their fascination with life, death, and transformation manifests in unsettling experiments.",
            victorianGentleman: "Maintaining the formal manners and dress of the Victorian era, this character seems somewhat displaced in time. Their precise speech and rigid etiquette barely contain darker passions and possibly supernatural connections.",
            theatricalHost: "With elaborate introductions and dramatic flair, this character presents macabre tales for entertainment. Their theatrical training and perfect timing transform genuine horror into delightful camp performance.",
            funeraryProfessional: "Finding beauty and dignity in death, this character approaches mortality with professional detachment and personal fascination. Their knowledge of funerary customs spans cultures and centuries.",
            eccentricCollector: "Surrounded by unusual artifacts and obscure memorabilia, this character's obsessive collecting habits reveal deep fascination with the macabre. Each item in their collection has a disturbing story they're eager to share."
        },
        child: {
            precocious: "Unnervingly mature with adult vocabulary and morbid interests far beyond their years. This character observes the world with ancient eyes in a young face, making disturbingly accurate observations with deadpan delivery.",
            hauntedChild: "Carrying invisible burdens from past trauma or supernatural connection, this character seems haunted by things others cannot see. Their thousand-yard stare and occasional references to unseen entities unsettle even hardened adults.",
            miniatureScholar: "A tiny academic with oversized knowledge of forbidden subjects. This character studies the macabre with scholarly precision, collecting information about death, supernatural phenomena, and gothic literature with academic enthusiasm.",
            peculiarInnocent: "Combining childlike wonder with disturbing interests, this character finds joy in things others find horrifying. Their innocent approach to morbid subjects creates cognitive dissonance in observers.",
            tinyMacabre: "A miniature gothic enthusiast with aesthetic fully formed despite young age. This character embraces all elements of gothic style and interests in perfect child-sized proportions.",
            omenChild: "A harbinger of strange events, this character seems connected to supernatural occurrences. Their presence often precedes unusual phenomena, and their cryptic statements sometimes prove prophetic."
        },
        monster: {
            gentleAbomination: "Despite terrifying appearance and unnatural origins, this character possesses unexpected tenderness and humanity. Their struggle to reconcile monstrous form with gentle nature creates both pathos and occasionally humor.",
            elegantFiend: "Combining refined tastes with predatory nature, this character brings aristocratic sensibilities to monstrous existence. Their perfect manners and cultural knowledge barely disguise fundamental inhumanity beneath.",
            scientificAnomaly: "The result of experimentation gone wrong (or perhaps right), this character exists as living proof of science's hubris. Their unusual abilities and limitations directly result from laboratory origins.",
            folkloreEntity: "Stepping directly from ancient legends and campfire tales, this character embodies supernatural elements from folklore. Their behaviors follow mysterious rules and patterns established in centuries-old stories.",
            spectralPresence: "Neither fully present nor entirely absent, this ethereal character exists between worlds. Their partial materialization and connection to both living and dead realms gives them unique perspective.",
            transformedBeing: "Once normal but fundamentally changed through curse, experiment, or choice. This character retains memories of former existence while adapting to new form and abilities."
        }
    },

    // Gothic first names by gender type
    firstNames: {
        humanFemale: [
            "Lillith", "Morticia", "Elvira", "Lenore", "Raven", "Drusilla", "Pandora",
            "Theda", "Carmilla", "Desdemona", "Ligeia", "Ophelia", "Madeline",
            "Prudence", "Vespertine", "Vanessa", "Elspeth", "Griselda", "Lucretia",
            "Euphemia", "Wilhelmina", "Persephone", "Narcissa", "Sophronia"
        ],
        humanMale: [
            "Mortimer", "Gomez", "Vincent", "Edgar", "Dorian", "Lucien", "Barnabas",
            "Thaddeus", "Damien", "Ambrose", "Silas", "Phineas", "Ezra", "Alaric",
            "Malachi", "Roderick", "Balthazar", "Cornelius", "Hawthorn", "Orville",
            "Augustus", "Montgomery", "Victor", "Lucius", "Thornton", "Reginald"
        ],
        child: [
            "Wednesday", "Pugsley", "Edward", "Lydia", "Igor", "Agatha", "Elijah",
            "Emmeline", "Corvus", "Wilhelmina", "Ichabod", "Prudence", "Mordecai",
            "Matilda", "Casper", "Tabitha", "Amory", "Cyrilla", "Patience", "Hester"
        ],
        monster: [
            "Vlad", "Igor", "Herman", "Boris", "Franklyn", "Dracul", "Alistair",
            "Fenris", "Nocturna", "Morgana", "Belladonna", "Grimwald", "Obscura",
            "Thanatos", "Nephthys", "Morrigan", "Nyx", "Thorne", "Zephyr", "Crypt"
        ]
    },

    // Gothic surnames
    lastNames: [
        "Addams", "Munster", "Frump", "Ravencroft", "Grimm", "Poe", "Blackwood",
        "Graves", "Usher", "Mortis", "Shadowgrave", "Nightshade", "Darkwood",
        "Crowley", "DeLaMort", "Bloodgood", "Coffin", "Haunt", "Midnight",
        "Mortem", "Craven", "Frost", "Gloom", "Shade", "Mist", "Knell", "Wraith",
        "Mourning", "Shadow", "Strange", "Grimshaw", "Ghastly", "Doom", "Cadaver"
    ],
    
    // Generate character description based on selections
    generateCharacterDescription: function(character) {
        // Build description from selections
        let description = '';
        
        // Add style foundation description
        if (character.style && this.styleFoundations[character.gender] && this.styleFoundations[character.gender][character.style]) {
            description += this.styleFoundations[character.gender][character.style] + ' ';
        }
        
        // Add clothing description
        if (character.dress) {
            description += 'Attired in ' + character.dress.toLowerCase();
            if (character.outerwear) {
                description += ' with ' + character.outerwear.toLowerCase();
            }
            description += '. ';
        } else {
            if (character.top) {
                description += 'Wearing ' + character.top.toLowerCase();
                if (character.bottom) {
                    description += ' and ' + character.bottom.toLowerCase();
                }
                if (character.outerwear) {
                    description += ', complemented by ' + character.outerwear.toLowerCase();
                }
                description += '. ';
            }
        }
        
        // Add accessories if present
        if (character.accessories && character.accessories.length > 0) {
            description += 'Accessorized with ';
            for (let i = 0; i < character.accessories.length; i++) {
                if (i > 0) {
                    if (i === character.accessories.length - 1) {
                        description += ' and ';
                    } else {
                        description += ', ';
                    }
                }
                description += character.accessories[i].toLowerCase();
            }
            description += '. ';
        }
        
        // Add distinctive features if present
        if (character.features && character.features.length > 0) {
            description += 'Distinguished by ';
            for (let i = 0; i < character.features.length; i++) {
                if (i > 0) {
                    if (i === character.features.length - 1) {
                        description += ' and ';
                    } else {
                        description += ', ';
                    }
                }
                description += character.features[i].toLowerCase();
            }
            description += '. ';
        }
        
        // Add thematic ending based on character type
        const endings = {
            humanFemale: "This character embodies the elegant darkness of gothic camp, where horror meets glamour in delicious tension.",
            humanMale: "This character balances macabre interests with dramatic flair, creating a perfectly theatrical gothic presence.",
            child: "This character demonstrates how children in gothic traditions are often the most unsettling harbingers of the supernatural.",
            monster: "This character transforms monstrous qualities into strangely endearing characteristics through the lens of gothic camp."
        };
        
        if (endings[character.gender]) {
            description += endings[character.gender];
        }
        
        return description;
    },
    
    // Generate a gothic character name based on character type
    generateCharacterName: function(characterType) {
        let firstName = "Unknown";
        const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
        
        // Select appropriate first name based on character type
        if (this.firstNames[characterType]) {
            const firstNameOptions = this.firstNames[characterType];
            firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        }
        
        return firstName + " " + lastName;
    }
};