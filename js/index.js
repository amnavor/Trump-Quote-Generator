$( document ).ready(function() {
	randomize();

function randomize() {
  var quotesList= ["You know, it really doesn’t matter what the media write as long as you’ve got a young and beautiful piece of ass.", "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", "The U.S. will invite El Chapo, the Mexican drug lord who just escaped prison, to become a U.S. citizen because our 'leaders' can't say no", "I will build a great wall — and nobody builds walls better than me, believe me —and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words", "When Mexico sends its people, they're not sending the best. They're not sending you, they're sending people that have lots of problems and they're bringing those problems with us. They’re bringing drugs. They’re bringing crime. They’re rapists. ... And some, I assume, are good people.", "The only kind of people I want counting my money are little short guys that wear yamakas every day.", "If I were running 'The View,' I'd fire Rosie [O'Donnell]. I mean, I'd look her right in that fat, ugly face of hers, I'd say, 'Rosie, you're fired.", "@ariannahuff [Arianna Huffington] is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.", "If you can’t get rich dealing with politicians, there’s something wrong with you.", "A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate", "He [John McCain] is not a war hero. He's a war hero because he was captured. I like people that weren't captured, OK, I hate to tell you.", "All the women on The Apprentice flirted with me — consciously or unconsciously. That’s to be expected.", "When someone crosses you, my advice is ‘Get Even!’ That is not typical advice, but it is real life advice. If you do not get even, you are just a schmuck!", "The final key to the way I promote is bravado. I play to people's fantasies. People may not always think big themselves, but they can still get very excited by those who do. That's why a little hyperbole never hurts", "If Obama resigns from office NOW, thereby doing a great service to the country — I will give him free lifetime golf at any one of my courses!", "I never attacked him [Rand Paul] on his looks and believe me, there's a lot of subject matter there.", "NBC News just called it 'The Great Freeze' — coldest weather in years. Is our country still spending money on the GLOBAL WARMING HOAX?", "I have a great relationship with the Blacks. I've always had a great relationship with the Blacks.", "I've said if Ivanka weren’t my daughter, perhaps I'd be dating her.", "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog, and will do it again — just watch. He can do much better!", "Sorry losers and haters, but my IQ is one of the highest — and you all know it! Please don't feel so stupid or insecure; it's not your fault.", "My Twitter has become so powerful that I can actually make my enemies tell the truth"];
  var quoteNum=Math.floor(Math.random()*quotesList.length);
  $('.words').text("\""+quotesList[quoteNum]+"\"");}
  
$(".button").on( "click", function() { randomize() 
                                     });
  
});