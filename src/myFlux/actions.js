
import Dispatcher from './dispatcher';
import WebAPI from "./webAPI";

class Actions {
  add(data) {
    var action = {
      actionType: 'add',
      data
    }
    Dispatcher.dispatch(action);
  }
  getAll() {
    WebAPI.getAll(function(data){
      var action = {
        actionType: 'getAll',
        data
      }
      Dispatcher.dispatch(action);
    });
  }
}

export default Actions;