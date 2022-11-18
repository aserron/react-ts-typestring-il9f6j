class MyElement extends EventTarget {
  constructor(...args){
    super.apply(this,args)
  }
}



/**
 * @description
 * A function to be executed when the browser engine determines it is safe to call your code.     * Enqueued microtasks are executed after all pending tasks have completed but before yielding * * * control to the browser's event loop.
 * @returns undefined
 * @example
    queueMicrotask(() => {
        // function contents here
    })
 */
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new EventTarget("load"));
    });
  } else {
    fetch(url).then((res) => res.arrayBuffer()).then((data) => {
      this._cache[url] = data;

      
      this._setData(data);
      this.dispatchEvent(new EventTarget("load"));
   
   
    });
  }