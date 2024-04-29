function generateRandomQuote() {
    const selectedCategory = categorySelect.value;
    const quote = getRandomQuote(selectedCategory);
    quoteElement.textContent = quote;

    

    // Define file paths for background images based on category
    const backgroundImages = {
        sports: [
            "sports/sports-bg1.jpg",
            "sports/sports-bg2.jpg",
            "sports/sports-bg3.jpg",
            "sports/sports-bg4.jpg",
            "sports/sports-bg5.jpg",
            "sports/sports-bg6.jpg",
            "sports/sports-bg7.jpg",
            "sports/sports-bg8.jpg",
            "sports/sports-bg9.jpg",
            "sports/sports-bg10.jpg"
        ],
        science: [
            "science/science-bg1.jpg",
            "science/science-bg2.jpg",
            "science/science-bg3.jpg",
            "science/science-bg4.jpg",
            "science/science-bg5.jpg",
            "science/science-bg6.jpg",
            "science/science-bg7.jpg",
            "science/science-bg8.jpg",
            "science/science-bg9.jpg",
            "science/science-bg10.jpg"
        ],
        military: [
            "military/military-bg1.jpg",
            "military/military-bg2.jpg",
            "military/military-bg3.jpg",
            "military/military-bg4.jpg",
            "military/military-bg5.jpg",
            "military/military-bg6.jpg",
            "military/military-bg7.jpg",
            "military/military-bg8.jpg",
            "military/military-bg9.jpg",
            "military/military-bg10.jpg"
        ],
        fitness: [
            "fitness/fitness-bg1.jpg",
            "fitness/fitness-bg2.jpg",
            "fitness/fitness-bg3.jpg",
            "fitness/fitness-bg4.jpg",
            "fitness/fitness-bg5.jpg",
            "fitness/fitness-bg6.jpg",
            "fitness/fitness-bg7.jpg",
            "fitness/fitness-bg8.jpg",
            "fitness/fitness-bg9.jpg",
            "fitness/fitness-bg10.jpg"
        ],
        relationships: [
            "relationships/relationships-bg1.jpg",
            "relationships/relationships-bg2.jpg",
            "relationships/relationships-bg3.jpg",
            "relationships/relationships-bg4.jpg",
            "relationships/relationships-bg5.jpg",
            "relationships/relationships-bg6.jpg",
            "relationships/relationships-bg7.jpg",
            "relationships/relationships-bg8.jpg",
            "relationships/relationships-bg9.jpg",
            "relationships/relationships-bg10.jpg"
        ]
    };

    // Get a random index to select a background image from the array
    let randomIndex = Math.floor(Math.random() * 10);
    let backgroundImage = `url('${backgroundImages[selectedCategory][randomIndex]}')`;

    // Set background image
    document.body.style.backgroundImage = backgroundImage;
}