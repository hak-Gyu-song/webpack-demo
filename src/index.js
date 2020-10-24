// CommonJS spec require, export

// import {circumference} from "./circle";

const _ =  require('lodash');
import './style.css';
import './hello.scss';
import {area, circumference} from './js/circle';
import cube from './js/cube';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!!', area(5),circumference(5)], ' ');

  return element;
}

console.log(cube(5));


document.body.appendChild(component());