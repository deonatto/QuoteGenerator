let quotes = ['The Best Way To Get Started Is To Quit Talking And Begin Doing.',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
'Don’t Let Yesterday Take Up Too Much Of Today.',
'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
'We Generate Fears While We Sit. We Overcome Them By Action.',
'The Man Who Has Confidence In Himself Gains The Confidence Of Others.',
'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.',
'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.'];


function newQuotes() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
