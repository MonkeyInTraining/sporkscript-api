//DS: Add tweening to base object type.
function _Tween( target, duration, type, repeat, yoyo, callback )
{
    if( target==null ) { 
        if( this.tween ) { this.tweenCancel=true; this.tween=null; app.SetDebugEnabled(true) }
        return;
    }
    app.SetDebugEnabled( false );
    var _this = this;
    var pos = this.GetPosition();
    var width = this.GetWidth();
    var height = this.GetHeight();
    var start = { 
        x:(target.x!=null?pos.left:null), y:(target.y!=null?pos.top:null),
        w:(target.w!=null?width:null), h:(target.h!=null?height:null), 
        sw:(target.sw!=null?1:null), sh:(target.sh!=null?1:null),
        rot: (target.rot!=null?0:null)
    };
    var tween = this.tween = new TWEEN.Tween(start);
    this.tweenCancel = false;
    
    tween.to(target, duration);
    if( repeat ) tween.repeat( repeat );
    if( yoyo ) tween.yoyo( true );
    if( type ) tween.easing( eval("TWEEN.Easing."+type) )
    
    tween.onUpdate(function() 
	{
        if( (this.x!=null || this.y!=null) && _this.SetPosition ) _this.SetPosition( this.x, this.y );
        if( (this.w!=null || this.h!=null) && _this.SetSize ) _this.SetSize( this.w?this.w:-1, this.h?this.h:-1 );
        if( this.sw!=null || this.sh!=null ) { 
			if( _this.Scale ) _this.Scale( this.sw!=null?this.sw:1, this.sh!=null?this.sh:1 );
			else if( _this.SetScale ) _this.SetScale( this.sw!=null?this.sw:1, this.sh!=null?this.sh:1 );
		}
        if( this.rot!=null && _this.Rotate ) _this.Rotate( this.rot  );
        //Todo: _this._Tween( this.x, this.y, this.w, this.h, this.rotation );
    });
    tween.onComplete(function() 
	{
        //clearInterval( tween.timer );
        cancelAnimationFrame( tween.timer );
        app.SetDebugEnabled( true );
        if( callback ) callback();
    });
    tween.DoTween = function() 
	{
	    if( _this.tweenCancel ) return
        tween.timer = requestAnimationFrame( tween.DoTween );
        tween.update( new Date().valueOf() );
    }
    
    tween.start( new Date().valueOf() );
    //tween.timer = setInterval( tween.DoTween, 1000/500 );
    tween.timer = requestAnimationFrame( tween.DoTween );
}


//DS: Our own requestAnimationFrame only 15fps on older phones.
//Note: 60fps can consume too much gui thread for some apps.
(function() {
    var lastTime = 0;
   
    //if( app.GetOSVersion() < 25 )
   // {
        //if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, (window._fps?1000/window._fps:33) - (currTime - lastTime));
            var id = setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
        // if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    //}
}());