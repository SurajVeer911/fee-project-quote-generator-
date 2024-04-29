const quotes = [
    
    { category: "sports", quote: "I've failed over and over and over again in my life and that is why I succeed. - Michael Jordan" },
    { category: "sports", quote: "You miss 100% of the shots you don't take. - Wayne Gretzky" },
    { category: "sports", quote: "It's not whether you get knocked down; it's whether you get up. - Vince Lombardi" },
    { category: "sports", quote: "The harder the battle, the sweeter the victory. - Les Brown" },
    { category: "sports", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill" },
    { category: "science", quote: "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson" },
    { category: "science", quote: "Science is not only a disciple of reason but, also, one of romance and passion. - Stephen Hawking" },
    { category: "science", quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...' - Isaac Asimov" },
    { category: "science", quote: "We are all connected to everyone and everything in the universe. Therefore, everything one does as an individual affects the whole. - Neil deGrasse Tyson" },
    { category: "science", quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov" },
    { category: "military", quote: "The supreme art of war is to subdue the enemy without fighting. - Sun Tzu" },
    { category: "military", quote: "In the midst of chaos, there is also opportunity. - Sun Tzu" },
    { category: "military", quote: "No battle plan survives contact with the enemy. - Helmuth von Moltke the Elder" },
    { category: "military", quote: "Bravery is being the only one who knows you're afraid. - David Hackworth" },
    { category: "military", quote: "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war. - Douglas MacArthur" },
    { category: "fitness", quote: "The only bad workout is the one that didn't happen." },
    { category: "fitness", quote: "Strive for progress, not perfection." },
    { category: "fitness", quote: "The successful warrior is the average man, with laser-like focus. - Bruce Lee" },
    { category: "fitness", quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity. - John F. Kennedy" },
    { category: "fitness", quote: "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh" },
    { category: "relationships", quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed. - Carl Jung" },
    { category: "relationships", quote: "A successful marriage requires falling in love many times, always with the same person. - Mignon McLaughlin" },
    { category: "relationships", quote: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves. - Victor Hugo" },
    { category: "relationships", quote: "Love is composed of a single soul inhabiting two bodies. - Aristotle" },
    { category: "relationships", quote: "A healthy relationship is one where two independent people just make a deal that they will help make the other person the best version of themselves. - Unknown" },
];

const quoteElement = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');
const categorySelect = document.getElementById('category');

function getRandomQuote(category = "all") {
    let filteredQuotes = quotes;
    if (category !== "all") {
        filteredQuotes = quotes.filter(quote => quote.category === category);
    }
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex].quote;
}

function generateRandomQuote() {
    const selectedCategory = categorySelect.value;
    const quote = getRandomQuote(selectedCategory);
    quoteElement.textContent = quote;

    

    
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

    
    let randomIndex = Math.floor(Math.random() * 10);
    let backgroundImage = `url('${backgroundImages[selectedCategory][randomIndex]}')`;

    
    document.body.style.backgroundImage = backgroundImage;
}

function copyToClipboard() {
    const quote = quoteElement.textContent;
    navigator.clipboard.writeText(quote).then(() => {
        alert('Quote copied to clipboard!');
    }).catch((error) => {
        console.error('Error copying text: ', error);
    });
}

function tweetQuote() {
    const quote = quoteElement.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', generateRandomQuote);
copyBtn.addEventListener('click', copyToClipboard);
tweetBtn.addEventListener('click', tweetQuote);


generateRandomQuote();


categorySelect.addEventListener('change', generateRandomQuote);
