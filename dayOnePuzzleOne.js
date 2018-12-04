//https://adventofcode.com/2018/day/1/input 
const splitByNewLine = document.querySelector('pre').textContent.split('\n');
let total = 0;

splitByNewLine.forEach((numStr) => {
  if (numStr.indexOf('+') >= 0) {
    total += Number(numStr.slice(1));
	} else {
		total -=  Number(numStr.slice(1));
	}
});
//answer is 505
