const Controller = require('egg').Controller;
const http = require('http');
const util = require('util');
const https = require('https');
const urlMd = require('url');
const request = require('request-promise')


const {JSDOM} = require('jsdom');

const fs = require('fs');

class reptilesController extends Controller {
  async index() {
    const dHTML = await Promise.all(await this.fetchHandler())
    this.ctx.body = await this.parseHTML(dHTML)
  }


  async fetch(url) {
    return request(url, function (err, res, data) {
      return Buffer.concat([new Buffer(data)]).toString();
    })
  }

  async fetchHandler() {
    let promiseList = [];
    for (let i = 1; i <= this.config.reptilia.pageMaxNum; i++) {
      promiseList.push(this.fetch(reptilesController.getSourceURL(i)));
    }
    return promiseList;
  }

  static getSourceURL(index) {
    return `http://list.iqiyi.com/www/1/-------------11-${index}-1-iqiyi--.html`
  }

  async parseHTML(html) {
    const dom = new JSDOM(html);
      let aList = dom.window.document.querySelectorAll('.title-wrap a.link-txt');
    aList = Array.from(aList);
    return aList.map((a) => {
      return {
        title: a.title,
        url: `${this.config.reptilia.parseURL}${a.href}`
      }
    });
  }

}

module.exports = reptilesController;
