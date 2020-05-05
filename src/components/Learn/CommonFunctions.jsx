class CommonFunctions{
   static preventBodyScroll(type){
        if(type === "hidden"){
            if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel =this.preventDefault; // older browsers, IE
        window.ontouchmove  = this.preventDefault; // mobile
        document.onkeydown  = this.preventDefaultForScrollKeys;
        }else{

            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        }

    }
   static preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }
    static preventDefaultForScrollKeys(e) {
        let keys = {37: 1, 38: 1, 39: 1, 40: 1};
        if (keys[e.keyCode])
            e.preventDefault();
            return false;
    }

}
 export default CommonFunctions