// Configuration for the Gothic Camp Character Generator
const CONFIG = {
    // Character types
    characterTypes: [
        { value: "humanFemale", label: "Gothic Female" },
        { value: "humanMale", label: "Gothic Male" },
        { value: "child", label: "Gothic Child" },
        { value: "monster", label: "Gothic Monster" }
    ],
    
    // Style foundations for each character type
    styleFoundations: {
        humanFemale: [
            { value: "darkElegance", label: "Dark Elegance" },
            { value: "theatricalMacabre", label: "Theatrical Macabre" },
            { value: "domesticGothic", label: "Domestic Gothic" },
            { value: "victorianHaunt", label: "Victorian Haunt" },
            { value: "occultPractitioner", label: "Occult Practitioner" },
            { value: "aristocraticDecay", label: "Aristocratic Decay" }
        ],
        humanMale: [
            { value: "gothicPatriarch", label: "Gothic Patriarch" },
            { value: "macabreScientist", label: "Macabre Scientist" },
            { value: "victorianGentleman", label: "Victorian Gentleman" },
            { value: "theatricalHost", label: "Theatrical Host" },
            { value: "funeraryProfessional", label: "Funerary Professional" },
            { value: "eccentricCollector", label: "Eccentric Collector" }
        ],
        child: [
            { value: "precocious", label: "Precocious Gothic" },
            { value: "hauntedChild", label: "Haunted Child" },
            { value: "miniatureScholar", label: "Miniature Scholar" },
            { value: "peculiarInnocent", label: "Peculiar Innocent" },
            { value: "tinyMacabre", label: "Tiny Macabre" },
            { value: "omenChild", label: "Omen Child" }
        ],
        monster: [
            { value: "gentleAbomination", label: "Gentle Abomination" },
            { value: "elegantFiend", label: "Elegant Fiend" },
            { value: "scientificAnomaly", label: "Scientific Anomaly" },
            { value: "folkloreEntity", label: "Folklore Entity" },
            { value: "spectralPresence", label: "Spectral Presence" },
            { value: "transformedBeing", label: "Transformed Being" }
        ]
    },
    
    // Hairstyles for each character type
    hairstyles: {
        humanFemale: [
            { value: "midnightWaves", label: "Midnight Waves" },
            { value: "towering", label: "Towering Updo" },
            { value: "victorianCoils", label: "Victorian Coils" },
            { value: "dramaticStreak", label: "Dramatic White Streak" },
            { value: "sharpBob", label: "Sharp Gothic Bob" },
            { value: "raptureRaven", label: "Rapture Raven" },
            { value: "edwardian", label: "Edwardian Elegance" },
            { value: "vintageWaves", label: "Vintage Horror Waves" }
        ],
        humanMale: [
            { value: "slickedBack", label: "Slicked-back Darkness" },
            { value: "dramaticPeak", label: "Dramatic Widow's Peak" },
            { value: "victorianParted", label: "Victorian Side Part" },
            { value: "wildProfessor", label: "Wild Professor" },
            { value: "silentFilm", label: "Silent Film Styling" },
            { value: "dignifiedGray", label: "Dignified Gray Temples" },
            { value: "romanticWaves", label: "Romantic Dark Waves" },
            { value: "undercut", label: "Gothic Undercut" }
        ],
        child: [
            { value: "severePigtails", label: "Severe Pigtails" },
            { value: "oldfashionedBob", label: "Old-fashioned Bob" },
            { value: "miniAdult", label: "Miniature Adult Style" },
            { value: "preciseCenter", label: "Precisely Centered Part" },
            { value: "victorianChild", label: "Victorian Child Curls" },
            { value: "pageboy", label: "Gothic Pageboy" },
            { value: "babyVamp", label: "Baby Vampire Styling" },
            { value: "ribbonTied", label: "Ribbon-Tied Style" }
        ],
        monster: [
            { value: "unnaturalForm", label: "Unnatural Form" },
            { value: "partialBald", label: "Partial Baldness" },
            { value: "laboratoryExperiment", label: "Laboratory Experiment" },
            { value: "wildAnimal", label: "Wild Animal-like" },
            { value: "floatingEthereal", label: "Floating Ethereal" },
            { value: "electricShock", label: "Electric Shock Style" },
            { value: "ancient", label: "Ancient Styling" },
            { value: "phantomWisp", label: "Phantom Wisp" }
        ]
    },
    
    // Upper garments for each character type  
    tops: {
        humanFemale: [
            { value: "victorianBlouse", label: "Victorian Blouse" },
            { value: "strictCorset", label: "Strict Corset" },
            { value: "elegantBodysuit", label: "Elegant Gothic Bodysuit" },
            { value: "brocadeBodice", label: "Brocade Bodice" },
            { value: "theatricalTop", label: "Theatrical Top" },
            { value: "highCollarLace", label: "High-Collar Lace Blouse" },
            { value: "cameoEmbellished", label: "Cameo-Embellished Top" },
            { value: "poeticSleeves", label: "Poetic Sleeve Blouse" },
            { value: "domesticMacabre", label: "Domestic Macabre Top" },
            { value: "stagePerformer", label: "Stage Performer Top" }
        ],
        humanMale: [
            { value: "victorianShirt", label: "Victorian Shirt" },
            { value: "frockCoat", label: "Frock Coat Upper" },
            { value: "highCollar", label: "High-Collared Shirt" },
            { value: "brooding", label: "Brooding Poet Shirt" },
            { value: "embellishedWaistcoat", label: "Embellished Waistcoat" },
            { value: "laboratoryJacket", label: "Laboratory Jacket" },
            { value: "funeraryFormal", label: "Funerary Formal Upper" },
            { value: "theatricalHost", label: "Theatrical Host Shirt" },
            { value: "strangeSuburban", label: "Strange Suburban Shirt" },
            { value: "antiquarian", label: "Antiquarian Top" }
        ],
        child: [
            { value: "miniatureFormal", label: "Miniature Formal Top" },
            { value: "schoolUniform", label: "Gothic School Uniform Top" },
            { value: "victorianChild", label: "Victorian Child's Shirt" },
            { value: "tinyTux", label: "Tiny Tuxedo Shirt" },
            { value: "overdressed", label: "Eerily Overdressed Upper" },
            { value: "sailorMacabre", label: "Sailor Macabre Top" },
            { value: "puffSleeve", label: "Puff Sleeve Horror" },
            { value: "morticianMini", label: "Mini Mortician Upper" },
            { value: "hauntedOrphan", label: "Haunted Orphan Shirt" },
            { value: "precociousGothic", label: "Precocious Gothic Top" }
        ],
        monster: [
            { value: "laboratoryScraps", label: "Laboratory Scraps Top" },
            { value: "partlyHuman", label: "Partly Human Upper" },
            { value: "straitLaced", label: "Strait-Laced Restraint Top" },
            { value: "elegantInhuman", label: "Elegant Inhuman Garment" },
            { value: "ancientWrappings", label: "Ancient Wrappings Upper" },
            { value: "scientificSubject", label: "Scientific Subject Shirt" },
            { value: "transformativeUpper", label: "Transformative Upper Garment" },
            { value: "spectralUpper", label: "Spectral Upper Form" },
            { value: "victorianMonster", label: "Victorian Monster Shirt" },
            { value: "ceremonyAttire", label: "Dark Ceremony Attire" }
        ]
    },
    
    // Lower garments for each character type
    bottoms: {
        humanFemale: [
            { value: "fullLength", label: "Full-Length Gothic Skirt" },
            { value: "bustleBack", label: "Bustle-Back Skirt" },
            { value: "lacePaneled", label: "Lace-Paneled Skirt" },
            { value: "victorianTrousers", label: "Victorian Trousers" },
            { value: "theatricalBottom", label: "Theatrical Bottom" },
            { value: "darkPencil", label: "Dark Pencil Skirt" },
            { value: "layeredRuffles", label: "Layered Ruffle Skirt" },
            { value: "highWaisted", label: "High-Waisted Gothic Bottom" },
            { value: "domesticMacabre", label: "Domestic Macabre Bottom" },
            { value: "performerLeggings", label: "Performer Leggings" }
        ],
        humanMale: [
            { value: "victorianTrousers", label: "Victorian Trousers" },
            { value: "highWaisted", label: "High-Waisted Formal Pants" },
            { value: "tailoredStripes", label: "Tailored Striped Pants" },
            { value: "funeraryBottom", label: "Funerary Formal Bottom" },
            { value: "scientist", label: "Scientific Gentleman Pants" },
            { value: "darkRiding", label: "Dark Riding Pants" },
            { value: "eccentric", label: "Eccentric Pattern Pants" },
            { value: "theatricalBottom", label: "Theatrical Host Bottom" },
            { value: "suburbanStrange", label: "Suburban Strange Pants" },
            { value: "antiqueLower", label: "Antique Style Lower" }
        ],
        child: [
            { value: "miniPleat", label: "Mini Pleated Skirt" },
            { value: "shortPants", label: "Gothic Short Pants" },
            { value: "schoolUniform", label: "Gothic School Uniform Bottom" },
            { value: "victorianChild", label: "Victorian Child's Bottom" },
            { value: "tinyFormal", label: "Tiny Formal Bottom" },
            { value: "precociousPants", label: "Precocious Gothic Pants" },
            { value: "hauntedOrphan", label: "Haunted Orphan Bottom" },
            { value: "miniMortician", label: "Mini Mortician Bottom" },
            { value: "peculiarPleats", label: "Peculiarly Pleated Bottom" },
            { value: "perfectLittle", label: "Perfect Little Horror Bottom" }
        ],
        monster: [
            { value: "stitchedLower", label: "Stitched-Together Bottom" },
            { value: "laboratoryIssue", label: "Laboratory-Issue Pants" },
            { value: "tattered", label: "Elegantly Tattered Lower" },
            { value: "transformative", label: "Transformative Lower Half" },
            { value: "ancientWrappings", label: "Ancient Wrapped Lower" },
            { value: "partlyInhuman", label: "Partly Inhuman Bottom" },
            { value: "ghostlyLower", label: "Ghostly Lower Manifestation" },
            { value: "anomalousPants", label: "Anomalous Entity Pants" },
            { value: "victorianMonster", label: "Victorian Monster Bottom" },
            { value: "folkloreEntity", label: "Folklore Entity Lower" }
        ]
    },
    
    // Full Outfits/Dresses
    dresses: {
        humanFemale: [
            { value: "victorianMourning", label: "Victorian Mourning Dress" },
            { value: "elegantGothic", label: "Elegant Gothic Full Gown" },
            { value: "theatricalGown", label: "Theatrical Performance Gown" },
            { value: "domesticMacabre", label: "Domestic Macabre Dress" },
            { value: "highCollarFull", label: "High-Collared Full Dress" },
            { value: "corseted", label: "Elaborately Corseted Gown" },
            { value: "occultCeremony", label: "Occult Ceremony Dress" },
            { value: "aristocraticDecay", label: "Aristocratic Decay Gown" },
            { value: "hostessDress", label: "Gothic Hostess Dress" },
            { value: "darkBridal", label: "Dark Bridal Ensemble" }
        ],
        humanMale: [
            { value: "victorianFull", label: "Victorian Full Suit" },
            { value: "funeraryDirector", label: "Funerary Director Ensemble" },
            { value: "scientistComplete", label: "Mad Scientist Complete Outfit" },
            { value: "patriarchSuit", label: "Gothic Patriarch Suit" },
            { value: "theatricalHost", label: "Theatrical Host Ensemble" },
            { value: "occultMaster", label: "Occult Master Robes" },
            { value: "aristocraticDecay", label: "Aristocratic Decay Suit" },
            { value: "vintageHorror", label: "Vintage Horror Full Outfit" },
            { value: "eccentricFull", label: "Eccentric Full Costume" },
            { value: "antiqueCollector", label: "Antique Collector Ensemble" }
        ],
        child: [
            { value: "schoolUniform", label: "Gothic School Uniform" },
            { value: "miniatureAdult", label: "Miniature Adult Formal" },
            { value: "victorianChild", label: "Victorian Child's Outfit" },
            { value: "hauntedOrphan", label: "Haunted Orphan Ensemble" },
            { value: "funeralAttendee", label: "Funeral Attendee Outfit" },
            { value: "peculiarSunday", label: "Peculiar Sunday Best" },
            { value: "tinyMacabre", label: "Tiny Macabre Ensemble" },
            { value: "ceremonyChild", label: "Ceremony Child Outfit" },
            { value: "omenBearer", label: "Omen Bearer Dress" },
            { value: "precociousScholar", label: "Precocious Scholar Ensemble" }
        ],
        monster: [
            { value: "laboratorySpecimen", label: "Laboratory Specimen Outfit" },
            { value: "victorianMonster", label: "Victorian Monster Ensemble" },
            { value: "elegantFiend", label: "Elegant Fiend Full Dress" },
            { value: "transformingCostume", label: "Transforming Costume" },
            { value: "folkloreAttire", label: "Folklore Entity Attire" },
            { value: "scientificMisfit", label: "Scientific Misfit Garb" },
            { value: "ancientWrapped", label: "Ancient Wrapped Full Body" },
            { value: "ghostlyManifestation", label: "Ghostly Manifestation Form" },
            { value: "creatureElegance", label: "Creature Elegance Outfit" },
            { value: "ritualEntity", label: "Ritual Entity Dress" }
        ]
    },
    
    // Outerwear for each character type
    outerwear: {
        humanFemale: [
            { value: "victorianCape", label: "Victorian Mourning Cape" },
            { value: "laceShawl", label: "Gothic Lace Shawl" },
            { value: "structuredJacket", label: "Structured Gothic Jacket" },
            { value: "theatricalCape", label: "Theatrical Cape" },
            { value: "domesticCardigan", label: "Domestic Gothic Cardigan" },
            { value: "funeralCoat", label: "Funeral Attendance Coat" },
            { value: "occultRobe", label: "Occult Ceremony Robe" },
            { value: "decayingCoat", label: "Decaying Aristocratic Coat" },
            { value: "velvetWrap", label: "Velvet Draped Wrap" },
            { value: "performerJacket", label: "Performer Show Jacket" }
        ],
        humanMale: [
            { value: "victorianOvercoat", label: "Victorian Overcoat" },
            { value: "funeraryJacket", label: "Funerary Professional Jacket" },
            { value: "labCoat", label: "Scientific Laboratory Coat" },
            { value: "capeCoat", label: "Caped Overcoat" },
            { value: "theatricalJacket", label: "Theatrical Host Jacket" },
            { value: "smokingJacket", label: "Gothic Smoking Jacket" },
            { value: "occultRobe", label: "Occult Master Robe" },
            { value: "aristocraticCoat", label: "Aristocratic Coat" },
            { value: "suburbiaStrange", label: "Strangely Suburban Coat" },
            { value: "collectorJacket", label: "Collector's Jacket" }
        ],
        child: [
            { value: "miniCape", label: "Miniature Cape" },
            { value: "schoolCoat", label: "Gothic School Coat" },
            { value: "victorianChild", label: "Victorian Child's Coat" },
            { value: "orphanOverwear", label: "Orphan Hand-Me-Down Coat" },
            { value: "funeralCapelet", label: "Funeral Capelet" },
            { value: "tinyLayers", label: "Tiny Layered Outerwear" },
            { value: "macabreSweater", label: "Macabre Child's Sweater" },
            { value: "precocious", label: "Precociously Formal Coat" },
            { value: "miniMortician", label: "Mini Mortician Jacket" },
            { value: "omenCape", label: "Omen Child Cape" }
        ],
        monster: [
            { value: "laboratoryDrape", label: "Laboratory Drape" },
            { value: "stitchedCoat", label: "Stitched-Together Coat" },
            { value: "transformativeCloak", label: "Transformative Cloak" },
            { value: "victorianlnhuman", label: "Victorian Inhuman Coat" },
            { value: "ancientShroud", label: "Ancient Shroud" },
            { value: "scientificWrapping", label: "Scientific Specimen Wrapping" },
            { value: "ghostlyAura", label: "Ghostly Aura Outerwear" },
            { value: "ceremonyRobe", label: "Dark Ceremony Robe" },
            { value: "elegantMonster", label: "Elegant Monster Coat" },
            { value: "folkloreWrap", label: "Folklore Entity Wrap" }
        ]
    },
    
    // Footwear for each character type
    footwear: {
        humanFemale: [
            { value: "victorianBoots", label: "Victorian Lace-Up Boots" },
            { value: "gothicHeels", label: "Gothic Heeled Shoes" },
            { value: "mourningBoots", label: "Mourning Ceremony Boots" },
            { value: "theatricalShoes", label: "Theatrical Performance Shoes" },
            { value: "domesticGothic", label: "Domestic Gothic Footwear" },
            { value: "occultRitual", label: "Occult Ritual Shoes" },
            { value: "aristocraticDecay", label: "Aristocratic Decay Footwear" },
            { value: "poeticWander", label: "Poetic Wanderer Boots" },
            { value: "performerFootwear", label: "Performer Show Footwear" },
            { value: "lacedAnkle", label: "Laced Ankle Boots" }
        ],
        humanMale: [
            { value: "victorianBoots", label: "Victorian Gentleman's Boots" },
            { value: "funeraryShoes", label: "Funerary Professional Shoes" },
            { value: "scientificBoots", label: "Scientific Explorer Boots" },
            { value: "patriarchFootwear", label: "Patriarch Formal Footwear" },
            { value: "theatricalShoes", label: "Theatrical Host Shoes" },
            { value: "occultRitual", label: "Occult Ritual Boots" },
            { value: "aristocraticDecay", label: "Aristocratic Decay Shoes" },
            { value: "suburbanStrange", label: "Strangely Suburban Shoes" },
            { value: "collectorBoots", label: "Antique Collector Boots" },
            { value: "eccentricShoes", label: "Eccentric Formal Shoes" }
        ],
        child: [
            { value: "miniBoots", label: "Miniature Gothic Boots" },
            { value: "schoolShoes", label: "Gothic School Shoes" },
            { value: "victorianChild", label: "Victorian Child's Shoes" },
            { value: "orphanFootwear", label: "Orphan Hand-Me-Down Shoes" },
            { value: "funeralMary", label: "Funeral Mary Janes" },
            { value: "tinyFormal", label: "Tiny Formal Footwear" },
            { value: "macabreOxfords", label: "Macabre Child's Oxfords" },
            { value: "precocious", label: "Precociously Adult Shoes" },
            { value: "peculiarSocks", label: "Peculiar Socks with Shoes" },
            { value: "omenFootprints", label: "Omen Child Footprints" }
        ],
        monster: [
            { value: "laboratoryIssue", label: "Laboratory-Issue Footwear" },
            { value: "misshapen", label: "Misshapen Monster Boots" },
            { value: "transformative", label: "Transformative Feet" },
            { value: "victorianInhuman", label: "Victorian Inhuman Shoes" },
            { value: "ancientWraps", label: "Ancient Foot Wrappings" },
            { value: "scientificSpecimen", label: "Scientific Specimen Boots" },
            { value: "ghostlyFeet", label: "Ghostly Feet Manifestation" },
            { value: "etherealHover", label: "Ethereal Hovering (No Shoes)" },
            { value: "elegantMonster", label: "Elegant Monster Footwear" },
            { value: "folkloreFootwear", label: "Folklore Entity Feet" }
        ]
    },
    
    // Accessories for each character type
    accessories: {
        humanFemale: [
            { value: "cameoChoker", label: "Cameo Choker" },
            { value: "laceGloves", label: "Black Lace Gloves" },
            { value: "victorianFan", label: "Victorian Mourning Fan" },
            { value: "pocketWatch", label: "Ladies' Pocket Watch" },
            { value: "hauntedJewelry", label: "Haunted Heirloom Jewelry" },
            { value: "raven", label: "Raven Companion" },
            { value: "parasol", label: "Gothic Parasol" },
            { value: "brooches", label: "Victorian Mourning Brooch" },
            { value: "perfumeVial", label: "Mysterious Perfume Vial" },
            { value: "ritualKit", label: "Occult Ritual Kit" },
            { value: "peculiarPet", label: "Peculiar Pet/Companion" },
            { value: "veil", label: "Mourning Veil" }
        ],
        humanMale: [
            { value: "pocketWatch", label: "Gentleman's Pocket Watch" },
            { value: "walkingCane", label: "Ornate Walking Cane" },
            { value: "skullTiepin", label: "Skull Tiepin" },
            { value: "mourningArmband", label: "Mourning Armband" },
            { value: "labItems", label: "Laboratory Items" },
            { value: "cravat", label: "Elaborate Cravat" },
            { value: "gothicGloves", label: "Gothic Gentleman's Gloves" },
            { value: "unusualSpecimens", label: "Collection of Unusual Specimens" },
            { value: "peculiarPet", label: "Peculiar Pet/Companion" },
            { value: "monocle", label: "Tinted Monocle" },
            { value: "pocketBook", label: "Disturbing Pocket Book" },
            { value: "ritualKit", label: "Occult Ritual Items" }
        ],
        child: [
            { value: "hauntedDoll", label: "Haunted Doll/Toy" },
            { value: "ribbons", label: "Morbid Hair Ribbons" },
            { value: "tinyGloves", label: "Tiny Formal Gloves" },
            { value: "peculiarPet", label: "Peculiar Pet/Companion" },
            { value: "schoolItems", label: "Disturbing School Items" },
            { value: "lollipop", label: "Black Lollipop" },
            { value: "miniatureWeapon", label: "Miniature 'Weapon'" },
            { value: "insectCollection", label: "Collection of Insects" },
            { value: "weirdTrinket", label: "Weird Trinket" },
            { value: "pocketWatch", label: "Inherited Pocket Watch" },
            { value: "funeralFlowers", label: "Funeral Flowers" },
            { value: "spookyBook", label: "Spooky Children's Book" }
        ],
        monster: [
            { value: "chains", label: "Broken Chains/Restraints" },
            { value: "laboratoryEquipment", label: "Laboratory Equipment" },
            { value: "bodyBolts", label: "Visible Body Bolts" },
            { value: "mysteriousAmulet", label: "Mysterious Amulet" },
            { value: "transformationCharm", label: "Transformation Charm" },
            { value: "spectralItems", label: "Spectral/Floating Items" },
            { value: "ancientArtifact", label: "Ancient Artifact" },
            { value: "unnaturalPet", label: "Unnatural Pet/Familiar" },
            { value: "cermonialItems", label: "Ceremonial Items" },
            { value: "monstrosityMark", label: "Mark of Monstrosity" },
            { value: "scientificAttachments", label: "Scientific Attachments" },
            { value: "hauntedObject", label: "Haunted Object" }
        ]
    },
    
    // Distinctive features for each character type
    features: {
        humanFemale: [
            { value: "paleComplexion", label: "Unnaturally Pale Complexion" },
            { value: "darkCircles", label: "Dramatic Dark Eye Circles" },
            { value: "redLips", label: "Blood-Red Lips" },
            { value: "sharplyCut", label: "Sharply Cut Features" },
            { value: "dramaticEyebrows", label: "Dramatically Arched Eyebrows" },
            { value: "floatingMovement", label: "Floating Movement Style" },
            { value: "unnaturalGrace", label: "Unnatural Grace" },
            { value: "penetratingGaze", label: "Penetrating Gaze" },
            { value: "agelessAppearance", label: "Ageless Appearance" },
            { value: "perfectPosture", label: "Perfect Rigid Posture" }
        ],
        humanMale: [
            { value: "paleComplexion", label: "Deathly Pallor" },
            { value: "gaunt", label: "Gaunt, Hollow Features" },
            { value: "widowsPeak", label: "Pronounced Widow's Peak" },
            { value: "burningEyes", label: "Burning/Intense Eyes" },
            { value: "dramaticShadows", label: "Face Catches Dramatic Shadows" },
            { value: "formalSpeech", label: "Overly Formal Speech" },
            { value: "strangeGestures", label: "Strange Gesturing Habits" },
            { value: "theatricalVoice", label: "Theatrical Voice" },
            { value: "oddPosture", label: "Odd Posture/Stance" },
            { value: "unusualSmile", label: "Unusual/Unsettling Smile" }
        ],
        child: [
            { value: "tooAdult", label: "Too-Adult Mannerisms" },
            { value: "unnaturalStillness", label: "Unnatural Stillness" },
            { value: "paleSkin", label: "Extremely Pale Skin" },
            { value: "strangeStare", label: "Strange, Unblinking Stare" },
            { value: "olderEyes", label: "Eyes Look Much Older" },
            { value: "creepyVoice", label: "Creepy Sing-Song Voice" },
            { value: "unusualKnowledge", label: "Unusual Knowledge" },
            { value: "perfectComposure", label: "Perfect/Unchildlike Composure" },
            { value: "oddHabits", label: "Odd Repetitive Habits" },
            { value: "disturbingSmile", label: "Disturbingly Perfect Smile" }
        ],
        monster: [
            { value: "unnaturalSkin", label: "Unnatural Skin Tone/Texture" },
            { value: "strangeProportions", label: "Strange Body Proportions" },
            { value: "visibleSutures", label: "Visible Sutures/Seams" },
            { value: "glowingEyes", label: "Glowing/Unusual Eyes" },
            { value: "partialTransform", label: "Partial Transformation" },
            { value: "floatingMovement", label: "Floating/Unnatural Movement" },
            { value: "animalFeatures", label: "Subtle Animal Features" },
            { value: "unnaturalVoice", label: "Unnatural Voice" },
            { value: "spectralAspect", label: "Spectral/Transparent Aspect" },
            { value: "laboratoryMarks", label: "Laboratory/Experiment Marks" }
        ]
    },
    
    // Color schemes
    colors: [
        { value: "none", label: "None" },
        { value: "blackRed", label: "Black & Blood Red" },
        { value: "purpleBlack", label: "Deep Purple & Black" },
        { value: "midnightBlue", label: "Midnight Blue & Silver" },
        { value: "allBlack", label: "All Black with Silver Accents" },
        { value: "darkGreen", label: "Dark Green & Black" },
        { value: "gothicBurgundy", label: "Burgundy & Charcoal" },
        { value: "plum", label: "Plum & Black" },
        { value: "rust", label: "Rust Red & Black" },
        { value: "teal", label: "Dark Teal & Black" },
        { value: "victorian", label: "Victorian Mourning (Purple, Black, Gray)" },
        { value: "cobweb", label: "Cobweb Gray & White" },
        { value: "bloodSplatter", label: "Black with Blood Splatter Pattern" },
        { value: "sepia", label: "Sepia & Faded Black" },
        { value: "deepRed", label: "Deep Red & Gold" },
        { value: "emeraldBlack", label: "Emerald & Black" },
        { value: "poisonGreen", label: "Poison Green & Purple" },
        { value: "antiquePurple", label: "Antique Purple & Aged Gold" },
        { value: "forestMoss", label: "Forest Green & Moss" },
        { value: "midnightPurple", label: "Midnight Purple & Silver" },
        { value: "coffin", label: "Coffin Wood & Brass" },
        { value: "cryptMarble", label: "Crypt Marble & Verdigris" },
        { value: "bloodVelvet", label: "Blood Velvet & Tarnished Gold" },
        { value: "lavendermist", label: "Lavender Mist & Charcoal" },
        { value: "poisonApple", label: "Poison Apple Red & Forest Green" }
    ],
    
    // Complete character archetypes
    archetypes: {
        humanFemale: [
            { 
                value: "morticiaType", 
                label: "Elegant Gothic Matriarch",
                components: {
                    style: "darkElegance",
                    hairstyle: "midnightWaves",
                    top: "",
                    bottom: "",
                    dress: "elegantGothic",
                    outerwear: "",
                    footwear: "gothicHeels",
                    accessories: ["cameoChoker", "laceGloves", "hauntedJewelry"],
                    features: ["paleComplexion", "unnaturalGrace"]
                }
            },
            { 
                value: "elviraCaliber", 
                label: "Theatrical Horror Hostess",
                components: {
                    style: "theatricalMacabre",
                    hairstyle: "towering",
                    top: "theatricalTop",
                    bottom: "theatricalBottom",
                    dress: "",
                    outerwear: "theatricalCape",
                    footwear: "theatricalShoes",
                    accessories: ["redLips", "perfumeVial", "peculiarPet"],
                    features: ["dramaticEyebrows", "theatricalVoice"]
                }
            },
            { 
                value: "domesticGothic", 
                label: "Macabre Homemaker",
                components: {
                    style: "domesticGothic",
                    hairstyle: "vintageWaves",
                    top: "domesticMacabre",
                    bottom: "domesticMacabre",
                    dress: "",
                    outerwear: "domesticCardigan",
                    footwear: "domesticGothic",
                    accessories: ["brooches", "perfumeVial", "peculiarPet"],
                    features: ["perfectPosture", "unusualSmile"]
                }
            },
            { 
                value: "victorianLady", 
                label: "Victorian Gothic Lady",
                components: {
                    style: "victorianHaunt",
                    hairstyle: "victorianCoils",
                    top: "",
                    bottom: "",
                    dress: "victorianMourning",
                    outerwear: "victorianCape",
                    footwear: "victorianBoots",
                    accessories: ["victorianFan", "parasol", "veil"],
                    features: ["paleComplexion", "perfectPosture"]
                }
            },
            { 
                value: "occultMistress", 
                label: "Occult Mistress",
                components: {
                    style: "occultPractitioner",
                    hairstyle: "dramaticStreak",
                    top: "",
                    bottom: "",
                    dress: "occultCeremony",
                    outerwear: "occultRobe",
                    footwear: "occultRitual",
                    accessories: ["ritualKit", "hauntedJewelry", "raven"],
                    features: ["penetratingGaze", "floatingMovement"]
                }
            }
        ],
        humanMale: [
            { 
                value: "gomezType", 
                label: "Eccentric Gothic Patriarch",
                components: {
                    style: "gothicPatriarch",
                    hairstyle: "slickedBack",
                    top: "",
                    bottom: "",
                    dress: "patriarchSuit",
                    outerwear: "",
                    footwear: "patriarchFootwear",
                    accessories: ["pocketWatch", "walkingCane", "skullTiepin"],
                    features: ["theatricalVoice", "strangeGestures"]
                }
            },
            { 
                value: "scientistType", 
                label: "Macabre Scientist",
                components: {
                    style: "macabreScientist",
                    hairstyle: "wildProfessor",
                    top: "laboratoryJacket",
                    bottom: "scientist",
                    dress: "",
                    outerwear: "labCoat",
                    footwear: "scientificBoots",
                    accessories: ["labItems", "unusualSpecimens", "monocle"],
                    features: ["burningEyes", "unusualSmile"]
                }
            },
            { 
                value: "victorianGent", 
                label: "Victorian Gentleman",
                components: {
                    style: "victorianGentleman",
                    hairstyle: "victorianParted",
                    top: "",
                    bottom: "",
                    dress: "victorianFull",
                    outerwear: "victorianOvercoat",
                    footwear: "victorianBoots",
                    accessories: ["pocketWatch", "walkingCane", "mourningArmband"],
                    features: ["paleComplexion", "formalSpeech"]
                }
            },
            { 
                value: "theatricalHost", 
                label: "Theatrical Horror Host",
                components: {
                    style: "theatricalHost",
                    hairstyle: "silentFilm",
                    top: "theatricalHost",
                    bottom: "theatricalBottom",
                    dress: "",
                    outerwear: "theatricalJacket",
                    footwear: "theatricalShoes",
                    accessories: ["cravat", "pocketBook", "peculiarPet"],
                    features: ["dramaticShadows", "theatricalVoice"]
                }
            },
            { 
                value: "funeralDirector", 
                label: "Funerary Professional",
                components: {
                    style: "funeraryProfessional",
                    hairstyle: "dignifiedGray",
                    top: "funeraryFormal",
                    bottom: "funeraryBottom",
                    dress: "",
                    outerwear: "funeraryJacket",
                    footwear: "funeraryShoes",
                    accessories: ["pocketWatch", "gothicGloves", "mourningArmband"],
                    features: ["gaunt", "formalSpeech"]
                }
            }
        ],
        child: [
            { 
                value: "wednesdayType", 
                label: "Precocious Gothic Child",
                components: {
                    style: "precocious",
                    hairstyle: "severePigtails",
                    top: "",
                    bottom: "",
                    dress: "schoolUniform",
                    outerwear: "schoolCoat",
                    footwear: "schoolShoes",
                    accessories: ["hauntedDoll", "miniatureWeapon", "ribbons"],
                    features: ["tooAdult", "strangeStare"]
                }
            },
            { 
                value: "hauntedChildType", 
                label: "Haunted Child",
                components: {
                    style: "hauntedChild",
                    hairstyle: "oldfashionedBob",
                    top: "",
                    bottom: "",
                    dress: "hauntedOrphan",
                    outerwear: "orphanOverwear",
                    footwear: "orphanFootwear",
                    accessories: ["hauntedDoll", "weirdTrinket", "pocketWatch"],
                    features: ["paleSkin", "olderEyes"]
                }
            },
            { 
                value: "miniScholar", 
                label: "Miniature Gothic Scholar",
                components: {
                    style: "miniatureScholar",
                    hairstyle: "miniAdult",
                    top: "miniatureFormal",
                    bottom: "miniMortician",
                    dress: "",
                    outerwear: "precocious",
                    footwear: "precocious",
                    accessories: ["spookyBook", "tinyGloves", "peculiarPet"],
                    features: ["unusualKnowledge", "perfectComposure"]
                }
            },
            { 
                value: "peculiarChild", 
                label: "Peculiar Gothic Child",
                components: {
                    style: "peculiarInnocent",
                    hairstyle: "preciseCenter",
                    top: "overdressed",
                    bottom: "peculiarPleats",
                    dress: "",
                    outerwear: "tinyLayers",
                    footwear: "peculiarSocks",
                    accessories: ["insectCollection", "schoolItems", "spookyBook"],
                    features: ["oddHabits", "disturbingSmile"]
                }
            },
            { 
                value: "omenBearer", 
                label: "Omen Child",
                components: {
                    style: "omenChild",
                    hairstyle: "victorianChild",
                    top: "",
                    bottom: "",
                    dress: "omenBearer",
                    outerwear: "omenCape",
                    footwear: "omenFootprints",
                    accessories: ["funeralFlowers", "weirdTrinket", "hauntedDoll"],
                    features: ["unnaturalStillness", "creepyVoice"]
                }
            }
        ],
        monster: [
            { 
                value: "gentleGiant", 
                label: "Gentle Abomination",
                components: {
                    style: "gentleAbomination",
                    hairstyle: "electricShock",
                    top: "laboratoryScraps",
                    bottom: "stitchedLower",
                    dress: "",
                    outerwear: "laboratoryDrape",
                    footwear: "laboratoryIssue",
                    accessories: ["chains", "bodyBolts", "laboratoryEquipment"],
                    features: ["visibleSutures", "strangeProportions"]
                }
            },
            { 
                value: "elegantFiend", 
                label: "Elegant Fiend",
                components: {
                    style: "elegantFiend",
                    hairstyle: "unnaturalForm",
                    top: "elegantInhuman",
                    bottom: "",
                    dress: "elegantFiend",
                    outerwear: "elegantMonster",
                    footwear: "elegantMonster",
                    accessories: ["mysteriousAmulet", "unnaturalPet", "hauntedObject"],
                    features: ["glowingEyes", "unnaturalVoice"]
                }
            },
            { 
                value: "scientificAnomaly", 
                label: "Scientific Anomaly",
                components: {
                    style: "scientificAnomaly",
                    hairstyle: "laboratoryExperiment",
                    top: "scientificSubject",
                    bottom: "laboratoryIssue",
                    dress: "",
                    outerwear: "scientificWrapping",
                    footwear: "scientificSpecimen",
                    accessories: ["scientificAttachments", "laboratoryEquipment", "bodyBolts"],
                    features: ["laboratoryMarks", "unnaturalSkin"]
                }
            },
            { 
                value: "ghostlyPresence", 
                label: "Spectral Presence",
                components: {
                    style: "spectralPresence",
                    hairstyle: "floatingEthereal",
                    top: "spectralUpper",
                    bottom: "ghostlyLower",
                    dress: "",
                    outerwear: "ghostlyAura",
                    footwear: "etherealHover",
                    accessories: ["spectralItems", "hauntedObject", "ancientArtifact"],
                    features: ["spectralAspect", "floatingMovement"]
                }
            },
            { 
                value: "folkloreMonster", 
                label: "Folklore Entity",
                components: {
                    style: "folkloreEntity",
                    hairstyle: "wildAnimal",
                    top: "",
                    bottom: "",
                    dress: "folkloreAttire",
                    outerwear: "folkloreWrap",
                    footwear: "folkloreFootwear",
                    accessories: ["transformationCharm", "ancientArtifact", "unnaturalPet"],
                    features: ["animalFeatures", "partialTransform"]
                }
            }
        ]
    }
};