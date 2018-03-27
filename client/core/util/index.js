import longClick  from'./long-click.js';
import sizzle  from'./sizzle.js';
import ajax  from'./ajax.js';
import form  from'./form.js';
import pubsub  from'./pubsub.js';
import keys  from'./keys.js';
import util  from'./util.js';

let all = { ajax, form };
Object.assign(all, ajax, pubsub, keys, util);
for (let prop in all) sizzle[prop] = all[prop];


longClick.init();


export default sizzle;
