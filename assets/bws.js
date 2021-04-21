
/* Uncomment this when runnig as SPK.
function OnStart()
{
    StartBrowseServer();
}
*/

var serv = null;
var webServerRoot = "/sdcard";

//Start the file browsing server.
function StartBrowseServer()
{
	//Stop previous any instance.
	if( serv ) serv.Destroy();
	
	//Create and run web server.
	serv = app.CreateWebServer( 8889, "Upload,ListDir,NoWelcome" );

	var serverRoot = "/sdcard/DroidScript/.edit/browse";
	
	serv.SetFolder( webServerRoot );
	serv.SetUploadFolder( webServerRoot );
	
	serv.AddRedirect( "/browse/*", "/DroidScript/.edit/browse/index.html" );
	
	serv.AddServlet( "/rename", onRequestRename );
	serv.AddServlet( "/delete", onRequestDelete );
	serv.AddServlet( "/mkdir", onRequestNewFolder );
	serv.SetOnReceive( serv_OnReceive );
	serv.Start();
	
	//Create sys process for remote terminal.
	CreateSysProc()
}

//Create system process.
function CreateSysProc()
{
    //see: http://www.faqs.org/docs/abs/HTML/options.html
	sys = app.CreateSysProc( "sh" ); // -i -v -s" ); //, "combine" );
	sys.SetOnInput( sys_OnInput );
	sys.SetOnError( sys_OnError );
}

//Reset the system object.
function sys_Reset()
{
    sys.Destroy(); 
    CreateSysProc();
}

//Called when messages arrive from websocket clients.
function serv_OnReceive( msg, ip )
{
    if( msg=="@RESET@" ) { setTimeout( sys_Reset, 1000) }
    else if( msg=="@keepalive@" ) { /*do nothing*/ }
    else sys.Out( msg );
}

//Called when we get data from the input stream.
function sys_OnInput( data )
{
    serv.SendText( "I:"+data );
}

//Called when we get errors from the input stream.
function sys_OnError( data )
{
    //setTimeout( function(){serv.SendText("E:"+data)},100);
    serv.SendText("E:"+data)
}

// Handle /rename?dir=/sdcard&old=OldName.png&new=NewName.png
function onRequestRename( request, info )
{
    var response = { status: "OK" };
    
    if(!request.hasOwnProperty("file") || !request.hasOwnProperty("newname"))
    {
        response.status = "Invalid Request";
    }
    else
    {
        var oldFilename = webServerRoot + request.file;
        var newFilename = webServerRoot + request.newname;
        
        if(oldFilename !== newFilename)
        {
            if(app.FileExists(newFilename))
            {
                response.status = "A file named " + request.newname + " already exists.";
            }
            else if(app.FolderExists(newFilename))
            {
                response.status = "A folder named " + request.newname + " already exists.";
            }
            else // Good to rename
            {   
                if(app.IsFolder(oldFilename))
                {
                    //app.ShowPopup("RENAMEFOLDER: " + oldFilename + " " + newFilename);
                    app.RenameFolder(oldFilename, newFilename);
                }
                else
                {
                    //app.ShowPopup("RENAMEFILE: " + oldFilename + " " + newFilename);
                    app.RenameFile(oldFilename, newFilename);
                }
            }
        }
        else
        {
            console.log("Rename: filenames are the same");
        }
    }
    
	serv.SetResponse( JSON.stringify(response) );
}

// Handle /delete?file=/Folder/file.png
function onRequestDelete( request, info )
{
    var response = { status: "OK" };
    
    if(!request.hasOwnProperty("file"))
    {
        response.status = "Invalid Request";
    }
    else
    {
        var fileToDelete = webServerRoot + request.file; 

        if(app.IsFolder(fileToDelete))
        {
            //app.ShowPopup( "DELETEFOLDER: " + fileToDelete );
            app.DeleteFolder(fileToDelete);
        }
        else
        {
            //app.ShowPopup( "DELETEFILE: " + fileToDelete );
            app.DeleteFile(fileToDelete);
        }
    }
    
	serv.SetResponse( JSON.stringify(response) );
}

// Handle /mkdir?name=/sdcard/MyPhotos
function onRequestNewFolder( request, info )
{
    var response = { status: "OK" };
    
    if(!request.hasOwnProperty("name"))
    {
        response.status = "Invalid Request";
    }
    else
    {
        var folder = webServerRoot + request.name;
        
        if(app.FolderExists(folder))
        {
            response.status = "A folder with that name already exists";
        }
        else
        {
            //app.ShowPopup("MKDIR: " + folder); 
            app.MakeFolder(folder); 
        }
    }
    
    serv.SetResponse(JSON.stringify(response));
}
