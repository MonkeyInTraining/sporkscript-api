"use strict"

function Terminal( output )
{   
    var self = this;
    var outp = output;
    
    //Handle enter key.
    this.edt_OnEnter = function()
    {
        var cmd = edt.GetText();
        
        //Send command to output stream.
        outp.Send( cmd+"\n", self );
    }
    
    //Show or hide this console.
    this.Show = function( show )
    {
        if( show ) dlg.Show();
        else dlg.Hide()
    }
    
    //Show or hide this console.
    this.Toggle = function()
    {
        if( !dlg.IsVisible() ) dlg.Show();
        else dlg.Hide()
    }
    
    //Resize log when soft keyboard shown etc.
    this.Resize = function()
    {
        var isPortait = app.GetOrientation()=="Portrait";
        var top = app.GetTop();
        var kbh = app.GetKeyboardHeight() / app.GetDisplayHeight();
        
        dlg.SetSize( 1, 1 );
        scroll.SetSize( 0.96, (isPortait?0.94:0.9)-kbh-top );
        edt.SetSize( isPortait?0.82:0.88, isPortait?0.06:0.1 );
        self.Scroll();
    }
    
    //Write to console.
    this.Log = function( data, isCommand )
    {
        txt.Log( data, isCommand ? "Green" : null );
        if( data ) setTimeout( this.Scroll, 100 );
    }
    
    //Scroll to bottom of log window.
    this.Scroll = function()
    {
        scroll.ScrollTo( 0, 999 );
    }
    
    //Show function list.
    this.ShowFuncs = function()
    {
        var cmds = "reset(),dump(),load(),save(),onInit()";
        var dlg = app.CreateListDialog( "Commands", cmds );
        dlg.SetOnTouch( function(ret){ outp.Send(ret+"\n",self); } );
        dlg.Show();
    }
    
    //Get orientation and device type.
    var isPortait = app.GetOrientation()=="Portrait";
    var tablet = app.IsTablet();

    //Create dialog window.
    var dlg = app.CreateDialog();
    dlg.SetSize( 1, 1 );

	//Create a layout with objects vertically centered.
	var lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lay.SetBackColor( "#ff777777" );
	
	//Create a scroller for log window.
	var top = app.GetTop();
    var scroll = app.CreateScroller(  0.96, 0.94-top );
    scroll.SetBackColor( "black" );
    lay.AddChild( scroll );
      
	//Create text control for logging (max 500 lines).
	var txt = app.CreateText( "", 2,-1, "Log,Monospace" );
	txt.SetBackColor( "black" );
	txt.SetLog( 500 );
	scroll.AddChild( txt );
	
	//Create a horizontal layout
	var layHoriz = app.CreateLayout( "linear", "Horizontal" );
	lay.AddChild( layHoriz );
	
	//Create an text edit box for entering commands.
    var edt = app.CreateTextEdit( "", 0.82, 0.06, "SingleLine" );
    edt.SetMargins( 0,8,4,0, "dip" );
    edt.SetBackColor( "black" );
    edt.SetOnEnter( this.edt_OnEnter );
    edt.SetHint( ">" );
    layHoriz.AddChild( edt );
    setTimeout( function(){edt.ClearFocus()},1000 );
    
    //Create a function select button.
    var btnFunc = app.CreateButton( "[fa-ellipsis-v]", 0.12,(tablet?0.04:0.06),"gray,fontawesome" );
    btnFunc.SetMargins( 0,4,0,0, "dip" );
    btnFunc.SetOnTouch( function(){self.ShowFuncs()} );
    layHoriz.AddChild( btnFunc );
    
    //Add layout to dialog and show it.
	dlg.AddLayout( lay );
    dlg.Show();
}
