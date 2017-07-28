// Random Quote Generator
var quotes = [['Blessed are the meek: for they shall possess the land:', '-Matthew 5:4'],
    ['Blessed are they that hunger and thirst after justice: for they shall have their fill:', '-Matthew 5:6'],
    ['Blessed are they that mourn: for they shall be comforted:', '-Matthew 5:5'],
    ['Blessed are the merciful: for they shall obtain mercy:', '-Matthew 5:7'],
    ['Blessed are the clean of heart: they shall see God:', '-Matthew 5:8'],
    ['Blessed are the peacemakers: for they shall be called the children of God:', '-Matthew 5:9'],
    ['Blessed are they that suffer persecution for justice\' sake: for theirs is the kingdom of heaven.:', '-Matthew 5:10'],
    ['Blessed are ye when they shall revile you, and persecute you, and speak all that is evil against you, untruly, for my sake ','-Matthew 5:11'],
    ['Be glad and rejoice for your reward is very great in heaven. For so they persecuted the prophets that were before you','-Matthew 5:12'],
    ['You are the salt of the earth. But if the salt lose its savour, wherewith shall it be salted? It is good for nothing anymore but to be cast out, and to be trodden on by men', ':Matthew 5:13'],
    ['You are the light of the world. A city seated on a mountain cannot be hid', '-Matthew 5:14'],
    ['Neither do men light a candle and put it under a bushel, but upon a candlestick, that it may shine to all that are in the house:', '-Matthew 5:15'],
    ['So let your light shine before men, that they may see your good works, and glorify your Father who is in heaven:', '-Matthew 5:16'],
    ['Do not think that I am come to destroy the law, or the prophets. I am not come to destroy, but to fulfil:', '-Matthew 5:17'],
    ['For amen I say unto you, till heaven and earth pass, one jot, or one tittle shall not pass of the law, till all be fulfilled', '-Matthew 5:18'],
    ['He therefore that shall break one of these least commandments, and shall so teach men shall be called the least in the kingdom of heaven. But he that shall do and teach, he shall be called great in the kingdom of heaven:', '-Matthew 5:19'],
    ['For I tell you, that unless your justice abound more than that of the scribes and Pharisees, you shall not enter into the kingdom of heaven', '-Matthew 5:20'],
    ['But I say to you, that whosoever shall look on a woman to lust after her, hath already committed adultery with her in his heart.',':Matthew 5:28'],
    ['But let your speech be yea, yea: no, no: and that which is over and above these, is of evil', '-Matthew 5:37'],
    ['You have heard that it hath been said: An eye for an eye, and a tooth for a tooth. But I say to you not to resist evil: but if one strike thee on thy right cheek, turn to him also the other','-Matthew 5:38-39'],
    ['And whosoever will force thee one mile, go with him other two','Matthew 5:41'],
    ['Give to him that asketh of thee, and from him that would borrow of thee turn not away', '-Matthew 5:42'],
    ['You have heard that it hath been said, Thou shalt love thy neighbour, and hate thy enemy. But I say to you, Love your enemies: do good to them that hate you: and pray for them that persecute and calumniate you:', '-Matthew 5:33-44'],
    ['Be you therefore perfect, as also your heavenly Father is perfect.:', '-Matthew 5:48'],
    ['Take heed that you do not your justice before men, to be seen by them: otherwise you shall not have a reward of your Father who is in heaven:', '-Matthew 6:1'],
    ['Therefore when thou dost an alms-deed, sound not a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may be honoured by men. Amen I say to you, they have received their reward','Matthew 6:2'],
    ['But when thou dost alms, let not thy left hand know what thy right hand doth', '-Matthew 6:3'],
    ['That thy alms may be in secret, and thy Father who seeth in secret will repay thee', 'Matthew 6:4'],
    ['And when ye pray, you shall not be as the hypocrites, that love to stand and pray in the synagogues and corners of the streets, that they may be seen by men: Amen I say to you, they have received their reward', 'Matthew 6:5'],
    ['But thou when thou shalt pray, enter into thy chamber, and having shut the door, pray to thy Father in secret, and thy father who seeth in secret will repay thee', 'Matthew 6:6'],
    ['And when you are praying, speak not much, as the heathens. For they think that in their much speaking they may be heard', '-Matthew 6:7'],
    ['And when you fast, be not as the hypocrites, sad. For they disfigure their faces, that they may appear unto men to fast. Amen I say to you, they have received their reward', '-Matthew 6:16'],
    ['Lay not up to yourselves treasures on earth: where the rust, and moth consume, and where thieves break through, and steal','Matthew 6:19'],
    ['But lay up to yourselves treasures in heaven: where neither the rust nor moth doth consume, and where thieves do not break through, nor steal',':Matthew 6:20'],
    ['For where thy treasure is, there is thy heart also', 'Matthew 6:21'],
    ['The light of thy body is thy eye. If thy eye be single, thy whole body shall be lightsome','-Matthew 6:22'],
    ['No man can serve two masters. For either he will hate the one, and love the other: or he will sustain the one, and despise the other. You cannot serve God and mammon', 'Matthew 6:24'],
    ['Behold the birds of the air, for they neither sow, nor do they reap, nor gather into barns: and your heavenly Father feedeth them. Are not you of much more value than they?','-Matthew 6:26']
];
var index = [];
var randomQuotes;

function randomQuote() {
    randomQuotes = Math.floor(Math.random() * quotes.length);
    for (var i = 0;i< quotes.length;i++){
        document.getElementById("quoteText").innerHTML = quotes[randomQuotes][0];
        document.getElementById("source").innerHTML = quotes[randomQuotes][1];
        return quotes[randomQuotes];
    }
}
randomQuote();

function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + quotes[randomQuotes], '', 'width=700, height=500, left=400, top=20');
}
