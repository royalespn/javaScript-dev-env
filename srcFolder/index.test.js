import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () =>{
it("should pass---its pretty simple",()=>{
expect(true).to.equal(true);
});
});


describe("index.html", ()=>{
it("should sy hello",(done)=>{
const index = fs.readFileSync('./srcFolder/index.html',"utf-8");
jsdom.env(index, function(err,window){
  const h1 = window.document.getElementsByTagName('h1')[0];
  expect(h1.innerHTML).to.equal("hello world - f1500");
  done();
  window.close();
});
});
});
