import { gsap } from 'gsap';

const tl = gsap.timeline();

tl.set(
  '#bottomLeftLine',
  {
    scaleY: 0.25,
    transformOrigin: 'center top',
  },
  0
);

tl.set(
  '.logo-line-1, .logo-line-2',
  {
    y: '100%',
  },
  0
);

tl.set('.logo-container', {
  lineHeight: 1.5,
});

tl.fromTo(
  '#logoBottomLine',
  {
    x: '-25%',
    scaleX: 0.5,
    transformOrigin: 'left',
  },
  {
    x: '-5%',
    scaleX: 0.55,
    duration: 0.8,
    ease: 'power3.in',
  },
  0
);

tl.fromTo(
  '#logoTopLine',
  {
    scaleX: 0.25,
    transformOrigin: 'left',
  },
  {
    scaleX: 0.5,
    duration: 0.8,
    ease: 'power3.in',
  },
  0
);

tl.to(
  '.logo-container',
  {
    lineHeight: 1.25,
    duration: 0.2,
  },
  0.8
);

tl.to(
  '.logo-line-1, .logo-line-2',
  {
    y: '0%',
    duration: 0.4,
  },
  0.8
);

tl.to(
  '#logoLeftLine',
  {
    scaleY: 2,
    transformOrigin: 'top',
    duration: 0.4,
  },
  0.8
);

// 1.2

tl.to(
  '#logoLeftLine',
  {
    scaleY: 6,
    duration: 0.8,
    ease: 'power3.in',
  },
  1.2
);

tl.to(
  '#bottomLeftLine',
  {
    scaleY: 2,
    transformOrigin: 'center top',
    duration: 0.8,
    ease: 'power3.in',
  },
  1.2
);

tl.to(
  '#logoLineGroup',
  {
    y: '-400%',
    duration: 0.8,
    ease: 'power3.in',
  },
  1.2
);

/**tl.to(
  '.logo-line-1, .logo-line-2',
  {
    y: '-400%',
    duration: 0.4,
  },
  2
);**/

/**tl.to(
  '.logo-container',
  {
    justifyContent: 'flex-start',
    duration: 0.7,
  },
  2
);**/
