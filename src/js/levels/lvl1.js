
/* LEVEL 1
-----------------*/

const displayCSSLv1 = `
.container {
  /* Your code goes here */
}`;

const startCSSLvl1 = `
.container {
  background: lightgray;
  max-width: 960px;
  margin: 10px auto;
  min-height: 100vh;
}
.box {
  background: aquamarine;
  width: 50px;
  height: 50px;
}
`;

const solutionCSSLvl1 = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
};

const HintLvl1 = {
  first: 'You should display flex',
  second: 'You would like to justify the content',
  third: 'remember that the box is an item inside the container and you want to align it vertically',
};

const preHTML1 = '';

const postHTML1 = '';

const displayHTML1 = `
<div class="container">
  <div class="box"></div>
</div>
`;


const cssLevels = {
  one: {
    startCSS: startCSSLvl1,
    displayCSS: displayCSSLv1,
    solution: solutionCSSLvl1,
    hint: HintLvl1,
    preHTML: preHTML1,
    postHTML: postHTML1,
    displayHTML: displayHTML1,
    complete: false,
  },
};

export default cssLevels;
