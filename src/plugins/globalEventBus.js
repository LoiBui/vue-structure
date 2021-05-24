const eventBus = {
  subscribe(eventName, callback){
    document.addEventListener(eventName, function(e) {
      callback(e.detail);
    });
  },
  publish(eventName, data){
    const event = new CustomEvent(eventName, { "detail": data });
    document.dispatchEvent(event);
  }
}

export default {
  install (Vue) {
    Vue.prototype.$bus = eventBus
  }
}
