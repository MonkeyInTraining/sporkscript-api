//Load SW2 plugin.
app.LoadPlugin( "SonySmartWatch2" );

//Called when application is started.
function OnStart()
{
	app.SetDebugEnabled( false );
	
    //Get list of Smartwatch apps.
    var lst = GetProgramList().split(",");
    //app.Debug( lst );
    
    //If only one app, run now.
    if( lst!="" && lst.length==1 ) { 
        app.StartApp( app.GetPath()+"/"+lst[0]+"/"+lst[0]+".js" ); 
        app.SetDebugEnabled( true );
        return; 
    }
    //Create SmartWatch object and set callbacks.
    watch = app.CreateSonySmartWatch2();
    watch.SetOnShow( watch_OnShow );

    //Create vertical and horizontal watch layouts (VCenter not working).
    var layVert = watch.CreateLayout( "Linear", "Vertical,FillXY,VCenter" );
   
    //Handle no apps.
    if( lst=="" ) {
		var txt = watch.CreateText( "[No Apps]", 1, -1 );
        txt.SetTextSize( 8 );
        layVert.AddChild( txt );
    }
    else
    {
		var layHoriz1 = watch.CreateLayout( "Linear", "Horizontal" );
		var layHoriz2 = watch.CreateLayout( "Linear", "Horizontal" );
		layVert.AddChild( layHoriz1 );
		layVert.AddChild( layHoriz2 );
    
		//Add launcher images.
		for( var i=0; i<lst.length; i++ ) 
		{
			var layIcon = watch.CreateLayout( "Linear", "Vertical" );
			var img = watch.CreateImage( "/Sys/Img/Icon.png", 0.30, -1 );
			img.SetName( lst[i] );
			img.SetOnTouch( img_OnTouch );
			layIcon.AddChild( img ); 
			var name = lst[i].replace("SWS-","");
			name = name.replace("SW-","");
			name = name.substr(0,8);
			var txt = watch.CreateText( name, 0.5, 0.15, "" );
			txt.SetTextSize( 8 );
			layIcon.AddChild( txt );
			if( i < 2 ) 
				layHoriz1.AddChild( layIcon );   
			else 
				layHoriz2.AddChild( layIcon );
		}
    }
    //Add and display layout.
    watch.AddLayout( layVert );
    watch.ShowLayout();
}

//Get user's smartwatch program list.
function GetProgramList()
{
	var progList = "";
	var appPath = app.GetPath();
	var list = app.ListFolder( appPath );
	for( var i=0; i<list.length; i++ )
	{
		var file = appPath+"/"+list[i]+"/"+list[i]+".js";
		if( app.FileExists( file ) ) 
		{
			if( list[i].indexOf("SW-") > -1 || list[i].indexOf("SWS-") > -1 ) {
				if( progList.length>0 ) progList += ",";
				progList += list[i];
			}
		}
	}
	return progList;
}

//Handle image touch event.
function img_OnTouch( dir, x, y, name )
{
    //app.Debug( "OnTouch dir="+dir+" x="+x+" y="+y ); 
    if( dir=="Down" ) {
		app.SetDebugEnabled( true );
		app.StartApp( app.GetPath()+"/"+name+"/"+name+".js" ); 
	}
}

//Called when SmartWatch app is shown.
function watch_OnShow()
{
    //Show the layout.
    watch.ShowLayout();
}


