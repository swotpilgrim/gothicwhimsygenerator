// Main application logic for American Gothic Camp Character Generator
document.addEventListener('DOMContentLoaded', function() {
    // Track user selections
    const characterSelections = {};

    // All sections allow multiple selections
    const multiSelectSections = [2, 4, 5, 6, 7, 8]; // Added section 2 (PHYSICAL CHARACTERISTICS)
    
    // Generate sections UI
    generateSectionsUI();
    
    // Add event listeners
    document.getElementById('generate-btn').addEventListener('click', generateCharacter);
    document.getElementById('reset-btn').addEventListener('click', resetForm);
    
    // Function to generate the UI for all sections
    function generateSectionsUI() {
        const sectionsContainer = document.getElementById('sections-container');
        
        sectionConfig.forEach(section => {
            // Create section container
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'section';
            sectionDiv.id = `section-${section.id}`;
            
            // Add section title
            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = `${section.id}. ${section.title}`;
            sectionDiv.appendChild(sectionTitle);

            // Add multi-select instructions if applicable
            if (multiSelectSections.includes(section.id)) {
                const instructions = document.createElement('p');
                instructions.className = 'multi-select-instructions';
                
                // Special message for the Physical Characteristics section
                if (section.id === 2) {
                    instructions.textContent = 'Select all physical characteristics for a complete character!';
                } else {
                    instructions.textContent = 'Select any options for this section!';
                }
                
                sectionDiv.appendChild(instructions);
            }
            
            // Add category buttons container
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            optionsContainer.id = `options-${section.id}`;
            
            // Add category buttons
            section.categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.setAttribute('data-section', section.id);
                button.setAttribute('data-type', category.id);
                button.textContent = category.label;
                
                // Add event listener to button
                button.addEventListener('click', () => {
                    // Handle button click differently depending on section type
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        handleMultiSelectButtonClick(button, section.id, category.id);
                    } else {
                        // For single-select sections
                        handleSingleSelectButtonClick(button, section.id, category.id);
                    }
                });
                
                optionsContainer.appendChild(button);
            });
            
            sectionDiv.appendChild(optionsContainer);
            
            // Add dropdown containers for each category
            section.categories.forEach(category => {
                const dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'dropdown-container';
                dropdownContainer.id = `dropdown-${section.id}-${category.id}`;
                
                // Create select element
                const select = document.createElement('select');
                select.id = `select-${section.id}-${category.id}`;
                
                // Add default option
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = `--Select ${category.label} Option--`;
                select.appendChild(defaultOption);
                
                // Add options
                const options = section.options[category.id];
                if (options) {
                    options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.id;
                        optionElement.textContent = option.label;
                        select.appendChild(optionElement);
                    });
                }
                
                // Add change event listener to select
                select.addEventListener('change', (e) => {
                    if (!characterSelections[section.id]) {
                        characterSelections[section.id] = {};
                    }
                    
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        if (!characterSelections[section.id].options) {
                            characterSelections[section.id].options = [];
                        }
                        
                        if (!characterSelections[section.id].categories) {
                            characterSelections[section.id].categories = [];
                        }
                        
                        // Find the corresponding dropdown for this category
                        const categoryIndex = characterSelections[section.id].categories.indexOf(category.id);
                        
                        if (categoryIndex !== -1 && e.target.value) {
                            // Update existing selection
                            characterSelections[section.id].options[categoryIndex] = e.target.value;
                        }
                    } else {
                        // For single-select sections
                        characterSelections[section.id].option = e.target.value;
                    }
                });
                
                dropdownContainer.appendChild(select);
                sectionDiv.appendChild(dropdownContainer);
            });
            
            sectionsContainer.appendChild(sectionDiv);
        });
    }

    // Handle single selection button click
    function handleSingleSelectButtonClick(button, sectionId, categoryId) {
        // Remove 'selected' class from all buttons in this section
        document.querySelectorAll(`.option-button[data-section="${sectionId}"]`).forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add 'selected' class to this button
        button.classList.add('selected');
        
        // Hide all dropdown containers in this section
        document.querySelectorAll(`div[id^="dropdown-${sectionId}-"]`).forEach(container => {
            container.classList.remove('active');
        });
        
        // Show the dropdown for this category
        const dropdownId = `dropdown-${sectionId}-${categoryId}`;
        document.getElementById(dropdownId).classList.add('active');
        
        // Update selection
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {};
        }
        characterSelections[sectionId].category = categoryId;
    }

    // Handle multi-selection button click
    function handleMultiSelectButtonClick(button, sectionId, categoryId) {
        // Initialize the selections for this section if not already done
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {
                categories: [],
                options: []
            };
        }
        
        if (!characterSelections[sectionId].categories) {
            characterSelections[sectionId].categories = [];
        }
        
        if (!characterSelections[sectionId].options) {
            characterSelections[sectionId].options = [];
        }
        
        const isSelected = button.classList.contains('selected');
        
        // If already selected, deselect it
        if (isSelected) {
            button.classList.remove('selected');
            
            // Remove from selections
            const index = characterSelections[sectionId].categories.indexOf(categoryId);
            if (index !== -1) {
                characterSelections[sectionId].categories.splice(index, 1);
                characterSelections[sectionId].options.splice(index, 1);
            }
            
            // Hide the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.remove('active');
        } 
        // If not selected, select it (no limit on number of selections)
        else {
            button.classList.add('selected');
            
            // Add to selections
            characterSelections[sectionId].categories.push(categoryId);
            characterSelections[sectionId].options.push('');
            
            // Show the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.add('active');
        }
    }
    
    // Function to generate the character based on selections
    function generateCharacter() {
        // Validate required sections have selections (only the single-select sections)
        let isValid = true;
        let missingSection = '';
        
        // Check each section
        for (let i = 1; i <= 3; i++) {
            // Skip validation for section 2 (Physical Characteristics) since it's now multi-select
            if (i === 2) continue;
            
            // For the other required sections (non-multi-select), require a selection
            if (!characterSelections[i] || !characterSelections[i].category || !characterSelections[i].option) {
                isValid = false;
                missingSection = i;
                break;
            }
        }
        
        if (!isValid) {
            alert(`Please make a selection for section ${missingSection} before generating your character!`);
            return;
        }
        
        // Generate character result
        const resultContent = document.getElementById('result-content');
        resultContent.innerHTML = ''; // Clear previous results
        
        // Add each section's result
        for (let i = 1; i <= sectionConfig.length; i++) {
            const selection = characterSelections[i];
            
            // Create result item
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            // Create label
            const label = document.createElement('div');
            label.className = 'result-label';
            label.textContent = `${i}. ${sectionConfig[i-1].title}:`;
            resultItem.appendChild(label);
            
            // Create value and description
            if (multiSelectSections.includes(i)) {
                // For multi-select sections
                // Only display selections if there are any
                if (selection && selection.categories && selection.categories.length > 0) {
                    for (let j = 0; j < selection.categories.length; j++) {
                        const categoryId = selection.categories[j];
                        const option = selection.options[j];
                        
                        // Skip if no option was selected
                        if (!option) {
                            continue;
                        }
                        
                        const value = document.createElement('div');
                        value.className = 'result-value';
                        
                        // Use the option's label if possible
                        const category = sectionConfig[i-1].categories.find(cat => cat.id === categoryId);
                        const optionObj = sectionConfig[i-1].options[categoryId].find(opt => opt.id === option);
                        
                        value.textContent = optionObj ? optionObj.label : option;
                        resultItem.appendChild(value);
                        
                        const description = document.createElement('div');
                        description.className = 'result-description';
                        
                        // Check if window.characterDescriptions exists and has the property
                        if (window.characterDescriptions && window.characterDescriptions[option]) {
                            description.textContent = window.characterDescriptions[option];
                        } else {
                            description.textContent = 'A spooky character with macabre charm!';
                        }
                        
                        resultItem.appendChild(description);
                    }
                } else {
                    // If no selections were made in this multi-select section
                    const noSelection = document.createElement('div');
                    noSelection.className = 'result-value';
                    noSelection.textContent = "No selection made";
                    resultItem.appendChild(noSelection);
                }
            } else {
                // For single-select sections
                const value = document.createElement('div');
                value.className = 'result-value';
                
                // Get the selected option's label
                let selectedOptionLabel = "Unknown";
                if (selection && selection.option) {
                    const categoryId = selection.category;
                    const options = sectionConfig[i-1].options[categoryId];
                    const selectedOption = options.find(opt => opt.id === selection.option);
                    selectedOptionLabel = selectedOption ? selectedOption.label : selection.option;
                }
                
                value.textContent = selectedOptionLabel;
                resultItem.appendChild(value);
                
                const description = document.createElement('div');
                description.className = 'result-description';
                
                // Safe access to window.characterDescriptions
                if (window.characterDescriptions && selection && selection.option && window.characterDescriptions[selection.option]) {
                    description.textContent = window.characterDescriptions[selection.option];
                } else {
                    description.textContent = 'A spooky character with macabre charm!';
                }
                
                resultItem.appendChild(description);
            }
            
            // Add to result content
            resultContent.appendChild(resultItem);
        }
        
        // Generate character name
        generateCharacterName();
        
        // Show the result
        document.getElementById('result').style.display = 'block';
        
        // Scroll to the result
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Function to generate a gothic character name
    function generateCharacterName() {
        // Gothic first name options
        const firstNameOptions = [
            "Mortimer", "Elvira", "Raven", "Edgar", "Lenore", "Vincent", "Lillith", "Dorian", 
            "Carmilla", "Thaddeus", "Wednesday", "Lucien", "Drusilla", "Barnabas", "Pandora"
        ];
        
        // Gothic last name options
        const lastNameOptions = [
            "Addams", "Usher", "Graves", "Nightshade", "Black", "Grimm", "Ravencroft", "Darkwood",
            "Crow", "Coffin", "Poe", "Haunt", "DeCrypt", "Doombringer", "Shadow"
        ];
        
        // Generate random name
        const firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        const lastName = lastNameOptions[Math.floor(Math.random() * lastNameOptions.length)];
        
        // Create the name result item
        const resultContent = document.getElementById('result-content');
        const nameItem = document.createElement('div');
        nameItem.className = 'result-item name-result';
        
        const nameLabel = document.createElement('div');
        nameLabel.className = 'result-label';
        nameLabel.textContent = "Character Name:";
        
        const nameValue = document.createElement('div');
        nameValue.className = 'result-value';
        nameValue.style.fontSize = "1.2em";
        nameValue.style.padding = "10px 20px";
        nameValue.style.backgroundColor = "rgba(100, 0, 0, 0.2)";
        nameValue.style.border = "2px solid #800000";
        nameValue.textContent = `${firstName} ${lastName}`;
        
        nameItem.appendChild(nameLabel);
        nameItem.appendChild(nameValue);
        
        // Insert at the beginning of the result content
        resultContent.insertBefore(nameItem, resultContent.firstChild);
    }
    
    // Function to reset the form
    function resetForm() {
        // Clear selections
        document.querySelectorAll('.option-button').forEach(button => {
            button.classList.remove('selected');
        });
        
        // Hide dropdowns
        document.querySelectorAll('.dropdown-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Reset selects
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Clear selections object
        for (let i = 1; i <= sectionConfig.length; i++) {
            if (multiSelectSections.includes(i)) {
                characterSelections[i] = {
                    categories: [],
                    options: []
                };
            } else {
                characterSelections[i] = {};
            }
        }
        
        // Hide result
        document.getElementById('result').style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});