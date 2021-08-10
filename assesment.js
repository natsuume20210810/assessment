removeAllChirdren(tweetDivided);
const anchor = document.createElement('a');
const hrefValue ='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

anchor.setAttribute('href',hrefValue);
anchor.className='twitter-hashtag-button';
anchor.setAttribute('data-text','診断結果の文章');
anchor.innerText = 'Tweet #あなたのいいところ';

tweetDivided.appendChild(anchor);