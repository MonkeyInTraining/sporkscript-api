
//Provide app.AddTabs alternative to app.CreateTabs
if(app.AddTabs === undefined)
{
    app.AddTabs = function( lay, list, width, height, options )
    {
        var tabs = app.CreateTabs(list, width, height, options);
        lay.AddChild(tabs);
        return tabs;
    }
}

//Tabs object.
function _Tabs( list, width, height, options )
{
	var lst = list.split(",");
	this.tabs = [];
    var self = this;
	var curTabName = null;
	// initially I wanted a "slide" option but the animations are exponential which looked awful
    var optFade = options.toLowerCase().indexOf("fade") > -1;
	var thm = app.GetThemeInfo();

	var FillX = width && width > 0 ? "FillX" : false;
	var FillY = height && height > 0 ? "FillY" : false;
	var FillXY = FillX && FillY ? "FillXY" : FillX || FillY;
	
	//Disable debug during creation.
	_SetTempDebug( "console" );
	
	//Create main layout.
    this.lay = app.CreateLayout( "Card", FillXY );
    this.lay.SetBackColor( thm.dark?(thm.holo?"#00000000":"#313538"):"#fefefe" );
    this.lay.SetElevation( thm.holo?0:2 );
    if(FillX || FillY) this.lay.SetSize( width, height);
    this.lay.OnChange = null;
    this.lay.parent = this;
    
    //Create tab layout.
    this.layMain = app.CreateLayout( "Linear", FillXY );
    this.layMain.SetMargins( 0.02,0.02,0.02,0.02 );
    this.lay.AddChild( this.layMain ); 
    
    //Create top (tab strip) layout.
    this.layTop = app.CreateLayout( "Linear", "Horizontal," + FillX );
    //this.layTop.SetBackColor( "#ff000000" );
    this.layMain.AddChild( this.layTop );
    
    //Create body layout.
    this.layBody = app.CreateLayout( "Frame", FillXY );
    if(FillX || FillY) this.layBody.SetSize( width, height-0.06);
    this.layMain.AddChild( this.layBody ); 
    
    //Add a tab.
    this.AddTab = function( name )
    {
		_SetTempDebug( "console" );
		this.layTab = app.CreateLayout( "Linear", "VCenter" );
		this.layTab.SetMargins( 0,0,0.002,0 );
		this.layTab.SetSize( width/lst.length, 0.06 );
		this.txtTab = app.CreateText( name, -1, 0.06, "Bold,VCenter" );
		this.txtTab.SetBackground( "/Sys/Img/Tab_.png", "stretch" );
		this.txtTab.SetTextColor( thm.textColor1  );
		//this.txtTab.SetPadding( 0,0.03,0,0 );
		this.txtTab.SetOnTouch( _Tabs_OnTouch );
		this.txtTab.tabs = this;
		this.layTab.AddChild( this.txtTab );
		this.layTop.AddChild( this.layTab );
		
		//Save array of tab info.
		this.tabs[name] = { txt:this.txtTab, content:null };
		
		//Add tab content layout to body.
		this.tabs[name].content = app.CreateLayout( "Linear", "FillXY,"+options );
		this.layBody.AddChild( this.tabs[name].content );
		_RestoreDebug();
    }
    
    //Set tab change callback.
    this.lay.SetOnChange = function( cb ) { this.OnChange = cb; }

    //Return layout for given tab.
    this.lay.GetLayout = function ( name )
    { 
        return this.parent.tabs[name].content;
    }
    
    //Set current tab.
    this.lay.ShowTab = function( name )
    {
        var self = this.parent;
		_SetTempDebug( "console" );
		
        //Drop out if no change.
        if( curTabName == name ) return _RestoreDebug();
        curTabName = name;
        
        //Get tab info.
        var tab = self.tabs[name];
        if( !tab ) return _RestoreDebug();
        
	    //Select chosen tab.
        tab.txt.SetBackground( "/Sys/Img/TabHi_.png", "stretch" );
        tab.txt.SetColorFilter( thm.holo?"#33B4E5":thm.highlightColor, "SRC_IN" );
        
        //Show touched tab
        if(optFade)
        {
            tab.content.Animate( "FadeIn", null, 200 );
            self.layBody.ChildToFront( tab.content );
        }
        else tab.content.Show();

        //Clear other tab selections.
		for ( var tn in self.tabs )
        {
            var tb = self.tabs[tn];
            if( tb == tab || !tb.content.IsVisible() ) continue;

            //Hide visible tab
		    tb.txt.SetBackground( "/Sys/Img/Tab_.png", "stretch" );
            if(optFade) tb.content.Animate( "FadeOut", null, 200 );
            else tb.content.Hide();
	    }
        
        _RestoreDebug();
        
       //Fire callback if set.
       if( this.OnChange ) this.OnChange( name );
    }
    
    //Add tabs.
    for(var i in lst) this.AddTab( lst[i] );
	
	//Set default tab.
	this.lay.ShowTab( lst[0] );
	
	//Re-enable debug.
	_RestoreDebug();

    // adjust tab text size when app loaded
	setTimeout(function()
	{
    	_SetTempDebug( "console" );
    	var w = self.layMain.GetWidth();
    	for( var i in self.tabs ) self.tabs[i].txt.SetSize( w/lst.length );
    	_RestoreDebug();
	}, 101);

    //Return main layout to caller.
    return this.lay;
}

//Handle tab clicks.
function _Tabs_OnTouch( ev )
{
    if( ev.action == "Down" ) 
    {
		_SetTempDebug( "console" );
        var txt = ev.source;
        txt.tabs.lay.ShowTab( txt.GetText() );
        _RestoreDebug();
    }
}
