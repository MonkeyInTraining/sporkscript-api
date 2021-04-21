function _WebSock( id, ip, port, options )
{
    var m_OnMessage = null;
    var m_sock = null;
    var m_timer = null;
    var m_OnOpen = null;
    var m_OnClose = null;
    var m_IsOpen = null;

    console.log( "Opening web socket:" + id );
    if( !port ) port = 8080;
	m_sock = new WebSocket( "ws://"+ip+":"+port );
	m_sock.onopen = OnOpen;
	m_sock.onmessage = OnMessage;
	m_sock.onclose = OnClose;
	m_sock.onerror = OnError;
	m_timer = setInterval( CheckSocket, 7000 ); 
    
    function OnOpen() { 
        console.log( "Socket Open: "+id );
        if (m_OnOpen) m_OnOpen(id);
        m_IsOpen=true;
    }
    
    function CheckSocket() {  
        if( m_sock.readyState != 1 ) {
            console.log( "Re-opening web socket:" + id );
            m_sock = new WebSocket( "ws://"+ip+":"+port );
        }
    }
    
    function OnClose() { 
        console.log( "Socket Closed: "+id ); 
        if (m_OnClose) m_OnClose(id);
        m_IsOpen=false;
    }
    
    function OnError(e) { console.log( "Socket Error: "+e.data ); }
    function OnMessage( msg ) { if( m_OnMessage ) m_OnMessage( msg.data ); }
    
    
	this.Close = function() { m_sock.close(); }
    this.GetSocket = function() { return m_sock; }
    this.SetOnMessage = function( callback ) { m_OnMessage = callback; }
    
    this.SetOnOpen = function( callback ) { m_OnOpen = callback; }
    this.SetOnClose = function( callback ) { m_OnClose = callback; }
    this.IsOpen = function(){return m_IsOpen;}
    
    this.Send = function( msg ) {
        if( m_sock.readyState != 1 ) console.log( "Socket not ready:"+m_sock ); 
        else m_sock.send( msg );
    }
}
