function matchWords(text) {
   let words = text.split(/\W+/);
    words = words.filter(s => s != '');
    console.log(words.join('|'));
}
matchWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !');
