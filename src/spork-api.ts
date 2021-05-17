/// <reference path="./globals.d.ts" />
export { AudioRecorder } from "./audiorecorder.ts";
export { BluetoothList } from "./bluetoothlist.ts";
export { Button } from "./button.ts";
export { CameraView } from "./cameraview.ts";
export { CheckBox } from "./checkbox.ts";
export { CodeEdit } from "./codeedit.ts";
export { CreateBluetoothSerial } from "./createbluetoothserial.ts";
export { Dialog } from "./dialog.ts";
export { Downloader } from "./downloader.ts";
export { Image } from "./image.ts";
import { Layout } from "./layout.ts"
export { Layout } from "./layout.ts";
export { List } from "./list.ts";
export { ListDialog } from "./listdialog.ts";
export { ListView } from "./listview.ts";
export { Locator } from "./locator.ts";
export { MediaPlayer } from "./mediaplayer.ts";
export { MediaStore } from "./mediastore.ts";
export { NetClient } from "./netclient.ts";
export { Notification } from "./notification.ts";
export { PhoneState } from "./phonestate.ts";
export { PlayStore } from "./playstore.ts";
export { Scroller } from "./scroller.ts";
export { SeekBar } from "./seekbar.ts";
export { Sensor } from "./sensor.ts";
export { Spinner } from "./spinner.ts";
export { Switch } from "./switch.ts";
export { Text } from "./text.ts";
export { TextEdit } from "./textedit.ts";
export { Toggle } from "./toggle.ts";
export { VideoView } from "./videoview.ts";
export { WebView } from "./webview.ts";
export { YesNoDialog } from "./yesnodialog.ts";
export { ZipUtil } from "./ziputil.ts";

export class Api {
  // addAdView( layout,unitId,testId,width,height,options ) { var ret = prompt( (layout?layout.id:null), "App.AddAdView(\f"+unitId+"\f"+testId+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Adv(ret); else return null; }
  /*
  addCanvas(
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
    w?: number,
    h?: number,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddCanvas(\f${width}\f${height}\f${options}\f${w}\f${h}`,
    );
    if (ret) {
      return new Image(ret);
    } else {
      return null;
    }
  }
  */
  static addLayout(layout: Layout, type?: string, options?: string) {
    if (!type) {
      prompt("#", "App.AddLayout(" + layout.id);
    } else {
      return Layout.create(type, options);
    }
  }
  static destroyLayout(layout: Layout) {
    prompt("#", "App.DestroyLayout(" + layout.id);
  }
  static removeLayout(layout: Layout) {
    prompt("#", "App.RemoveLayout(" + layout.id);
  }
  //These objects auto-release when layout is destroyed.
  /*
  CreateCanvas(width, height, options, w, h) {
    var ret = prompt(
      "#",
      "App.CreateCanvas(\f" + width + "\f" + height + "\f" + options + "\f" +
        w + "\f" + h,
    );
    if (ret) return new Img(ret);
    else return null;
  }
  */
  /*
  CreateAdView(unitId, testId, width, height, options) {
    var ret = prompt(
      "#",
      "App.CreateAdView(\f" + unitId + "\f" + testId + "\f" + width + "\f" +
        height + "\f" + options,
    );
    if (ret) return new Adv(ret);
    else return null;
  }
  */
}
/*
function App() 
{				
	data = {};
	GetType() { return "App"; }
	GetObjects() { return _GetObjects(); }
	IsStarted() { return prompt( "#", "App.IsStarted(" )=="true"; }	
	Exit( kill ) { prompt( "#", "App.Exit("+kill ); }
	Quit( msg,title,options ) { prompt( "#", "App.Quit(\f"+msg+"\f"+title+"\f"+options ); }
	ToBack() { prompt( "#", "App.ToBack(" ); }
	ToFront() { prompt( "#", "App.ToFront(" ); }
	Execute( js ) { prompt( "#", "App.Execute("+js ); } 
	StartApp( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); }
	StopApp( name ) { prompt( "#", "App.StopApp("+name ); }
	LaunchApp( packageName,noPlay ) { prompt( "#", "App.LaunchApp(\f"+packageName+"\f"+noPlay ); }
	SetScreenMode( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); }
	SetOptions( options ) { prompt( "#", "App.SetOptions(\f"+options ); }
	SetTheme( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); }
	GetThemeInfo() { return eval(prompt( "#", "App.GetThemeInfo(" )); }
	SetDensity( dpi ) { prompt( "#", "App.SetDensity(\f"+dpi ); }
	SetPosition( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	SetBackColor( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }  
	SetNavBarColor( clr ) { prompt( "#", "App.SetNavBarColor(\f"+clr ); }  
	SetStatusBarColor( clr ) { prompt( "#", "App.SetStatusBarColor(\f"+clr ); }  
	StartService( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); }
	StopService() { prompt( "#", "App.StopService(" ); }
	ScheduleJob( delay,options ) { prompt( "#", "App.ScheduleJob(\f"+delay+"\f"+options ); }
	CancelJob() { prompt( "#", "App.CancelJob(" ); }
	StartDebugServer() { prompt( "#", "App.StartDebugServer(" ); }
	StopDebugServer() { prompt( "#", "App.StopDebugServer(" ); }
	SendIntent( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); }
	BroadcastIntent( action,category,data,type,extras,options ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options ); }
	SendMessage( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); }
	SetInForeground( title,text,largeIcon,smallIcon,importance ) { prompt( "#", "App.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance ); }
	SetInBackground() { prompt( "#", "App.SetInBackground(\f" ); }
	Script( file ) { _LoadScriptSync( file ); }
	LoadScript( url, callback ) { _LoadScript( url, callback ); }
	LoadPlugin( url ) { _LoadPlugin( url ); }
	SysExec( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); } 
	ExtExec( name,file,args,options ) { return prompt( "#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options ); } 
	SetPriority( level ) { prompt( "#", "App.SetPriority(\f"+level ); } 
	//Odroid( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); }
	GetName() { return prompt( "#", "App.GetName(" ); }
	GetPath() { return prompt( "#", "App.GetPath(" ); }
	GetAppName() { return prompt( "#", "App.GetAppName(" ); }
	GetAppPath() { return prompt( "#", "App.GetAppPath(" ); }
	GetVersion() { return parseFloat(prompt( "#", "App.GetVersion(" )); }
	GetDSVersion() { return parseFloat(prompt( "#", "App.GetDSVersion(" )); }	
	IsNewVersion() { return prompt( "#", "App.IsNewVersion(" )=="true"; }
	InIDE() { return prompt( "#", "App.InIDE(" )=="true"; }	
	IsAPK() { return prompt( "#", "App.IsAPK(" )=="true"; }	
	IsService() { return prompt( "#", "App.IsService(" )=="true"; }	
	IsPremium() { return prompt( "#", "App.IsPremium(" )=="true"; }	
	IsEngine() { return prompt( "#", "App.IsEngine(" )=="true"; }	
	IsScoped() { return prompt( "#", "App.IsScoped(" )=="true"; }	
	GetPackageName() { return prompt( "#", "App.GetPackageName(" ); }
	CheckLicense( key ) { prompt( "#", "App.CheckLicense(\f"+key ); }
	GetAccounts() { return prompt( "#", "App.GetAccounts(" ); }
	GetUser() { return prompt( "#", "App.GetUser(" ); }
	GetDeviceId() { return prompt( "#", "App.GetDeviceId(" ); }
	GetCountryCode() { return prompt( "#", "App.GetCountryCode(" ); }
	GetLanguageCode() { return prompt( "#", "App.GetLanguageCode(" ); }
	GetCountry() { return prompt( "#", "App.GetCountry(" ); }
	GetLanguage() { return prompt( "#", "App.GetLanguage(" ); }
	GetOptions() { return prompt( "#", "App.GetOptions(" ); }	
	GetSharedText( index ) { return prompt( "#", "App.GetSharedText("+index ); }
	GetSharedFiles() { var s = prompt( "#", "App.GetSharedFiles(" ); if(s.length) return s.split(","); else return null; }
	GetActivities() { return eval(prompt( "#", "App.GetActivities(" )); }
	IsAppInstalled( packageName ) { return prompt( "#", "App.IsAppInstalled(\f"+packageName )=="true"; }	
	GetInstalledApps() { return eval(prompt( "#", "App.GetInstalledApps(\f" )); }
	GetRunningApps() { return eval(prompt( "#", "App.GetRunningApps(\f" )); }
	GetRunningServices() { return eval(prompt( "#", "App.GetRunningServices(\f" )); }
	GetMemoryInfo() { return eval(prompt( "#", "App.GetMemoryInfo(\f" )); }
	GetIntent() { var s = prompt( "#", "App.GetIntent(" ); if(s.length) return JSON.parse(s); else return null; }
	GetNotifyId() { return prompt( "#", "App.GetNotifyId(" ); }
	SetSharedApp( name ) { prompt( "#", "App.SetSharedApp("+name ); }
	GetMediaFile( appName,ext ) { return prompt( "#", "App.GetMediaFile(\f"+appName+"\f"+ext ); }
	KillApp( procId ) { prompt( "#", "App.KillApp("+procId ); }
	CreateShortcut( name,iconFile,file,options ) { prompt( "#", "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options ); }
	GetBuildNum() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }	
	GetOSVersion() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }	
	GetModel() { return prompt( "#", "App.GetModel(" ); }	
	IsTablet() { return prompt( "#", "App.IsTablet(" )=="true"; }	
	IsChrome() { return prompt( "#", "App.IsChrome(" )=="true"; }	
	IsTV() { return prompt( "#", "App.IsTV(" )=="true"; }	
	SetOnError( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); }
	SetOnDebug( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); }
	SetOnKey( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); }
	SetOnShowKeyboard( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); }
	SetOnWifiChange( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); }
	WifiScan( callback,options ) { prompt( "#", "App.WifiScan(\f"+_Cbm(callback)+"\f"+options ); }
	DisableKeys( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); }
	DisableTouch( disable ) { prompt( "#", "App.DisableTouch(\f"+disable ); }
	GetIPAddress() { return prompt( "#", "App.GetIPAddress(" ); }
	GetMacAddress() { return prompt( "#", "App.GetMacAddress(" ); }
	GetSSID() { return prompt( "#", "App.GetSSID(" ); }
	GetRSSI() { return parseInt(prompt( "#", "App.GetRSSI(" )); }
	Broadcast( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); }
	SetOnBroadcast( callback,action ) { prompt( "#", "App.SetOnBroadcast(\f"+_Cbm(callback)+"\f"+action ); }
	SetData( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); }
	GetData( name ) { return prompt( "#", "App.GetData(\f"+name ); }	
	SetClipboardText( txt ) { prompt( "#", "App.SetClipboardText("+txt ); }
	GetClipboardText() { return prompt( "#", "App.GetClipboardText(" ); }
	EnableBackKey( enable ) { prompt( "#", "App.EnableBackKey("+enable ); }		
	Wait( secs ) { prompt( "#", "App.Wait("+secs ); }
	Alert( msg,title,options,hue ) { prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); }
	HideKeyboard() { prompt( "#", "App.HideKeyboard(" ); }
	ShowKeyboard( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; }
	IsKeyboardShown() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; }
	GetKeyboardHeight() { return parseInt(prompt( "#", "App.GetKeyboardHeight(" )); }
	TextToSpeech( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); }
	Debug( msg ) { prompt( "#", "App.Debug(\f"+msg ); }
	Error( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); }
	SetDebugEnabled( enable ) { prompt( "#", "_UseDbg(\f"+enable ); _dbg=enable; }
	SetDebug( switches ) { prompt( "#", "_UseDbg(\f"+switches ); _dbg=switches; }
	IsDebugEnabled() { return _dbg?true:false; }
	IsDebugging() { return prompt( "#", "App.IsDebugging(" )=="true"; }
	CreateDebug() { prompt( "#", "App.CreateDebug(" ); }
	ShowDebug( show ) { prompt( "#", "App.ShowDebug("+show ); }
	SendMail( address,subject,body,attach,type,options ) { prompt( "#", "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options ); }		
	SendFile( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); }		
	SendText( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); }		
	SendImage( file,choose ) { prompt( "#", "App.SendImage(\f"+file+"\f"+choose ); }		
	SendSMS( msg,number ){ app.SendIntent(null,null,"android.intent.action.SENDTO",null,'smsto:'+number,null,JSON.stringify([{name:"sms_body",type:"string",value:msg}])); }
	// _Extract( p1 ) { prompt( "#", "App._Extract("+p1 ); }
	ExtractAssets( src,dest,overwrite,options ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+options ); }
	RedirectAssets( dir ) { prompt( "#", "App.RedirectAssets(\f"+dir ); } 
	ExtractPlugins() { prompt( "#", "App.ExtractPlugins(\f" ); }
	GetResourceId( name,options ) { return parseInt(prompt( "#", "App.GetResourceId(\f"+name+"\f"+options )); }	
	Vibrate( pattern ) { prompt( "#", "App.Vibrate("+pattern ); }
	ShowPopup( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); }
	ShowProgress( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); }	
	HideProgress() { prompt( "#", "App.HideProgress(" ); }	
	ShowProgressBar( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); }	
	UpdateProgressBar( percent ) { prompt( "#", "App.UpdateProgressBar(\f"+percent ); }	
	HideProgressBar() { prompt( "#", "App.HideProgressBar(" ); }	
	LoadText( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); }
	LoadNumber( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); }	
	LoadBoolean( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); }
	SaveText( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); }
	SaveNumber( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); }	
	SaveBoolean( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); }	
	ClearData( file ) { prompt( "#", "App.ClearData(\f"+file ); }
	ClearValue( name,file ) { prompt( "#", "App.ClearValue(\f"+name+"\f"+file ); }
	GetTop() { return parseFloat(prompt( "#", "App.GetTop(" )); }
	HasSoftNav() { return prompt( "#", "App.HasSoftNav(" )=="true"; }
	IsNavBarOnRight() { return prompt( "#", "App.IsNavBarOnRight(" )=="true"; }
	GetScreenWidth( options ) { return parseFloat(prompt( "#", "App.GetScreenWidth(\f"+options )); }
	GetScreenHeight( options ) { return parseFloat(prompt( "#", "App.GetScreenHeight(\f"+options )); }
	GetScreenDensity() { return parseFloat(prompt( "#", "App.GetScreenDensity(" )); }
	GetDisplayWidth() { return parseFloat(prompt( "#", "App.GetDisplayWidth(" )); }
	GetDisplayHeight() { return parseFloat(prompt( "#", "App.GetDisplayHeight(" )); }
	GetDefaultOrientation() { return prompt( "#", "App.GetDefaultOrientation(" ); }	
	GetOrientation() { return prompt( "#", "App.GetOrientation(" ); }	
	IsPortrait() { return prompt( "#", "App.GetOrientation(" )=="Portrait"; }	
	SetOrientation( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); }	
	GetRotation() { return parseInt(prompt( "#", "App.GetRotation(" )); }	
	GetBatteryLevel() { return parseFloat(prompt( "#", "App.GetBatteryLevel(\f" )); }
	IsCharging() { return prompt( "#", "App.IsCharging(" )=="true"; }
	GetChargeType() { return prompt( "#", "App.GetChargeType(\f" ); }
	PreventScreenLock( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); }	
	PreventWifiSleep() { prompt( "#", "App.PreventWifiSleep(" ); }
	SetWifiEnabled( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); }
	IsWifiEnabled() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; }
	SetWifiApEnabled( enable,ssid,key ) { prompt( "#", "App.SetWifiApEnabled(\f"+enable+"\f"+ssid+"\f"+key ); }
	IsWifiApEnabled() { return prompt( "#", "App.IsWifiApEnabled(" )=="true"; }
	WifiConnect( ssid,key ) { prompt( "#", "App.WifiConnect(\f"+ssid+"\f"+key ); }
	IsConnected() { return prompt( "#", "App.IsConnected(" )=="true"; }
	SetBluetoothEnabled( enable ) { prompt( "#", "App.SetBluetoothEnabled(\f"+enable ); }
	IsBluetoothEnabled() { return prompt( "#", "App.IsBluetoothEnabled(" )=="true"; }
	GetPairedBtDevices() { return eval(prompt( "#", "App.GetPairedBTDevices(\f" )); }
	IsBtDevicePaired( name ) { return prompt( "#", "App.IsBtDevicePaired(\f"+name )=="true"; } 
	DiscoverBtDevices( filter,onFound,onComplete ) { prompt( "#", "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+_Cbm(onComplete) ); }
	PairBtDevice( address,callback ) { prompt( "#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	UnpairBtDevice( address,callback ) { prompt( "#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	GetBtProfileState( type ) { return prompt( "#", "App.GetBtProfileState(\f"+type ); }
	GetBluetoothName() { return prompt( "#", "App.GetBluetoothName(" ); }	
	GetBluetoothAddress() { return prompt( "#", "App.GetBluetoothAddress(" ); }	
	IsLocationEnabled( types ) { return prompt( "#", "App.IsLocationEnabled(\f"+types )=="true"; }
	SetMockLocation( lat,lng,accuracy,speed ) { prompt( "#", "App.SetMockLocation(\f"+lat+"\f"+lng+"\f"+accuracy+"\f"+speed ); }
	PlayRingtone( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); }
	SetRingerMode( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); }
	GetRingerMode() { return prompt( "#", "App.GetRingerMode(" ); }
	SetSpeakerPhone( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); }
	GetSpeakerPhone() { return prompt( "#", "App.GetSpeakerPhone(" )=="true"; }
	SetVolume( stream,level,options ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level+"\f"+options ); }
	GetVolume( stream ) { return parseFloat(prompt( "#", "App.GetVolume(\f"+stream )); }
	SetTitle( title ) { prompt( "#", "App.SetTitle("+title ); }	
	SetMenu( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); }
	ShowMenu() { prompt( "#", "App.ShowMenu(" ); }		
	Translate( cancel,ok ) { prompt( "#", "App.Translate(\f"+cancel+"\f"+ok ); }	
	AddLayout( layout,type,options ) { if( !type ) prompt( "#", "App.AddLayout("+layout.id ); else { var ret = prompt( (layout?layout.id:null), "App.AddLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; } }	
	RemoveLayout( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); }
	DestroyLayout( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); }	
	AddDrawer( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); }	
	RemoveDrawer( side ) { prompt( "#", "App.RemoveDrawer(\f"+ side ); }
	OpenDrawer( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); }	
	CloseDrawer( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); }	
	LockDrawer( side ) { prompt( "#", "App.LockDrawer(\f"+side ); }	
	UnlockDrawer( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); }	
	GetDrawerState( side ) { return prompt( "#", "App.GetDrawerState(\f"+side ); }
	MakeFolder( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); }	
	GetPrivateFolder( name,options ) { return prompt( "#", "App.GetPrivateFolder(\f"+name+"\f"+options ); }	
	GetDatabaseFolder() { return prompt( "#", "App.GetDatabaseFolder(" ); }
	DeleteDatabase( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); }
	FolderExists( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; }
	FileExists( file ) { return prompt( "#", "App.FileExists("+file )=="true"; }
	IsFolder( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; }
	ListFolder( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }
	GetExternalFolder() { return prompt( "#", "App.GetExternalFolder(" ); }
	GetInternalFolder() { return prompt( "#", "App.GetInternalFolder(" ); }
	GetSpecialFolder( name ) { return prompt( "#", "App.GetSpecialFolder(\f"+name ); }
	GetEnv( name ) { return prompt( "#", "App.GetEnv(\f"+name ); }
	GetPermission( type,callback ) { prompt( "#", "App.GetPermission(\f"+type+"\f"+_Cbm(callback) ); }
	CheckPermission( type ) { return prompt( "#", "App.CheckPermission(\f"+type ); }
	ReadFile( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); }
	WriteFile( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); }	
	OpenFile( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); }	
	OpenUrl( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); }
	DownloadFile( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); }
	ChooseFile( msg,type,callback,fldr ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback)+"\f"+fldr ); }
	ChooseContact( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); }
	ChooseImage( options,callback ) { prompt( "#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback) ); }
	ChooseAccount( callback ) { prompt( "#", "App.ChooseAccount(\f"+_Cbm(callback) ); }
	DeleteFile( file ) { prompt( "#", "App.DeleteFile("+file); }
	CopyFile( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); }
	CopyFolder( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); }
	DeleteFolder( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); }
	RenameFile( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	RenameFolder( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	ReplaceInFile( file,txt,rep,options ) { prompt( "#", "App.ReplaceInFile(\f"+file+"\f"+txt+"\f"+rep+"\f"+options); }
	UnzipFile( src,dest ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest); }
	ZipFile( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); }
	ZipFolder( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); }
	GetFreeSpace( mode ) { return parseFloat(prompt( "#", "App.GetFreeSpace(\f"+mode)); }
	GetFileDate( file ) { var d = parseInt(prompt( "#", "App.GetFileDate(\f"+file)); if( d ) return new Date(d); else return null; }
	GetFileSize( file ) { return parseInt(prompt( "#", "App.GetFileSize(\f"+file)); }
	GetThumbnail( src,dest,width,height ) { prompt( "#", "App.GetThumbnail(\f"+src+"\f"+dest+"\f"+width+"\f"+height); }
	ScanFile( file ) { prompt( "#", "App.ScanFile(\f"+file); }
	GetLastButton() { var ret = prompt( "#", "App.GetLastButton(" ); if( ret ) return (_map[ret]); else return null; }
	GetLastToggle() { var ret = prompt( "#", "App.GetLastToggle(" ); if( ret ) return (_map[ret]); else return null; }
	GetLastCheckBox() { var ret = prompt( "#", "App.GetLastCheckBox(" ); if( ret ) return (_map[ret]); else return null; }
	GetLastImage() { var ret = prompt( "#", "App.GetLastImage(" ); if( ret ) return (_map[ret]); else return null; }
	IsBluetoothOn() { return prompt( "#", "App.IsBluetoothOn(" )=="true"; }
	IsScreenOn() { return prompt( "#", "App.IsScreenOn(" )=="true"; }
	WakeUp() { prompt( "#", "App.WakeUp(" ); }
	GoToSleep() { prompt( "#", "App.GoToSleep(" ); }
	Unlock() { prompt( "#", "App.Unlock(" ); }	
	Lock() { prompt( "#", "App.Lock(" ); }	
	SetScreenBrightness( level ) { prompt( "#", "App.SetScreenBrightness(\f"+level); }
	SetKioskMode( mode,enable,options ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options); }
	PinScreen( enable ) { prompt( "#", "App.PinScreen(\f"+enable); }
	GetMetadata( file,keys ) { return prompt( "#", "App.GetMetadata(\f"+file+"\f"+keys); }
	SetAlarm( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); }
	Call( number ) { prompt( "#", "App.Call(\f"+number ); }
	SimulateTouch( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); }
	SimulateDrag( obj,x1,y1,x2,y2,step,pause ) { prompt( "#", "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause ); }
	SimulateScroll( obj,x,y,dx,dy,count,fling ) { prompt( "#", "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling ); }
	SimulateKey( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); }
	GetJoystickState( id,key ) { return parseFloat(prompt( "#", "App.GetJoyState(\f"+id+"\f"+key)); }
	GetJoystickStates( id ) { return eval(prompt( "#", "App.GetJoyStates(\f"+id)); }
	GetJoystickName( id ) { return prompt( "#", "App.GetJoyName(\f"+id); }
	SetJoystickOptions( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); }
	SetAutoBoot( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); }
	SetAutoWifi( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }
	SetAutoStart( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }
	HttpRequest( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); }
	UploadFile( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); }
	SaveCookies() { prompt( "#", "App.SaveCookies(" ); }	
	ClearCookies( session ) { prompt( "#", "App.ClearCookies(\f"+session ); }
	SetUserAgent( agent ) { prompt( "#", "App.SetUserAgent(\f"+agent ); } 
    SetUserCreds( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); }
    QueryContent( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); }
	Uri2Path( uri ) { return prompt( "#", "App.Uri2Path(\f"+uri); }
	Path2Uri( path ) { return prompt( "#", "App.Path2Uri(\f"+path); }
	ScreenShot( fileName,quality ) { prompt( "#", "App.ScreenShot(\f"+fileName+"\f"+quality ); }
	InstallWallpaper( packageName,className ) { prompt( "#", "App.InstallWallpaper\f"+packageName+"\f"+className ); }
	GetTextBounds ( txt,size,width,obj ) { return eval(prompt( "#", "App.GetTextBounds(\f"+txt+"\f"+size+"\f"+width+"\f"+(obj?obj.id:null)) ); }
	InstallApp( apkFile,callback,options ) { prompt( "#", "App.InstallApp(\f"+apkFile+"\f"+_Cbm(callback)+"\f"+options ); }
	GetAccessibility() { return JSON.parse(prompt( "#", "App.GetAccessibility(" )); }
	GetSpeechEngines() { return JSON.parse(prompt( "#", "App.GetSpeechEngines(" )); }
	
	
	
	//These objects auto-release (ie. single instance)
	//CreateListView( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }	
	CreateSMS() { if( _sms ) _sms.Release(); var ret = prompt( "#", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; }
	CreateEmail( account,password ) { if( _eml ) _eml.Release(); var ret = prompt( "#", "App.CreateEmail("+account+"\f"+password ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; }
	CreateSmartWatch( type ) { if( _smw ) _smw.Release(); var ret = prompt( "#", "App.CreateSmartWatch(\f"+type ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; }
	CreateCrypt( options ) { if( _crp ) _crp.Release(); var ret = prompt( "#", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; }
	CreateSpeechRec( options ) { if( _spr ) _spr.Release(); var ret = prompt( "#", "App.CreateSpeechRec(\f"+options ); if( ret) _spr = new Spr(ret); else _spr = null; return _spr; }
	CreateWallpaper( options ) { if( _wpr ) _wpr.Release(); var ret = prompt( "#", "App.CreateWallpaper(\f"+options ); if( ret) _wpr = new Wpr(ret); else _wpr = null; return _wpr; }
	
	//These objects need releasing manually.
	CreateTheme( baseTheme ) { var ret = prompt( "#", "App.CreateTheme(\f"+baseTheme ); if( ret ) return new Thm(ret); else return null;  }		
	CreateOverlay( options ) { var ret = prompt( "#", "App.CreateOverlay(\f"+options ); if( ret ) return new Ovl(ret); else return null; }		
	
	CreateNxtRemote() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }	
	CreateWebServer( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; }	
	CreateUSBSerial( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; }	
	CreateSysProc( cmd,env,dir,options ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd+"\f"+env+"\f"+dir+"\f"+options ); if( ret ) return new Sys(ret); else return null; }	
	CreateService( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; }	
	CreateSynth( type ) { var ret = prompt( "#", "App.CreateSynth("+type ); if( ret ) return new Syn(ret); else return null; }	
	
	
	CreateFile( file,mode ) { var ret = prompt( "#", "App.CreateFile(\f"+file+"\f"+mode ); if( ret ) return new Fil(ret); else return null; }	
	
	//Special methods.
	Start() { if(typeof OnStart=='function') { OnStart(); prompt("#","_Start"); _started=true; } }
	
	CreateObject( name, type ) 
	{ 
		if( !type ) try { return eval( "new "+name+"()" ); } catch(e) { return null; } 
		else { var ret = prompt( "#", "_Obj(\f"+type+"\f"+name ); if( ret ) return new SObj(ret); else return null; }
	}	
	
	GA( cmd )
	{
		try {
			var dbg = _dbg; _UseDbg( false );
			if( app.FileExists("/Sys/ga.js") ) 
			{
				if( cmd.toLowerCase()=='create' ) {
					_LoadScriptSync( "/Sys/ga.js" );
					window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
					ga('create', arguments[1], {'storage':'none', 'clientId':app.GetDeviceId()});
					ga('set', { checkProtocolTask: null, checkStorageTask: null });
				}
				else ga.apply( this, arguments );
			}
			_UseDbg( dbg );
		}
		catch(e){}
	}
	
	var _anim_t = 0;
	function _animatev8() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t;}}
	function _animate() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t; requestAnimationFrame(_animate);}}
	Animate( callback,fps )
	{
		_cbAnimate = callback;
		_anim_t = new Date().getTime();
		if( _isV8 ) {
			_fps=(fps?fps:30);
			if( _cbAnimate ) _tmAnimate = setInterval( _animatev8, 1000/_fps );
			else if( _tmAnimate ) clearInterval( _tmAnimate );
		}
		else {
			window._fps=(fps?fps:30); 
			requestAnimationFrame(_animate); 
		}
	}
	
	GetAppLanguages() { return _languages.langs; }
	
	GetAppLangCode(name) { 
		if( name ) return _languages.codes[name.toLowerCase()]; 
		else return _curLang; 
	}

	SetAppLanguage( name ) 
	{ 
		var file = _GetMain().includes("/assets/samples/") ? "/assets/lang.json" : "lang.json";
		var json = app.ReadFile( file ) 
		_languages = JSON.parse(json);
		_curLang = _languages.codes[name.toLowerCase()];
	}

	//Helper classes.
	CreateNxt() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
	CreateTabs( list,width,height,options ) { return new _Tabs( list,width,height,options ); }
	CreateWebSocket( id,ip,port,options ) { return new _WebSock( id,ip,port,options ); }
	CreateWizard( title,width,height,callback,options ) { return new _Wizard( title,width,height,callback,options ) }
	CreateGame( file,orient ) { return new _Game( file,orient ) }
	
	//Externally defined methods.
	ShowTextDialog( title,deflt,callback ) { _ShowTextDialog( title,deflt,callback ) }
	ShowCheckList( title,list,callback,width,height,options ) { return new _CheckList( title,list,callback,width,height,options ); }
	ShowTip( msg,left,top,timeOut,options ) { _ShowTip( msg,left,top,timeOut,options ) }
	PlaySound( file ) { _PlaySound( file ) }
	ChooseWifi( title1,title2,callback,options,extra ) { var wifi = new _WifiScan( title1,title2,callback,options,extra ); wifi.Select(); }
	
	//Internal plugins.
	CreateMusic() { _LoadScriptSync( "/Sys/plugs/Music/Music.inc" ); return new Music() }
	CreateCloudStore( key,server ) { _LoadScriptSync( "/Sys/cloud.js" ); return new CloudStore(key,server) }
	
	//Hybrid objects.
	CreateGameView( width,height,options ) 
	{ 
		if( options ) options = options.toLowerCase(); else options = "";
	    if( options.indexOf("gles")>-1 ) {
			var obj = prompt( "#", "App.CreateGameView(\f"+width+"\f"+height+"\f"+options );  
			if( obj ) return new WGL(obj); else return null; 
		} 
		else {
			var obj = app.CreateWebView( width,height,"gameview"+options );
			obj.GetType() { return "GameView"; }
			obj.SetFrameRate( fps ) { }
			obj.SetFile( file ) { obj.LoadHtml( _WglTemplate(file),"" ) }
			return obj;
		}
	}
	
	CreateGLView( width,height,options ) 
	{
	    var glv = null;
	    if( options.toLowerCase().indexOf("fast2d") > -1 )
	    {
			_LoadScriptSync( "/Sys/cp.js" );
    		_LoadScriptSync( "/Sys/gl.js" );
    		glv = new GLV( prompt( "#", "App.CreateGLView(\f"+width+"\f"+height+"\f"+options ));
    		glv.canvas = FastCanvas.create(); 
    		glv.ctx = glv.canvas.getContext("2d");
    		glv.width = Math.round(app.GetDisplayWidth()*width);
    		glv.height = Math.round(app.GetDisplayHeight()*height);
    		glv.aspect = glv.width / glv.height;
    		glv.GetType() { return "GLView"; }
	    }
		return glv;
	}
	
	OpenDatabase( name ) 
	{
		_LoadScriptSync( "/Sys/cp.js" );
		_LoadScriptSync( "/Sys/sql.js" );
		_CreateCP( "sqliteplugin" );
		
		var db = sqlitePlugin.openDatabase( name );
		db.name = name;
	    
	    db.GetType() { return "Database"; }
	    db.GetName() { return db.name; }
		db.ExecuteSql( sql, params, success, error ) 
		{
			if( !success ) success = null;
			if( !error ) error = _Err;
	      
			db.transaction( function(tx) { 
				tx.executeSql( sql, params, 
					function(tx,res) { if(success) success.apply(db,[res]) }, 
					function(t,e) { error.apply(db,[e.message]); } 
				); }, error
			);
		}
		db.Close() { db.close( _Log, _Err ); }
		db.Delete() { sqlitePlugin.deleteDatabase(db.name,_Log,_Err); }
		return db;
	}
}
*/
