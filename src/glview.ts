function GLV( id )
{
    var obj = new Obj( id );  
    /*#glv*/ obj.GetType = function() { return "GLView"; }
    /*#glv*/ obj.Release = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    /*#glv*/ obj.Destroy = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    /*#glv*/ obj.Execute = function( p1,p2,p3,p4 ) { prompt( obj.id, "GLV.Execute(\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); } 
    /*#glv*/ obj.Exec = function( p1,p2,p3,p4 ) { _gfx.Exec( p1,p2,p3,p4 ); }
    /*#glv*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "GLV.SetOnTouch(\f"+_Cbm(callback) ); } 
    /*#glv*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "GLV.SetOnTouchUp(\f"+_Cbm(callback) ); }  
    /*#glv*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "GLV.SetOnTouchMove(\f"+_Cbm(callback) ); }
    /*#glv*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "GLV.SetOnTouchDown(\f"+_Cbm(callback) ); } 
    /*#glv*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "GLV.SetTouchable(\f"+touchable ); }
    return obj;   
}
