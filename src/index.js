import Post from '@/models/Post';
import json from './assets/json.json';
import ServerImg from './assets/img.png';
import xml from './assets/data.xml';
import './comp';
import * as $ from 'jquery';
import './styles/style.css';
import './styles/cont.scss';

class Bbl {
  static id = Date.now();
  #isBbel = 123;
  get isBable() {
    return this.#isBbel;
  }
}

async function r() {
  return new Promise((resolve, reject) => {
    resolve('rrr');
  });
}
(async () => {
  const a = await r();
  console.log(a);
})();

const a = new Bbl();

const post = new Post('webpack title', ServerImg);
$('pre').html(post.toString());

import('lodash').then(()=>{
    console.log('lodash', _.random(0,42,true))
})

console.log('post to string', post.toString());
console.log('json', json);
console.log('xml', xml);
