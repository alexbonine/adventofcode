const data = require('./data');

const parsed = data.map((item) => {
  const [_ignore, min, max, char, pw] = item.match(/(\d*)-(\d*) ([^:]*): (.*)/);
  
  return { min, max, chars: char.split('.'), pw };
});

const countLetters = (word) => [...word].reduce((accum, char) => {
    if (accum[char]) {
        accum[char] += 1;
    } else {
        accum[char] = 1;
    }
    
    return accum;
}, {});

const invalids = {};

parsed.forEach(({ min, max, chars, pw }, index) => {
    const letters = countLetters(pw);
    
    for(let i = 0; i < chars.length; i += 1) {
        const count = letters[chars[i]] || 0;
        
        if (count < min || count > max) {
            if (!invalids[index]) {
                invalids[index] = { pw, issues: [] };
            }
            
            invalids[index].issues.push({ letter: chars[i], min, max, count });
        }
    }
});

console.log(data.length - Object.keys(invalids).length);