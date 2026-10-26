const fs = require('fs');
const output = fs.readFileSync('data/elements.js', 'utf8');

// Extract the H element
const startEl = output.indexOf('{z:1,');
const endEl = output.indexOf('{z:2,');
const hEl = output.substring(startEl, endEl - 1); // remove trailing comma

console.log('H element length:', hEl.length);
console.log('Ends with:', hEl.substring(hEl.length - 80));

// Check depth
let depth = 0, inSQ = false, inDQ = false;
for (let i = 0; i < hEl.length; i++) {
  const ch = hEl[i];
  if (inSQ) { if (ch === "'" && hEl[i-1] !== '\\') inSQ = false; }
  else if (inDQ) { if (ch === '"' && hEl[i-1] !== '\\') inDQ = false; }
  else {
    if (ch === "'") inSQ = true;
    else if (ch === '"') inDQ = true;
    else if (ch === '{') depth++;
    else if (ch === '}') depth--;
  }
}
console.log('Depth:', depth, 'inSQ:', inSQ, 'inDQ:', inDQ);

// Try parsing
try {
  new Function('return (' + hEl + ');')();
  console.log('Parse OK');
} catch(e) {
  console.log('Parse ERR:', e.message.substring(0, 150));
  // Find approximate location
  const msg = e.message;
  console.log('Full error:', msg);
}
