
const storeCallbackList = [];
const middlewareList = [];

const Dispatcher = {
  register(storeCallback){
    storeCallbackList.push(storeCallback);
  },
  use(middleware){
    middlewareList.push(middleware);
  },
  dispatch(action) {
    let index =-1, _this = this;
    function next() {
      const middle = middlewareList[++index];
      if (middle) {
          middle(action, next); // 执行中间件
      } else {
        _this._dispatch(action);
      }
    }
    next();
  },
  _dispatch(action){
    // 执行action对应的dispatcher， register注册的
    for(let callback of storeCallbackList){
      callback(action);
    }
  }
}

export default Dispatcher;