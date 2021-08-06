const quotes=[
    {
        quote: "Men are born to succeed, not fail.",
        author: "Henry David Thoreau"
    },
    {
        quote: "What a beautiful fix we are in now; peace has been declared.",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "Mankind have a great aversion to intellectual labor; but even supposing knowledge to be easily attainable, more people would be content to be ignorant than would take even a little trouble to acquire it.",
        author: "Samuel Johnson"
    },
    {
        quote: "The person who seeks all their applause from outside has their happiness in another's keeping.",
        author: "Dale Carnegie"
    },
    {
        quote: "Do you want to spend the rest of your life selling sugared water or do you want a chance to change the world?",
        author: "Steve Jobs"
    },
    {
        quote: "Your parents weren't always like this, they only became this way after you came along.",
        author: "Bill Gates"
    },
    {
        quote: "He that is content. Who is that? Nobody.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Virtue is not left to stand alone. He who practices it will have neighbors.",
        author: "Confucius"
    },
    {
        quote: "Before I was shot, I always thought that I was more half-there than all-there - I always suspected that I was watching TV instead of living life. Right when I was being shot and ever since, I knew that I was watching television.",
        author: "Andy Warhol"
    },
    {
        quote: "Forgive many things in others; nothing in yourself.",
        author: "Saint Augustine"
    },
    {
        quote: "The human mind treats a new idea the same way the body treats a strange protein; it rejects it.",
        author: "P. B. Medawar"
    },
    {
        quote: "It is impossible that anything so natural, so necessary, and so universal as death, should ever have been designed by Providence as an evil to mankind.",
        author: "Jonathan Swift"
    },
    {
        quote: "I merely took the energy it takes to pout and wrote some blues.",
        author: "Duke Ellington"
    },
    {
        quote: "Science is one thing, wisdom is another. Science is an edged tool, with which men play like children, and cut their own fingers.",
        author: "Sir Arthur Eddington"
    },
    {
        quote: "Everyone is born with genius, but most people only keep it a few minutes.",
        author: "Edgard Varese"
    },
    {
        quote: "People say that life is the thing, but I prefer reading.",
        author: "Logan Pearsall Smith"
    },
    {
        quote: "Eating everything you want is not that much fun. When you live a life with no boundaries, there's less joy. If you can eat anything you want to, what's the fun in eating anything you want to?",
        author: "Tom Hanks"
    },
    {
        quote: "The higher a man gets, the smaller he seems to those who cannot fly.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "I daresay one profits more by the mistakes one makes off one's own bat than by doing the right thing on somebody's else advice.",
        author: "William Somerset Maugham"
    },
    {
        quote: "The fellow who has no money is poor; the fellow who has nothing but money is poorer still.",
        author: "Unknown"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;