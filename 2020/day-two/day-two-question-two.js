const data = require('./data');

const parsed = data.map((item) => {
  const [_ignore, first, second, char, pw] = item.match(/(\d*)-(\d*) ([^:]*): (.*)/);
  
  return { req: [first, second], chars: char.split('.'), pw };
});

const invalids = {};

parsed.forEach(({ req, chars, pw }, index) => {
    const isFirstLetter = pw[req[0] - 1] === chars[0];
    const isSecondLetter = pw[req[1] - 1] === (chars[1] || chars[0]);
    
    if ((isFirstLetter && isSecondLetter) || (!isFirstLetter && !isSecondLetter)) {
        console.log(`invalid ${index}`);
        invalids[index] = { pw, isFirstLetter, isSecondLetter };
    }
});

console.log(data.length - Object.keys(invalids).length); // 251