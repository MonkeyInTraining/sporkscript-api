
//--- General Utils --------

Util = new function Util()
{
    var _numeral;
    
    //Format numbers and dates.
    this.Format = function( value, format, convert )
    {
        if( !_numeral ) { _LoadScriptSync("/Sys/Libs/Numeral.js"); _numeral = true; }
        if( !convert && (isNaN(value) || (typeof value=='boolean')) ) return value;
        else return numeral(value).format(format);
    }
    
    //Clone an object.
    this.Clone = function( obj ) {
        return JSON.parse(JSON.stringify(obj))
    }
    
    //Remove an item from an array/list.
    this.Remove = function( array, item ) 
    {
        var i = array.indexOf( item );
        if( i>-1 ) array.splice( i, 1 );
    }
    
    //Get the file title from the full name
    //eg /sdcard/fred.txt -> fred
    this.GetFileTitle = function( fileName, noExtension )
    {
        var title = fileName.substr( fileName.lastIndexOf("/")+1 );
        if( noExtension ) title = title.substr( 0, title.lastIndexOf(".") );
        return title;
    }
    
    //Make first letter capital.
    this.Capitalize = function( str ) 
	{
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}


//--- Other utils --------------

//Check for an overlap between two objects.
//(depth is the depth of overlap required)
Obj.prototype.IsOverlap = function( obj, depth )
{
	depth = (depth ? depth : 0);
	var pos1 = this.GetPosition( "screen" ); var pos2 = obj.GetPosition( "screen" );
	if( pos2.left < pos1.left+pos1.width-depth && pos2.left+pos2.width > pos1.left+depth ) {
		if( pos2.top+pos2.height > pos1.top+depth && pos2.top < pos1.top+pos1.height-depth ) return true;
	}
	return false;
}

//Play a sound file in a single call.
var _player = null;
function _PlaySound( file ) 
{
    if( _player == null) {
        _player = app.CreateMediaPlayer();
        _player.SetOnReady( function(){_player.Play()} );
    }
    _player.SetFile( file );
}

//Get a random color.
function _GetRandomColor() 
{
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

//Make a color using fraction values.
function RGB( r,g,b ) 
{
  r = Math.max(Math.min(Number(r), 1), 0) * 255;
  g = Math.max(Math.min(Number(g), 1), 0) * 255;
  b = Math.max(Math.min(Number(b), 1), 0) * 255;
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

function _WglTemplate( file ) 
{
    var s = "<html>"
    + "<head>"
    +	"<script>_isWebView=true;</script>"
    +	"<script src='file:///android_asset/Libs/Pixi.js'></script>"
    +	"<script src='file:///android_asset/Libs/Box2d.js'></script>"
    +	"<script src='file:///android_asset/Libs/Tween.js'></script>"
    +"</head>"
    +"<body onload='_OnStart()' style='margin:0;padding:0;'>"
    +	"<script src='file:///android_asset/Libs/Gfx.js'></script>"
    +	"<script src='"+file+"'></script>"
    +"</body>"
    +"</html>"
    return s;
}

//--- Effects ----------------------

//Explode a control.
Obj.prototype.Explode = function()
{
    this.w = this.GetWidth()*2, this.h = this.GetHeight()*2;
    this.imgBack = app.CreateImage( null, this.w, this.h );
    this.imgBack.SetPosition( this._left-this.w/4, this._top-this.h/4, this.w, this.h );
    this._parent.AddChild( this.imgBack );
    this.player = app.CreateMediaPlayer();
	this.player.SetOnReady( this.player.Play );
	this.player.SetFile( "/Sys/Snd/Explode.mp3" );
    this._DoExplode( this, 0 );
}

//Play explode sound.
Obj.prototype._PlayExplode = function()
{
    this.player.Play( 0 );
}

//Show an animated explosion.
Obj.prototype._DoExplode = function( _this, startFrame )
{
    if( startFrame!=null ) { 
        _this.explodeFrame = startFrame;
        _this.Hide();
    }
    
	if( _this.explodeFrame < 5 ) {
		var file = "Explode" + (++_this.explodeFrame) + ".png";
		_this.imgBack.SetImage( "/Sys/Img/" + file, _this.w, _this.h );
		setTimeout( function(){_this._DoExplode(_this,null)}, 100 );
	}
	else { 
		_this.explodeFrame = 1;
		_this._parent.DestroyChild( _this.imgBack );
		_this.player.Destroy();
	}
}

//Game app template.
function _Game( file, orient )
{
    file = file ? file : app.GetAppName()+".js"
    var s = app.ReadFile( app.IsAPK() ? file.replace(" ","_") : file );
    if( orient ) app.SetOrientation( orient );
    app.SetScreenMode( "Game" );
    app.PreventScreenLock( true );
    this.lay = app.CreateLayout( "Linear", "Vertical,FillXY,VCenter" );
    this.game = app.CreateGameView( 1,1 );
    this.game.SetFile( file );
    this.game.Focus();
    this.lay.AddChild( this.game );
    app.AddLayout( this.lay );
}


