
import Dispatcher from './dispatcher';

class Actions {
  add(data) {
    var action = {
      actionType: 'add',
      data
    }
    Dispatcher.dispatch(action);
  }
}

export default Actions;