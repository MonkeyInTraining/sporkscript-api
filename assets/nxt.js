
var _nxt_lastInst = null;

function _NxtHelp()
{
	//Intitialise some variables.
	this.nxt = null;  
	this.nxtAddress = "";
	this.nxtName = "";
	this.reconnect = false;
	this.nxt_OnConnected = null;

	//Create the NXT object.
	this.nxt_CreateNxt = function()
	{
		var ret = prompt( "#", "App.CreateNxtRemote(" );
		if( ret==null ) return null;
		this.nxt = new Nxt(ret,this) 
		_nxt_lastInst = this;
		this.nxt.SetOnConnectEx( "_nxt_lastInst.nxt_OnConnect" );
		return new Nxt(ret,this); 
	}

	//Show connection dialog.
	this.nxt_ShowDevices = function()
	{
		//Check bluetooth is enabled.
		if( !this.nxt.IsEnabled() ) { 
			this.nxt.RequestEnable(); return; 
		}

		//Show list of NXT devices (addresses start with 00:16:53).	
		_nxt_lastInst = this;	
		nxt_btList = app.CreateBluetoothList( "00:16:53" );
		nxt_btList.SetOnTouchEx( "_nxt_lastInst.nxt_OnSelect" );
	}

	//Called when user selects a bluetooth device.
	this.nxt_OnSelect = function( name, address )
	{
		//Save NXT name and address.
		this.nxtName = name;
		this.nxtAddress = address;

		//Disconnect current NXT.
		if( this.nxt.IsConnected() ) { this.nxt.Disconnect(); app.Wait(1); }

		//If device is not paired, force pairing 
		//by attempting connection (which will timeout).
		if( !this.nxt.IsPaired( name ) ) 
		{
			app.ShowProgress( "Pairing..." );
			this.nxt.Connect( address );
			this.reconnect = true;
			return;
		}

		//Connect to NXT.
		this.nxt_Connect();
	}

	//Handle successful connection.
	this.nxt_OnConnect = function( success )
	{
		if( success ) this.nxt.Beep( 2000, 200 );
		else app.Alert( "Failed to connect!" );
		app.HideProgress();
		
		if( this.nxt_OnConnected ) 
			this.nxt_OnConnected();
	}

	//Connect to NXT.
	this.nxt_Connect = function()
	{
		if( !this.nxt.IsPaired( this.nxtName ) ) { 
			app.Alert( this.nxtName + " is not Paired!" ); 
			return; 
		}
		//Connect to NXT.
		app.ShowProgress( "Connecting..." );
		this.nxt.Connect( this.nxtAddress );
	}

	//Check nxt connection.
	this.nxt_CheckConnection = function()
	{
		if( this.reconnect ) { 
			this.nxt_Connect();
			this.reconnect = false; 
		}
		if( !this.nxt.IsConnected() ) {
			app.ShowPopup( "Not Connected", "Short" );
			return false;
		}
		return true;
	}
}
