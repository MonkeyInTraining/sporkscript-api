
function Espruino()
{
    var self = this;
    var usb=null;
    var term = null;
    
    //Connect to Espruino via USB serial.
    this.Connect = function()
    {
        if( usb ) { usb.Stop(); usb.Destroy(); }
        usb = app.CreateUSBSerial( 115200,8,1,0, "1st" );
        if( !usb ) {
            app.ShowPopup( "Please connect your Espruino to the USB port" );
            return;
        }
        usb.Write( "echo(0);\n" );
        usb.SetOnReceive( self.OnReceive );
    }
    
    //Send 'tidy' code to Espruino line by line at
    //a rate that will not overflow buffers.
    this.Send = function( code, terminal )
    {
        //Connect to device.
        term = terminal;
        this.Connect();
        if( !usb ) return;
        
        //Check for module includes.
        this.CheckModules( code );
        
        //alert( code );
        
        var s = code; 
        s = s.replace( RegExp("\n\n+","gim"), "\n" ); 
        s = s.replace( RegExp("\n +","gim"), "\n" ); 
        s = s.replace( RegExp("\\)\\s*\\{","gim"), "\)\{" ); 
        s = s.replace( RegExp(", +","gim"), "," ); 
        s = s.replace( RegExp("\\( +","gim"), "\(" ); 
        s = s.replace( RegExp(" +\\)","gim"), "\)" ); 
  
        var ss = s.split("\n");
        for( var i=0; i<ss.length; i++ )
        {
            if( ss[i] )
            {
                if( term ) term.Log( ss[i] + "\n", true );
                usb.Write( ss[i] + "\n" );
                //app.Wait( 0.01 );
            }
        }
        
        if( s.indexOf("onInit()")>-1 ) 
        {
            if( term ) term.Log( "onInit()\n", true );
            usb.Write( "onInit()\n" );
        }
    }
    
    //Check for and upload modules if found.
    this.CheckModules = function( src )
    {
        var re = /require\( ?["|'](.*?)["|'] ?\)/g;
        while( match = re.exec(src) ) this.UploadModule( match[1] );
    }
    
    //Upload a module to espruino.
    this.UploadModule = function( name )
    {
        console.log( "module:" + name );
        var code = app.ReadFile( (app.InIDE()?"esp/":"/assets/esp/") + name+".min.js" );
        var s = "Modules.addCached("+JSON.stringify(name)+","+JSON.stringify(code)+");"
        usb.Write( s +"\n" );
        app.Wait( 0.01 );
    }
    
    //Handle serial data from Espruino.
    this.OnReceive = function( data )
    {
        if( term ) term.Log( data );
    }

}

