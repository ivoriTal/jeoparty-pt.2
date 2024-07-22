$(document).ready(function() {
    const NUM_CATEGORIES = 6;
    const NUM_QUESTIONS_PER_CATEGORY = 5;

    const hardcodedQuestions = [
        { question: "What is the largest country in the world?", answer: "Russia" },
        { question: "What is the name of the tallest mountain in the world?", answer: "Mount Everest" },
        { question: "What country has the largest population in the world?", answer: "China" },
        { question: "What is the name of the longest river in Africa?", answer: "The Nile River" },
        { question: "What is the capital of Mexico?", answer: "Mexico City" },
        { question: "What U.S. state is home to no documented poisonous snakes?", answer: "Alaska" },

        { question: "Who did Pocahontas marry?", answer: "John Rolfe" },
        { question: "What was the name of the Pilgrim's ship?", answer: "The Mayflower" },
        { question: "What year were the first enslaved Africans brought to American colonies?", answer: "1619" },
        { question: "Who was the confederate president during the Civil War?", answer: "Jefferson Davis" },
        { question: "What year did the United States enter World War I?", answer: "1917" },
        { question: "When was the first U.S dollar printed?", answer: "1862" },

        { question: "Kim kardashian notably dated what Saturday Night Live Alumni?", answer: "Pete Davidson" },
        { question: "Joe Exotic is the focus of what Netflix documentary series?", answer: "Tiger King" },
        { question: "According to Billboard, who had the highest-grossing rock tour of 2023?", answer: "Coldplay" },
        { question: "What team took home the Vince Lombardi Trophy in the 2021 Super Bowl?", answer: "The Tampa Bay Buccaneers" },
        { question: "In 2023, what purple ice cream drink gained notoriety on social media after users pretended to die upon drinking it?", answer: "The Grimace Shake" },
        { question: "Tom Kenny voices what popular TV cartoon character?", answer: "Spongebob Squarepants" },

        { question: "Which spooky 2001 GameCube game starring Marios brother got a reboot for Nintendo Switch in 2019?", answer: "Luigi's Mansion" },
        { question: "Mendicant Bias and Offensive Bias are fictional AIs in what holy video game franchise that shares its name with a Beyonce song?", answer: "Halo" },
        { question: "Which video game console released in 2006 pioneered the use of motion controls in its gameplay?", answer: "Nintendo Wii" },
        { question: "What North Carolina-based video game company created the 2018 breakout hit Fortnite?", answer: "Epic Games" },
        { question: "Released in 2004 by Blizzard Entertainment and set in the fictional universe of Azeroth, what is the name of the computer game that became the world's most popular MMORPG?", answer: "World of Warcraft" },
        { question: "In Super Mario Kart, the first game in Nintendo's racing franchise, which of the playable characters has the shortest names?", answer: "Toad" },

        { question: "What was the breed of the famous cartoon dog, Scooby Doo?", answer: "Great Dane" },
        { question: "What is a group of puppies called?", answer: "A litter" },
        { question: "What is the fastest breed of dog?", answer: "Greyhound" },
        { question: "What is the worlds most popular dog breed?", answer: "Labradors" },
        { question: "Which dog breed can you get in either Standard, Miniature, or Toy sizes?", answer: "Poodles" },
        { question: "How many eyelids does a dog have?", answer: "Three" },

        { question: "At what temperature does chocolate melt?", answer: "93 degrees Fahrenheit" },
        { question: "What was the occupation of the inventor of cotton candy?", answer: "Dentist" },
        { question: "Which candy bar shares a name with our galaxy?", answer: "Milky Way" },
        { question: "What do the M's in M&Ms stand for?", answer: "The names of the candys creators. Mars and Murrie" },
        { question: "What movie (based on a childrens book) led to the  creation of real candy like Nerds and Everlasting Gobstoppers?", answer: "Willy Wonka and the Chocolate Factory" },
        { question: "What marshmallow candy comes in unusual flavors like Pumpkin Spice, Caramel Apple, and Sugar Plum?", answer: "Peeps" }
    ];

    // Break questions into categories
    const questionsPerCategory = [
        hardcodedQuestions.slice(0, NUM_QUESTIONS_PER_CATEGORY),
        hardcodedQuestions.slice(NUM_QUESTIONS_PER_CATEGORY, NUM_QUESTIONS_PER_CATEGORY * 2),
        hardcodedQuestions.slice(NUM_QUESTIONS_PER_CATEGORY * 2, NUM_QUESTIONS_PER_CATEGORY * 3),
        hardcodedQuestions.slice(NUM_QUESTIONS_PER_CATEGORY * 3, NUM_QUESTIONS_PER_CATEGORY * 4),
        hardcodedQuestions.slice(NUM_QUESTIONS_PER_CATEGORY * 4, NUM_QUESTIONS_PER_CATEGORY * 5),
        hardcodedQuestions.slice(NUM_QUESTIONS_PER_CATEGORY * 5, NUM_QUESTIONS_PER_CATEGORY * 6)
    ];

    function setupGame() {
        $('#categories-row').empty(); // Clear any existing categories
        $('#questions-body').empty(); // Clear any existing questions

        // Hardcoded category titles
        const categoryTitles = ["Geography", "U.S History", "Today's Pop Culture", "Video Gaming", "Dog Culture", "Sweet tooth"];

        // Populate the header with category titles
        for (let title of categoryTitles) {
            $('#categories-row').append(`<th>${title}</th>`);
        }

        // Create a 5x6 grid of question cells with the actual questions
        for (let i = 0; i < NUM_QUESTIONS_PER_CATEGORY; i++) { // Assuming 5 questions per category
            let row = $('<tr></tr>');
            for (let j = 0; j < NUM_CATEGORIES; j++) {
                let question = questionsPerCategory[j][i].question;
                let answer = questionsPerCategory[j][i].answer;
                row.append(`<td class="question" data-question="${question}" data-answer="${answer}">?</td>`);
            }
            $('#questions-body').append(row);
        }

        // Add click event listener to toggle between question and answer
        $('.question').on('click', function() {
            let cell = $(this);
            if (cell.text() === '?') {
                cell.text(cell.data('question'));
            } else if (cell.text() === cell.data('question')) {
                cell.text(cell.data('answer'));
            } else {
                cell.text('?');
            }
        });
    }

    // Initial setup of the game
    setupGame();

    // Handle restart button click to reset the game
    $('#restart').on('click', function(event) {
        event.preventDefault(); // Prevent any default action
        setupGame();
    });
});
