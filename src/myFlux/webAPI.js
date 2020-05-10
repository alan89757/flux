

export default  {
  getAll(callback){
      setTimeout(function(){
          callback({scale: 'f', celsius: 100}); // 模拟网络请求
      },2000)
  }
}