
import Dispatcher from './dispatcher';
const EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter {
  constructor(){
    super();
    this._data = {};
    Dispatcher.register(action => {
      switch (action.actionType) {
          case 'add' :
              this._add(action.data);
              break;
          case 'getAll' :
              this._add(action.data);
              break;
          default :
              break;
      }
    })
  }
  _add(item) {
    this._data['temp change'] = item;
    this.emit('temp change', this.data);  // 触发事件监听
  }
  get data() {
    return this._data;
  }
}

export default Store;