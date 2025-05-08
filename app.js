// Main application logic for Gothic Camp Character Generator
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const characterTypeSelect = document.getElementById('characterType');
    const archetypesSelect = document.getElementById('archetypes');
    const styleFoundationSelect = document.getElementById('styleFoundation');
    const hairstyleSelect = document.getElementById('hairstyle');
    const topsSelect = document.getElementById('tops');
    const bottomsSelect = document.getElementById('bottoms');
    const dressesSelect = document.getElementById('dresses');
    const dressGroup = document.getElementById('dressGroup');
    const outerwearSelect = document.getElementById('outerwear');
    const footwearSelect = document.getElementById('footwear');
    const accessoryContainer = document.getElementById('accessoryContainer');
    const featureContainer = document.getElementById('featureContainer');
    const mainColorSelect = document.getElementById('mainColor');
    const secondaryColorSelect = document.getElementById('secondaryColor');
    const accentColorSelect = document.getElementById('accentColor');
    const generateBtn = document.getElementById('generateBtn');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const autoColorBtn = document.getElementById('autoColorBtn');
    const characterDescription = document.getElementById('characterDescription');
    const visualElements = document.getElementById('visualElements');
    
    // Maximum number of accessories and features allowed
    const MAX_ACCESSORIES = 3;
    const MAX_FEATURES = 2;
    
    // Initialize form
    initializeForm();
    
    // Event listeners
    characterTypeSelect.addEventListener('change', handleCharacterTypeChange);
    archetypesSelect.addEventListener('change', handleArchetypeChange);
    generateBtn.addEventListener('click', generateCharacter);
    randomizeBtn.addEventListener('click', randomizeAll);
    resetBtn.addEventListener('click', resetForm);
    autoColorBtn.addEventListener('click', autoPickColorScheme);
    
    // Initialize the form with default options
    function initializeForm() {
        // Populate character type select
        populateSelect(characterTypeSelect, CONFIG.characterTypes);
        
        // Populate all color selects
        populateSelect(mainColorSelect, CONFIG.colors);
        populateSelect(secondaryColorSelect, CONFIG.colors);
        populateSelect(accentColorSelect, CONFIG.colors);
        
        // Clear output areas
        characterDescription.textContent = 'Your gothic character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
    }
    
    // Handle character type change
    function handleCharacterTypeChange() {
        const gender = characterTypeSelect.value;
        
        if (!gender) return;
        
        // Update archetypes options
        populateSelect(archetypesSelect, CONFIG.archetypes[gender], true);
        
        // Update style foundation options
        populateSelect(styleFoundationSelect, CONFIG.styleFoundations[gender]);
        
        // Update hairstyle options
        populateSelect(hairstyleSelect, CONFIG.hairstyles[gender]);
        
        // Update tops options
        populateSelect(topsSelect, CONFIG.tops[gender]);
        
        // Update bottoms options
        populateSelect(bottomsSelect, CONFIG.bottoms[gender]);
        
        // Update dresses options
        populateSelect(dressesSelect, CONFIG.dresses[gender]);
        
        // Update outerwear options
        populateSelect(outerwearSelect, CONFIG.outerwear[gender]);
        
        // Update footwear options
        populateSelect(footwearSelect, CONFIG.footwear[gender]);
        
        // Update accessories
        populateAccessories(gender);
        
        // Update features
        populateFeatures(gender);
    }
    
    // Handle archetype selection
    function handleArchetypeChange() {
        const gender = characterTypeSelect.value;
        const archetype = archetypesSelect.value;
        
        if (!gender || !archetype) return;
        
        // Find selected archetype
        const selectedArchetype = CONFIG.archetypes[gender].find(a => a.value === archetype);
        if (!selectedArchetype) return;
        
        // Apply archetype components to form
        const components = selectedArchetype.components;
        
        if (components.style) {
            styleFoundationSelect.value = components.style;
        }
        
        if (components.hairstyle) {
            hairstyleSelect.value = components.hairstyle;
        }
        
        if (components.top) {
            topsSelect.value = components.top;
        }
        
        if (components.bottom) {
            bottomsSelect.value = components.bottom;
        }
        
        if (components.dress) {
            dressesSelect.value = components.dress;
        }
        
        if (components.outerwear) {
            outerwearSelect.value = components.outerwear;
        }
        
        if (components.footwear) {
            footwearSelect.value = components.footwear;
        }
        
        // Handle accessories
        const checkboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones in the archetype
        if (components.accessories && components.accessories.length > 0) {
            components.accessories.forEach(accessory => {
                const checkbox = document.getElementById('accessory-' + accessory);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Handle features
        const featureCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all
        featureCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones in the archetype
        if (components.features && components.features.length > 0) {
            components.features.forEach(feature => {
                const checkbox = document.getElementById('feature-' + feature);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Generate character with the archetype
        generateCharacter();
    }
    
    // Helper function to populate a select element with options
    function populateSelect(selectElement, options, isArchetype = false) {
        // Clear existing options
        selectElement.innerHTML = '';
        
        // Add a default empty option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        
        if (isArchetype) {
            defaultOption.textContent = 'Create your own custom character';
        } else {
            defaultOption.textContent = 'Select an option';
        }
        
        selectElement.appendChild(defaultOption);
        
        // Add all options from config
        if (options) {
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                selectElement.appendChild(optionElement);
            });
        }
    }
    
    // Populate accessories with checkboxes
    function populateAccessories(gender) {
        // Clear existing checkboxes
        accessoryContainer.innerHTML = '';
        
        // Add all accessories as checkboxes
        CONFIG.accessories[gender].forEach(accessory => {
            const accessoryItem = document.createElement('div');
            accessoryItem.className = 'accessory-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = accessory.value;
            checkbox.id = 'accessory-' + accessory.value;
            
            // Add event listener to enforce maximum selections
            checkbox.addEventListener('change', function() {
                const checkedBoxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > MAX_ACCESSORIES) {
                    this.checked = false;
                    alert(`You can only select up to ${MAX_ACCESSORIES} accessories.`);
                }
            });
            
            const label = document.createElement('label');
            label.textContent = accessory.label;
            label.setAttribute('for', 'accessory-' + accessory.value);
            
            accessoryItem.appendChild(checkbox);
            accessoryItem.appendChild(label);
            accessoryContainer.appendChild(accessoryItem);
        });
    }
    
    // Populate features with checkboxes
    function populateFeatures(gender) {
        // Clear existing checkboxes
        featureContainer.innerHTML = '';
        
        // Add all features as checkboxes
        CONFIG.features[gender].forEach(feature => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = feature.value;
            checkbox.id = 'feature-' + feature.value;
            
            // Add event listener to enforce maximum selections
            checkbox.addEventListener('change', function() {
                const checkedBoxes = featureContainer.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > MAX_FEATURES) {
                    this.checked = false;
                    alert(`You can only select up to ${MAX_FEATURES} distinctive features.`);
                }
            });
            
            const label = document.createElement('label');
            label.textContent = feature.label;
            label.setAttribute('for', 'feature-' + feature.value);
            
            featureItem.appendChild(checkbox);
            featureItem.appendChild(label);
            featureContainer.appendChild(featureItem);
        });
    }

    // Generate a gothic character name
    function generateCharacterName() {
        const gender = characterTypeSelect.value;
        
        // Use the generator from descriptions.js if available
        if (window.DESCRIPTIONS && DESCRIPTIONS.generateCharacterName) {
            return DESCRIPTIONS.generateCharacterName(gender);
        }
        
        // Fallback generator if the one in descriptions.js isn't available
        const firstNames = {
            humanFemale: ["Morticia", "Lillith", "Elvira", "Raven"],
            humanMale: ["Gomez", "Vincent", "Edgar", "Dorian"],
            child: ["Wednesday", "Pugsley", "Edward", "Lydia"],
            monster: ["Herman", "Igor", "Dracul", "Franklyn"]
        };
        
        const lastNames = ["Addams", "Munster", "Ravencroft", "Grimm", "Usher", "Nightshade"];
        
        const firstNameOptions = firstNames[gender] || ["Gothic"];
        const firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return firstName + " " + lastName;
    }
    
    // Generate character based on selected options
    function generateCharacter() {
        const gender = characterTypeSelect.value;
        const style = styleFoundationSelect.value;
        const hairstyle = hairstyleSelect.value;
        const top = topsSelect.value;
        const bottom = bottomsSelect.value;
        const dress = dressesSelect.value;
        const outerwear = outerwearSelect.value;
        const footwear = footwearSelect.value;
        const mainColor = mainColorSelect.value;
        const secondaryColor = secondaryColorSelect.value;
        const accentColor = accentColorSelect.value;
        
        // Get selected accessories
        const selectedAccessories = [];
        const accessoryCheckboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
        accessoryCheckboxes.forEach(checkbox => {
            selectedAccessories.push(checkbox.value);
        });
        
        // Get selected features
        const selectedFeatures = [];
        const featureCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]:checked');
        featureCheckboxes.forEach(checkbox => {
            selectedFeatures.push(checkbox.value);
        });
        
        // Validate that required fields are filled
        if (!gender || !style || !hairstyle) {
            alert('Please select at least a character type, style foundation, and hairstyle!');
            return;
        }
        
        // Build character object for description generation
        const character = {
            gender,
            style,
            hairstyle,
            top,
            bottom,
            dress,
            outerwear,
            footwear,
            accessories: selectedAccessories,
            features: selectedFeatures
        };
        
        // Generate character name
        const characterName = generateCharacterName();
        
        // Generate description using the function from descriptions.js if available
        let description = "";
        if (window.DESCRIPTIONS && DESCRIPTIONS.generateCharacterDescription) {
            description = DESCRIPTIONS.generateCharacterDescription(character);
        } else {
            description = "A fabulously gothic character with macabre charm!";
        }
        
        // Display name and description
        characterDescription.innerHTML = `<h3>${characterName}</h3><p>${description}</p>`;
        
        // Create list of visual elements
        visualElements.innerHTML = '';
        
        // Helper function to add a visual element if selected
        function addVisualElement(label, value, collection) {
            if (value) {
                const item = document.createElement('li');
                const matchingOption = collection.find(opt => opt.value === value);
                item.textContent = `${label}: ${matchingOption ? matchingOption.label : value}`;
                visualElements.appendChild(item);
            }
        }
        
        // Check if an archetype was selected
        const archetypeValue = archetypesSelect.value;
        if (archetypeValue) {
            const archetype = CONFIG.archetypes[gender].find(a => a.value === archetypeValue);
            if (archetype) {
                const archetypeItem = document.createElement('li');
                archetypeItem.textContent = `Archetype: ${archetype.label}`;
                visualElements.appendChild(archetypeItem);
            }
        }
        
        // Add all selected elements to the list
        addVisualElement('Character Type', gender, CONFIG.characterTypes);
        addVisualElement('Style Foundation', style, CONFIG.styleFoundations[gender]);
        addVisualElement('Hairstyle', hairstyle, CONFIG.hairstyles[gender]);
        
        if (dress) {
            addVisualElement('Full Outfit', dress, CONFIG.dresses[gender]);
        } else {
            addVisualElement('Top', top, CONFIG.tops[gender]);
            addVisualElement('Bottom', bottom, CONFIG.bottoms[gender]);
        }
        
        addVisualElement('Outerwear', outerwear, CONFIG.outerwear[gender]);
        addVisualElement('Footwear', footwear, CONFIG.footwear[gender]);
        
        // Add colors if selected
        addVisualElement('Main Color', mainColor, CONFIG.colors);
        addVisualElement('Secondary Color', secondaryColor, CONFIG.colors);
        addVisualElement('Accent Color', accentColor, CONFIG.colors);
        
        // Add accessories if selected
        if (selectedAccessories.length > 0) {
            const accessoriesItem = document.createElement('li');
            accessoriesItem.textContent = 'Accessories: ';
            
            const accessoryLabels = selectedAccessories.map(value => {
                const matchingAccessory = CONFIG.accessories[gender].find(acc => acc.value === value);
                return matchingAccessory ? matchingAccessory.label : value;
            });
            
            accessoriesItem.textContent += accessoryLabels.join(', ');
            visualElements.appendChild(accessoriesItem);
        }
        
        // Add features if selected
        if (selectedFeatures.length > 0) {
            const featuresItem = document.createElement('li');
            featuresItem.textContent = 'Distinctive Features: ';
            
            const featureLabels = selectedFeatures.map(value => {
                const matchingFeature = CONFIG.features[gender].find(feat => feat.value === value);
                return matchingFeature ? matchingFeature.label : value;
            });
            
            featuresItem.textContent += featureLabels.join(', ');
            visualElements.appendChild(featuresItem);
        }
    }
    
    // Reset the form
    function resetForm() {
        // Reset all select elements
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Reset all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear character display
        characterDescription.textContent = 'Your gothic character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
    }
    
    // Randomize all selections
    function randomizeAll() {
        // Select random character type
        const gender = getRandomOption(characterTypeSelect);
        characterTypeSelect.value = gender;
        
        // Update options based on gender first
        handleCharacterTypeChange();
        
        // Clear the archetype selection
        archetypesSelect.value = '';
        
        // Randomize all the selections
        styleFoundationSelect.value = getRandomOption(styleFoundationSelect);
        hairstyleSelect.value = getRandomOption(hairstyleSelect);
        
        // Randomly choose between dress or top/bottom
        if (Math.random() > 0.5) {
            dressesSelect.value = getRandomOption(dressesSelect);
            topsSelect.value = '';
            bottomsSelect.value = '';
        } else {
            dressesSelect.value = '';
            topsSelect.value = getRandomOption(topsSelect);
            bottomsSelect.value = getRandomOption(bottomsSelect);
        }
        
        outerwearSelect.value = getRandomOption(outerwearSelect);
        footwearSelect.value = getRandomOption(footwearSelect);
        
        // Randomize colors
        mainColorSelect.value = getRandomOption(mainColorSelect);
        secondaryColorSelect.value = getRandomOption(secondaryColorSelect);
        accentColorSelect.value = getRandomOption(accentColorSelect);
        
        // Randomize accessories
        const accessoryCheckboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all first
        accessoryCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of accessories
        const numAccessories = Math.floor(Math.random() * (MAX_ACCESSORIES + 1));
        const shuffledAccessories = Array.from(accessoryCheckboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numAccessories && i < shuffledAccessories.length; i++) {
            shuffledAccessories[i].checked = true;
        }
        
        // Randomize features
        const featureCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all first
        featureCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of features
        const numFeatures = Math.floor(Math.random() * (MAX_FEATURES + 1));
        const shuffledFeatures = Array.from(featureCheckboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numFeatures && i < shuffledFeatures.length; i++) {
            shuffledFeatures[i].checked = true;
        }
        
        // Generate character with random selections
        generateCharacter();
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        // Skip the first option (assumed to be the default empty option)
        const options = Array.from(selectElement.options).slice(1);
        if (options.length === 0) return '';
        
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Auto pick Gothic color scheme
    function autoPickColorScheme() {
        // Define Gothic color scheme combinations
        const colorSchemes = [
            { main: "blackRed", secondary: "allBlack", accent: "bloodSplatter" },
            { main: "purpleBlack", secondary: "plum", accent: "cobweb" },
            { main: "midnightBlue", secondary: "allBlack", accent: "cobweb" },
            { main: "allBlack", secondary: "blackRed", accent: "deepRed" },
            { main: "darkGreen", secondary: "allBlack", accent: "bloodSplatter" },
            { main: "gothicBurgundy", secondary: "allBlack", accent: "cobweb" },
            { main: "plum", secondary: "victorian", accent: "deepRed" },
            { main: "allBlack", secondary: "teal", accent: "cobweb" },
            { main: "victorian", secondary: "bloodSplatter", accent: "sepia" },
            { main: "deepRed", secondary: "allBlack", accent: "blackRed" },
            { main: "emeraldBlack", secondary: "poisonGreen", accent: "allBlack" },
            { main: "antiquePurple", secondary: "lavendermist", accent: "cobweb" },
            { main: "coffin", secondary: "cryptMarble", accent: "bloodVelvet" },
            { main: "midnightPurple", secondary: "purpleBlack", accent: "cobweb" },
            { main: "bloodVelvet", secondary: "deepRed", accent: "cobweb" }
        ];
        
        // Pick a random color scheme
        const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
        
        // Apply to select elements
        if (randomScheme.main) {
            const mainOption = Array.from(mainColorSelect.options).find(opt => opt.value === randomScheme.main);
            if (mainOption) mainColorSelect.value = randomScheme.main;
        }
        
        if (randomScheme.secondary) {
            const secondaryOption = Array.from(secondaryColorSelect.options).find(opt => opt.value === randomScheme.secondary);
            if (secondaryOption) secondaryColorSelect.value = randomScheme.secondary;
        }
        
        if (randomScheme.accent) {
            const accentOption = Array.from(accentColorSelect.options).find(opt => opt.value === randomScheme.accent);
            if (accentOption) accentColorSelect.value = randomScheme.accent;
        }
    }
});