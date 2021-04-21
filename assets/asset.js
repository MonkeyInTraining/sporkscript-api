

//Show a list of current assets.
function ShowAssetsDialog()
{
    //Create dialog window.
    dlgAssets = app.CreateDialog( "Assets");
    dlgAssets.SetBackColor( "#2E3134" );
   
    //Create layout.
    var layAssets = app.CreateLayout( "linear", "vertical,Center,FillXY" );
    if( isPortrait ) layAssets.SetPadding( 0.03, 0.015, 0.03, 0.015 );
    else layAssets.SetPadding( 0.015, 0.03, 0.015, 0.03 );
    //layAssets.SetMargins( 8,8,8,8,"dip" );
    //layAssets.SetBackColor( "white" );
    
    //Load list of asset files.
    //var htmfile = appPath+"/"+curProgram+"/"+curProgram+".html"
    
    progPath = appPath+"/"+curProgram;
    var list = GetAssetList( progPath );

    //Create a list control to show assets.
    var data = "Folder:folder,Audio:audio,Photo:photo,Video:video";
    lstAssets = app.CreateList( list, 0.9, 0.7, "Normal,Horiz" );
    //lstAssets.SetBackColor( "white" );
    lstAssets.SetPadding( 4,0,0,0, "dip" )
    //lstAssets.SetDivider( 0, "black" );
    //lstAssets.SetIconSize( "32", "dip" );
    lstAssets.SetTextSize1( "18", "dip" );
    //lstAssets.SetTextColor1( "#333333" );
    //lstAssets.SetTextColor2( "#45AFEF" );
    //lstAssets.SetColumnWidths( 66,-1,-1,"dip");
    //lstAssets.SetIconMargins( 4,-1,4,-1,"dip");
    lstAssets.SetOnTouch( lstAssets_OnTouch );
    lstAssets.SetOnLongTouch( lstAssets_OnLongTouch );
    layAssets.AddChild( lstAssets );
    
    //Create a horizontal layout for icon buttons. 
    var layBtns = app.CreateLayout( "Linear", "Horizontal,VCenter,FillX" );
    layAssets.AddChild( layBtns );
    layBtns.SetPadding( 0,0.006,0,0.006 );
    layBtns.SetBackColor( "#2E3134" );
    
    //Calc button height.
    if( isPortrait ) height = (tablet?0.044:0.052);
    else height = (tablet?0.066:0.082);
    
    //Create an array of icon buttons. 
    var tablet = app.IsTablet();
    var btns = ["[fa-plus-circle]"];
    for( var i=0; i<btns.length; i++ )
    {
        var btn = app.CreateButton( btns[i], 0.28, height, "fontawesome" );
        btn.icon = btns[i];
        btn.SetTextSize( 14, "pl");
        btn.SetOnTouch( btnAssets_OnTouch ); 
        layBtns.AddChild( btn ); 
    }
    
    //Show dialog.
    dlgAssets.AddLayout( layAssets );
    dlgAssets.Show();
}


//Handle button presses.
function btnAssets_OnTouch()
{
    switch( this.icon )
    {
        case "[fa-plus-circle]": 
            app.ChooseFile( "Choose a file", "*/*", OnChooseAsset );
            break;
    }
}

//Called when an asset file is chosen.
function OnChooseAsset( file, name )
{
    //Detect type of asset.
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    
    //Get target sub folder.
    if( IsImageFile( name ) ) subFldr = "/Img";
    else if( IsSoundFile( name ) ) subFldr = "/Snd";
    else if( IsWebFile( name ) ) subFldr = "/Html";
    else subFldr = "/Misc";
    
    //Copy asset to project sub folder.
    app.MakeFolder( progPath+subFldr );
    app.CopyFile( file, progPath+subFldr+"/"+name );
    
    //Re-list assets.
    var list = GetAssetList( progPath );
    lstAssets.SetList( list ); 
}

//Called when asset is touched.
function lstAssets_OnTouch( title, body, type, index )
{
    curAsset = title;
    app.ShowProgress();
    setTimeout( function(){ app.HideProgress(); }, 3000 );
    app.OpenFile( progPath+"/"+curAsset );
}

//Called when asset is long touched.
function lstAssets_OnLongTouch( title, body, type, index )
{
    //Store chosen asset.
    curAsset = title;
     
    //Show options dialog.
    var lstAssetOps = app.CreateListDialog( "Actions", "Delete,Rename,Copy Path", "autocancel" );
    lstAssetOps.SetOnTouch( lstAssets_Select ); 
    lstAssetOps.Show();
}

//Called when asset option is chosen.
function lstAssets_Select( item )
{
    if( item=="Copy Path" )
    {
        app.SetClipboardText( curAsset );
        app.ShowPopup( curAsset );
    }
    else if( item=="Delete" )
    {
        app.DeleteFile( progPath+"/"+curAsset );
        lstAssets.RemoveItem( curAsset );
    }
    else if( item=="Rename" )
    {
        ShowTextDialog( "Rename Asset", curAsset, null, "OnAssetRename" );
    }
}

//Called after user renames asset.
function OnAssetRename( name )
{
    //Check if already exists.
    var file = progPath+"/"+curAsset;
    var newfile = progPath+"/"+name;
    
    if( app.FileExists( newfile ) ) 
        app.Alert( "File already exists!" );
    else {
        //Rename the file.
        app.RenameFile( file, newfile );
        
        //Re-list assets.
        var list = GetAssetList( progPath );
        lstAssets.SetList( list ); 
        
        //If app icon re-load icons
        if( name.includes(curProgram) || curAsset.includes(curProgram) ) 
            ShowIcons( true )
    }
}

//Get asset list.
function GetAssetList( fldr )
{
    var assetList = "";
    
    //Get images.
    var list = app.ListFolder( fldr+"/Img","",0,"alphasort");
    for( var i=0; i<list.length; i++ )
    {
        var name = list[i];
        if( assetList.length>0 ) assetList += ",";
        var type = IsImageFile( name ) ? progPath+"/Img/"+name : "[fa-file-o]";
        if( IsUnDisplayableFile( name ) ) type = "[fa-picture-o]";
        assetList += "Img/"+name +":"+ type;
    }
    
    //Get Sounds.
    list = app.ListFolder( fldr+"/Snd","",0,"alphasort");
    for( var i=0; i<list.length; i++ )
    {
        var name = list[i];
        if( assetList.length>0 ) assetList += ",";
        var type = IsSoundFile( name ) ? "[fa-music]" : "[fa-file-o]";
        assetList += "Snd/"+name +":"+ type;
    }
    
    //Get Html files.
    list = app.ListFolder( fldr+"/Html","",0,"alphasort");
    for( var i=0; i<list.length; i++ )
    {
        var name = list[i];
        if( assetList.length>0 ) assetList += ",";
        var type = IsWebFile( name ) ? "[fa-code]" : "[fa-file-o]";
        assetList += "Html/"+name +":"+ type;
    }
    
    //Get misc files.
    list = app.ListFolder( fldr+"/Misc","",0,"alphasort");
    for( var i=0; i<list.length; i++ )
    {
        var name = list[i];
        if( assetList.length>0 ) assetList += ",";
        var type = IsVideoFile( name ) ? "[fa-film]" : "[fa-file-o]";
        assetList += "Misc/"+name +":" + type;
    }
    
    return assetList;
}

function IsSoundFile( file )
{
    var music = ".mp3.wav.ogg";
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    return music.indexOf(ext) > -1;
}

function IsImageFile( file )
{
    var image = ".png.jpg.tif.svg";
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    return image.indexOf(ext) > -1;
}

function IsVideoFile( file )
{
    var video = ".mp4.3gp";
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    return video.indexOf(ext) > -1;
}

function IsWebFile( file )
{
    var image = ".htm.html.css.js";
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    return image.indexOf(ext) > -1;
}

function IsUnDisplayableFile( file )
{
    var image = ".svg";
    var ext = file.substr( file.lastIndexOf(".") ).toLowerCase();
    return image.indexOf(ext) > -1;
}

