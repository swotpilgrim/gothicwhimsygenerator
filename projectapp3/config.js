// Configuration - Define all sections, categories and options for American Gothic Camp Character Generator
const sectionConfig = [
    {
        id: 1,
        title: "BASE CHARACTER TYPE",
        categories: [
            { id: "Male Human", label: "Male Human" },
            { id: "Female Human", label: "Female Human" },
            { id: "Monster/Non-Human", label: "Monster/Non-Human" },
            { id: "Hybrid Being", label: "Hybrid Being" }
        ],
        options: {
            "Male Human": [
                { id: "Aristocratic Gothic", label: "Aristocratic Gothic (Gomez Addams type)" },
                { id: "Macabre Scientist/Doctor", label: "Macabre Scientist/Doctor" },
                { id: "Undertaker/Mortician", label: "Undertaker/Mortician" },
                { id: "Eccentric Collector", label: "Eccentric Collector" },
                { id: "Gothic Dandy", label: "Gothic Dandy" }
            ],
            "Female Human": [
                { id: "Elegant Gothic Matriarch", label: "Elegant Gothic Matriarch (Morticia type)" },
                { id: "Glamorous Horror Hostess", label: "Glamorous Horror Hostess (Elvira/Vampira)" },
                { id: "Spooky Girl-Next-Door", label: "Spooky Girl-Next-Door" },
                { id: "Victorian Ghost Hunter", label: "Victorian Ghost Hunter" },
                { id: "Witchy Homemaker", label: "Witchy Homemaker" }
            ],
            "Monster/Non-Human": [
                { id: "Vampire", label: "Vampire" },
                { id: "Frankenstein's Creation", label: "Frankenstein's Creation" },
                { id: "Ghost/Specter", label: "Ghost/Specter" },
                { id: "Werewolf/Beast", label: "Werewolf/Beast" },
                { id: "Living Doll/Puppet", label: "Living Doll/Puppet" }
            ],
            "Hybrid Being": [
                { id: "Part-human/Part-machine", label: "Part-human/Part-machine" },
                { id: "Living-Dead", label: "Living-Dead" },
                { id: "Human with monster features", label: "Human with monster features" },
                { id: "Transformed human", label: "Transformed human" },
                { id: "Possessed object/costume", label: "Possessed object/costume" }
            ]
        }
    },
    {
        id: 2,
        title: "PHYSICAL CHARACTERISTICS",
        categories: [
            { id: "Complexion", label: "Complexion" },
            { id: "Hair Style", label: "Hair Style" },
            { id: "Body Type", label: "Body Type" },
            { id: "Distinctive Feature", label: "Distinctive Feature" }
        ],
        options: {
            "Complexion": [
                { id: "Pale", label: "Pale" },
                { id: "Ashen", label: "Ashen" },
                { id: "Green-tinted", label: "Green-tinted" },
                { id: "Blue-tinted", label: "Blue-tinted" },
                { id: "Normal with dramatic makeup", label: "Normal with dramatic makeup" }
            ],
            "Hair Style": [
                { id: "Beehive", label: "Beehive" },
                { id: "Widow's Peak", label: "Widow's Peak" },
                { id: "Shock-white streak", label: "Shock-white streak" },
                { id: "Wild & Unkempt", label: "Wild & Unkempt" },
                { id: "Slicked-back", label: "Slicked-back" }
            ],
            "Body Type": [
                { id: "Tall & Gaunt", label: "Tall & Gaunt" },
                { id: "Short & Hunched", label: "Short & Hunched" },
                { id: "Elegant & Graceful", label: "Elegant & Graceful" },
                { id: "Imposing & Broad", label: "Imposing & Broad" },
                { id: "Thin & Wiry", label: "Thin & Wiry" }
            ],
            "Distinctive Feature": [
                { id: "Sunken eyes", label: "Sunken eyes" },
                { id: "Pointed ears", label: "Pointed ears" },
                { id: "Unusual teeth", label: "Unusual teeth" },
                { id: "Dramatic eyebrows", label: "Dramatic eyebrows" },
                { id: "Visible scars", label: "Visible scars" }
            ]
        }
    },
    {
        id: 3,
        title: "COSTUME BASE",
        categories: [
            { id: "Victorian", label: "Victorian-inspired" },
            { id: "1950s", label: "1950s Suburban" },
            { id: "Funeral", label: "Funeral Chic" },
            { id: "Horror Show", label: "Horror Show Host" },
            { id: "Carnival", label: "Carnival/Circus" }
        ],
        options: {
            "Victorian": [
                { id: "High-collar shirt/blouse", label: "High-collar shirt/blouse" },
                { id: "Corseted dress", label: "Corseted dress" },
                { id: "Waistcoat with pocket watch", label: "Waistcoat with pocket watch" },
                { id: "Long trailing gown", label: "Long trailing gown" },
                { id: "Velvet dinner jacket", label: "Velvet dinner jacket" }
            ],
            "1950s": [
                { id: "Pastel dress with macabre details", label: "Pastel dress with macabre details" },
                { id: "Suburban suit with strange tie", label: "Suburban suit with strange tie" },
                { id: "Letterman jacket with occult patches", label: "Letterman jacket with occult patches" },
                { id: "Housewife apron with potion bottles", label: "Housewife apron with potion bottles" },
                { id: "Greaser outfit with supernatural twist", label: "Greaser outfit with supernatural twist" }
            ],
            "Funeral": [
                { id: "Black suit with silver accents", label: "Black suit with silver accents" },
                { id: "Mourning dress and veil", label: "Mourning dress and veil" },
                { id: "Undertaker's formal wear", label: "Undertaker's formal wear" },
                { id: "Victorian mourning jewelry", label: "Victorian mourning jewelry" },
                { id: "Funeral director coat", label: "Funeral director coat" }
            ],
            "Horror Show": [
                { id: "Revealing black gown", label: "Revealing black gown" },
                { id: "Dramatic cape and costume", label: "Dramatic cape and costume" },
                { id: "Tuxedo with blood-red details", label: "Tuxedo with blood-red details" },
                { id: "Gothic lingerie with robe", label: "Gothic lingerie with robe" },
                { id: "Stage magician outfit", label: "Stage magician outfit" }
            ],
            "Carnival": [
                { id: "Ringmaster outfit", label: "Ringmaster outfit" },
                { id: "Fortune teller robes", label: "Fortune teller robes" },
                { id: "Striped performer suit", label: "Striped performer suit" },
                { id: "Contortionist costume", label: "Contortionist costume" },
                { id: "Sinister clown attire", label: "Sinister clown attire" }
            ]
        }
    },
    {
        id: 4,
        title: "COSTUME DETAILS",
        categories: [
            { id: "Color Scheme", label: "Color Scheme" },
            { id: "Pattern", label: "Pattern" },
            { id: "Fabric", label: "Fabric" },
            { id: "Neckline", label: "Neckline/Collar" },
            { id: "Silhouette", label: "Silhouette" }
        ],
        options: {
            "Color Scheme": [
                { id: "Black & White with red accent", label: "Black & White with red accent" },
                { id: "Purple & black", label: "Purple & black" },
                { id: "Green & black", label: "Green & black" },
                { id: "All black with silver details", label: "All black with silver details" },
                { id: "Blood red & charcoal", label: "Blood red & charcoal" }
            ],
            "Pattern": [
                { id: "Stripes", label: "Stripes" },
                { id: "Spider webs", label: "Spider webs" },
                { id: "Bats", label: "Bats" },
                { id: "Coffin shapes", label: "Coffin shapes" },
                { id: "Skulls and bones", label: "Skulls and bones" }
            ],
            "Fabric": [
                { id: "Velvet", label: "Velvet" },
                { id: "Satin", label: "Satin" },
                { id: "Lace", label: "Lace" },
                { id: "Leather", label: "Leather" },
                { id: "Cobweb-thin material", label: "Cobweb-thin material" }
            ],
            "Neckline": [
                { id: "High Victorian", label: "High Victorian" },
                { id: "Plunging", label: "Plunging" },
                { id: "Bat-winged", label: "Bat-winged" },
                { id: "Jagged", label: "Jagged" },
                { id: "Cravat/Ascot", label: "Cravat/Ascot" }
            ],
            "Silhouette": [
                { id: "Sharp-shouldered", label: "Sharp-shouldered" },
                { id: "Flowing", label: "Flowing" },
                { id: "Constricted", label: "Constricted" },
                { id: "Dramatically oversized", label: "Dramatically oversized" },
                { id: "Asymmetrical", label: "Asymmetrical" }
            ]
        }
    },
    {
        id: 5,
        title: "ACCESSORIES",
        categories: [
            { id: "Jewelry", label: "Jewelry" },
            { id: "Props", label: "Props" },
            { id: "Companion", label: "Companion" },
            { id: "Footwear", label: "Footwear" },
            { id: "Headwear", label: "Headwear" }
        ],
        options: {
            "Jewelry": [
                { id: "Amulet/Pendant", label: "Amulet/Pendant" },
                { id: "Skull pins", label: "Skull pins" },
                { id: "Bat earrings", label: "Bat earrings" },
                { id: "Spider brooches", label: "Spider brooches" },
                { id: "Bone-crafted rings", label: "Bone-crafted rings" }
            ],
            "Props": [
                { id: "Unusual weapon", label: "Unusual weapon" },
                { id: "Musical instrument", label: "Musical instrument" },
                { id: "Specimen jar", label: "Specimen jar" },
                { id: "Potion bottle", label: "Potion bottle" },
                { id: "Antique book", label: "Antique book" }
            ],
            "Companion": [
                { id: "Pet spider/bat", label: "Pet spider/bat" },
                { id: "Disembodied hand", label: "Disembodied hand" },
                { id: "Miniature monster", label: "Miniature monster" },
                { id: "Ghostly presence", label: "Ghostly presence" },
                { id: "Sentient shadow", label: "Sentient shadow" }
            ],
            "Footwear": [
                { id: "Pointed boots", label: "Pointed boots" },
                { id: "Platform shoes", label: "Platform shoes" },
                { id: "Victorian lace-ups", label: "Victorian lace-ups" },
                { id: "Mismatched", label: "Mismatched" },
                { id: "Ballet slippers", label: "Ballet slippers" }
            ],
            "Headwear": [
                { id: "Tiny hat", label: "Tiny hat" },
                { id: "Dramatic veil", label: "Dramatic veil" },
                { id: "Unusual wig", label: "Unusual wig" },
                { id: "Gothic headpiece", label: "Gothic headpiece" },
                { id: "Top hat", label: "Top hat" }
            ]
        }
    },
    {
        id: 6,
        title: "DISTINCTIVE VISUAL FEATURES",
        categories: [
            { id: "Face", label: "Face Features" },
            { id: "Body", label: "Body Features" },
            { id: "Supernatural", label: "Supernatural Elements" },
            { id: "Physical Oddity", label: "Physical Oddity" },
            { id: "Movement", label: "Movement Style" }
        ],
        options: {
            "Face": [
                { id: "Dramatic widow's peak", label: "Dramatic widow's peak" },
                { id: "Pencil-thin mustache", label: "Pencil-thin mustache" },
                { id: "One white streak in hair", label: "One white streak in hair" },
                { id: "Unnaturally perfect teeth", label: "Unnaturally perfect teeth" },
                { id: "Mismatched eye colors", label: "Mismatched eye colors" }
            ],
            "Body": [
                { id: "Unusually long fingers", label: "Unusually long fingers" },
                { id: "Impossibly thin waist", label: "Impossibly thin waist" },
                { id: "Elongated neck", label: "Elongated neck" },
                { id: "Spider-like eyelashes", label: "Spider-like eyelashes" },
                { id: "Talon-like fingernails", label: "Talon-like fingernails" }
            ],
            "Supernatural": [
                { id: "Shadows move independently", label: "Shadows move independently" },
                { id: "Slightly translucent skin", label: "Slightly translucent skin" },
                { id: "Floating objects around them", label: "Floating objects around them" },
                { id: "Occasional manifestation of powers", label: "Occasional manifestation of powers" },
                { id: "Changes appearance in mirrors", label: "Changes appearance in mirrors" }
            ],
            "Physical Oddity": [
                { id: "Visible stitches on skin", label: "Visible stitches on skin" },
                { id: "Partially mechanical parts", label: "Partially mechanical parts" },
                { id: "Extra finger or appendage", label: "Extra finger or appendage" },
                { id: "Scales on parts of body", label: "Scales on parts of body" },
                { id: "Hair that defies gravity", label: "Hair that defies gravity" }
            ],
            "Movement": [
                { id: "Glides instead of walks", label: "Glides instead of walks" },
                { id: "Jerky puppet-like motions", label: "Jerky puppet-like motions" },
                { id: "Unnaturally fluid movements", label: "Unnaturally fluid movements" },
                { id: "Appears in places impossibly quickly", label: "Appears in places impossibly quickly" },
                { id: "Flits like a bat/insect", label: "Flits like a bat/insect" }
            ]
        }
    },
    {
        id: 7,
        title: "PERSONALITY TRAITS",
        categories: [
            { id: "Primary Mood", label: "Primary Mood" },
            { id: "Social Style", label: "Social Style" },
            { id: "Strange Habit", label: "Strange Habit" },
            { id: "Speech Pattern", label: "Speech Pattern" },
            { id: "Hidden Aspect", label: "Hidden Aspect" }
        ],
        options: {
            "Primary Mood": [
                { id: "Cheerfully Macabre", label: "Cheerfully Macabre" },
                { id: "Innocently Monstrous", label: "Innocently Monstrous" },
                { id: "Dramatically Melancholic", label: "Dramatically Melancholic" },
                { id: "Eerily Polite", label: "Eerily Polite" },
                { id: "Domestically Bizarre", label: "Domestically Bizarre" }
            ],
            "Social Style": [
                { id: "Uncomfortably Close-Talking", label: "Uncomfortably Close-Talking" },
                { id: "Theatrically Romantic", label: "Theatrically Romantic" },
                { id: "Oblivious to Social Norms", label: "Oblivious to Social Norms" },
                { id: "Formal to Absurdity", label: "Formal to Absurdity" },
                { id: "Inappropriately Flirtatious", label: "Inappropriately Flirtatious" }
            ],
            "Strange Habit": [
                { id: "Collects Unsettling Items", label: "Collects Unsettling Items" },
                { id: "Speaks to Invisible Entities", label: "Speaks to Invisible Entities" },
                { id: "Tastes Everything", label: "Tastes Everything" },
                { id: "Writes Poetry about Death", label: "Writes Poetry about Death" },
                { id: "Predicts Doom Constantly", label: "Predicts Doom Constantly" }
            ],
            "Speech Pattern": [
                { id: "Victorian Formality", label: "Victorian Formality" },
                { id: "Whispers Dramatically", label: "Whispers Dramatically" },
                { id: "Speaks in Riddles", label: "Speaks in Riddles" },
                { id: "Uses Outdated Slang", label: "Uses Outdated Slang" },
                { id: "Unexpectedly Loud", label: "Unexpectedly Loud" }
            ],
            "Hidden Aspect": [
                { id: "Secret Normalcy", label: "Secret Normalcy" },
                { id: "Surprising Vulnerability", label: "Surprising Vulnerability" },
                { id: "Unusual Expertise", label: "Unusual Expertise" },
                { id: "Cursed History", label: "Cursed History" },
                { id: "Supernatural Power", label: "Supernatural Power" }
            ]
        }
    },
    {
        id: 8,
        title: "RELATIONSHIP TO NORMAL SOCIETY",
        categories: [
            { id: "Social Position", label: "Social Position" },
            { id: "Community Role", label: "Community Role" },
            { id: "Normal Interaction", label: "Interaction with Normals" },
            { id: "Family Situation", label: "Family Situation" },
            { id: "Residence", label: "Residence" }
        ],
        options: {
            "Social Position": [
                { id: "Respected but Feared", label: "Respected but Feared" },
                { id: "Outcast by Choice", label: "Outcast by Choice" },
                { id: "Secret Society Member", label: "Secret Society Member" },
                { id: "Local Oddity", label: "Local Oddity" },
                { id: "Hidden Aristocrat", label: "Hidden Aristocrat" }
            ],
            "Community Role": [
                { id: "Mysterious Benefactor", label: "Mysterious Benefactor" },
                { id: "Cultural Outsider", label: "Cultural Outsider" },
                { id: "Keeper of Dark Secrets", label: "Keeper of Dark Secrets" },
                { id: "Accidental Hero", label: "Accidental Hero" },
                { id: "Town Black Sheep", label: "Town Black Sheep" }
            ],
            "Normal Interaction": [
                { id: "Attempts Normalcy Badly", label: "Attempts Normalcy Badly" },
                { id: "Oblivious to Stares", label: "Oblivious to Stares" },
                { id: "Deliberately Mysterious", label: "Deliberately Mysterious" },
                { id: "Enjoys Frightening Others", label: "Enjoys Frightening Others" },
                { id: "Secretly Yearns to Belong", label: "Secretly Yearns to Belong" }
            ],
            "Family Situation": [
                { id: "Entire Family is Strange", label: "Entire Family is Strange" },
                { id: "Black Sheep of Normal Family", label: "Black Sheep of Normal Family" },
                { id: "Ancient Bloodline", label: "Ancient Bloodline" },
                { id: "Created/Adopted Family", label: "Created/Adopted Family" },
                { id: "Unknown Origin", label: "Unknown Origin" }
            ],
            "Residence": [
                { id: "Decrepit Mansion", label: "Decrepit Mansion" },
                { id: "Oddly Normal Suburban Home", label: "Oddly Normal Suburban Home" },
                { id: "Lives in Business/Workplace", label: "Lives in Business/Workplace" },
                { id: "Mobile/Traveling Home", label: "Mobile/Traveling Home" },
                { id: "Underground/Hidden Dwelling", label: "Underground/Hidden Dwelling" }
            ]
        }
    }
];