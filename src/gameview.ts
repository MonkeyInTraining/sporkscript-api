function WGL( id )
{
    var obj = new Obj( id );  
    /*#wgl*/ obj.GetType = function() { return "GameView"; }
    /*#wgl*/ obj.Destroy = function() { prompt( obj.id, "WGL.Destroy(" ); _map[obj.id] = null; }
    /*#wgl*/ obj.SetFile = function( file ) { prompt( obj.id, "WGL.SetFile(\f"+file ); } 
    /*#wgl*/ obj.Execute = function( js ) { prompt( obj.id, "WGL.Execute(\f"+js ); } 
    /*#wgl*/ obj.SetFrameRate = function( fps ) { prompt( obj.id, "WGL.SetFrameRate(\f"+fps ); } 
    //obj.SetOnTouch = function( callback ) { prompt( obj.id, "WGL.SetOnTouch(\f"+_Cbm(callback) ); } 
    //obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "WGL.SetOnTouchUp(\f"+_Cbm(callback) ); }  
    //obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "WGL.SetOnTouchMove(\f"+_Cbm(callback) ); }
    //obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "WGL.SetOnTouchDown(\f"+_Cbm(callback) ); } 
    //obj.SetTouchable = function( touchable ) { prompt( obj.id, "WGL.SetTouchable(\f"+touchable ); }
    return obj;   
}
