//*/
const tape = require('tape');
const tape_dom = require('tape-dom');
tape_dom.installCSS();
tape_dom.stream(tape);

window.test = tape;