'use strict';

const clrs = {
  b:  [ 0,   0,   255 ],
  r:  [ 255, 0,   0 ],
  g:  [ 0,   255, 0 ],
  gr: [ 80,  80,  80 ],
  y:  [ 255, 255, 0 ],
  pu: [ 255, 0,   255 ],
  o:  [ 255, 125, 0 ],
  c:  [ 0,   255, 255 ],
  w:  [ 255, 255, 255 ],
  k:  [ 0,   0,   0 ],
  br: [ 125, 80,  0 ],
  pi: [ 255, 80, 125 ]
};

const settings = {
  size: 20,
  frameRate: 16,
  clrs
};

const program = {
  id: null,
  updated: 0,
  name: 'Jump Man',
  text: `10[c g];
10[g c];
3[c g]     6r                    4[c g];
2[g c] g   10r                   c 2[g c];
2[c g] c   3br 3y k y            g 3[c g];
2[g c]     br y br 4y k 3y       c 2[g c];
2[c g]     br y 2br 4y k 3y      2[c g];
2[g c]     2br 5y 4k             c 2[g c];
3[c g]     8y                    3[c g];
2[g c] g   2r b 2r b r           4[g c];
2[c g]     3r b 2r b 3r          3[c g];
g c g      4r 4b 4r              c 2[g c];
c g c      2y r b o 2b o b r 2y  g 2[c g];
g c g      3y 6b 3y              c 2[g c];
c g c      2y 8b 2y              g 2[c g];
2[g c] g   3b g c 3b             c 3[g c];
2[c g]     3k 2[g c] 3k          3[c g];
g c g      4k 2[c g] 4k          c 2[g c];
2[5[2gr 2br];]`,
  settings
};

module.exports = {
  program,
  settings,
  clrs
};
