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
import { Layout } from "./layout.ts";
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
export { Synth } from "./synth.ts";
export { Text } from "./text.ts";
export { TextEdit } from "./textedit.ts";
export { Theme } from "./theme.ts";
export { Toggle } from "./toggle.ts";
export { VideoView } from "./videoview.ts";
export { Wallpaper } from "./wallpaper.ts";
export { WebView } from "./webview.ts";
export { YesNoDialog } from "./yesnodialog.ts";
export { ZipUtil } from "./ziputil.ts";

export class Api {
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
      "App.AddCanvas(\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h,
    );
    if (ret) {
      return new Image(ret);
    } else {
      return null;
    }
  }
  */
  static addDrawer(
    layout: Layout,
    side: string,
    width?: number,
    grabWidth?: number,
  ) {
    prompt(
      "#",
      "App.AddDrawer(\f$"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth
    );
  }

  static addLayout(layout: Layout, type?: string, options?: string) {
    if (!type) {
      prompt("#", "App.AddLayout(" + layout.id);
    } else {
      return Layout.create(type, options);
    }
  }

  static alert(
    message: string,
    title?: string,
    options?: string,
    hue?: number,
  ) {
    prompt("#", "App.Alert(\f"+message+"\f"+title+"\f"+options+"\f"+hue);
  }
  static broadcast(type: string, message: string) {
    prompt("#", "App.Broadcast("+type+"\f"+message);
  }
  static broadcastIntent(
    action: string | null,
    category: string | null,
    data: string | null,
    type: string | null,
    extras?: string,
    options?: string,
  ) {
    prompt(
      "#",
      "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options,
    );
  }

  static call(number: string) {
    prompt("#", "App.Call(\f"+number);
  }
  static cancelJob() {
    prompt("#", "App.CancelJob(");
  }
  static checkLicense(key: string) {
    prompt("#", "App.CheckLicense(\f"+key);
  }
  static checkPermission(type: string) {
    return prompt("#", "App.CheckPermission(\f"+type);
  }
  static chooseAccount(callback: Function) {
    prompt("#", "App.ChooseAccount(\f"+_Cbm(callback));
  }
  static chooseContact(type: string, callback: Function) {
    prompt("#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback));
  }
  static chooseFile(
    message: string,
    type: string,
    callback: Function,
    folder: string,
  ) {
    prompt(
      "#",
      "App.ChooseFile(\f"+message+"\f"+type+"\f"+_Cbm(callback)+"\f"+folder,
    );
  }
  static chooseImage(options: string, callback: Function) {
    prompt("#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback));
  }
  static clearCookies(session: string) {
    prompt("#", "App.ClearCookies(\f"+session);
  }
  static clearData(file: string) {
    prompt("#", "App.ClearData(\f"+file);
  }
  static clearValue(name: string, file?: string) {
    prompt("#", "App.ClearValue(\f"+name+"\f"+file);
  }
  static closeDrawer(side: string) {
    prompt("#", "App.CloseDrawer(\f"+side);
  }
  static copyFile(source: string, destination: string) {
    prompt("#", "App.CopyFile("+source+"\f"+destination);
  }
  static copyFolder(
    source: string,
    destination: string,
    overwrite?: boolean,
    filter?: string,
  ) {
    prompt(
      "#",
      "App.CopyFolder(\f"+source+"\f"+destination+"\f"+overwrite+"\f"+filter,
    );
  }
  static createDebug() {
    prompt("#", "App.CreateDebug(");
  }
  static createShortcut(
    name: string,
    iconFile: string,
    file: string,
    options?: string,
  ) {
    prompt(
      "#",
      "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options,
    );
  }

  static debug(message: string) {
    prompt("#", "App.Debug(\f"+message);
  }
  static destroyLayout(layout: Layout) {
    prompt("#", "App.DestroyLayout("+layout.id);
  }
  static deleteDatabase(name: string) {
    prompt("#", "App.DeleteDatabase(\f"+name);
  }
  static deleteFile(file: string) {
    prompt("#", "App.DeleteFile("+file);
  }
  static deleteFolder(folder: string) {
    prompt("#", "App.DeleteFolder("+folder);
  }
  static disableKeys(keyList: string) {
    prompt("#", "App.DisableKeys(\f"+keyList);
  }
  static disableTouch(disable: boolean) {
    prompt("#", "App.DisableTouch(\f"+disable);
  }
  static discoverBtDevices(
    filter: string,
    onFound: Function,
    onComplete: Function,
  ) {
    prompt(
      "#",
      "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+
        _Cbm(onComplete)
      ,
    );
  }
  static downloadFile(
    source: string,
    destination: string,
    title: string,
    description?: string,
    options?: string,
  ) {
    prompt(
      "#",
      "App.DownloadFile(\f"+source+"\f"+destination+"\f"+title+"\f"+description+"\f"+options,
    );
  }

  static enableBackKey(enable: boolean) {
    prompt("#", "App.EnableBackKey(" + enable);
  }
  static error(message: string, line?: number, file?: string, quit?: boolean) {
    prompt("#", "App.Error(\f"+message+"\f"+line+"\f"+file+"\f"+quit);
  }
  static execute(js: string) {
    prompt("#", "App.Execute("+js);
  }
  static exit(kill?: boolean) {
    prompt("#", "App.Exit("+kill);
  }
  static extExec(name: string, file: string, args: string, options?: string) {
    return prompt("#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options);
  }
  static extractAssets(
    source: string,
    destination: string,
    overwrite?: boolean,
    options?: string,
  ) {
    prompt(
      "#",
      "App.ExtractAssets(\f"+source+"\f"+destination+"\f"+overwrite+"\f"+options,
    );
  }
  static extractPlugins() {
    prompt("#", "App.ExtractPlugins(\f");
  }

  static folderExists(folder: string) {
    return prompt("#", "App.FolderExists("+folder) === "true";
  }
  static fileExists(file: string) {
    return prompt("#", "App.FileExists("+file) === "true";
  }

  static getAccessibility() {
    return JSON.parse(prompt("#", "App.GetAccessibility(") || "");
  }
  static getAccounts() {
    return prompt("#", "App.GetAccounts(");
  }
  static getActivities() {
    return JSON.parse(prompt("#", "App.GetActivities(") || "");
  }
  static getAppName() {
    return prompt("#", "App.GetAppName(");
  }
  static getAppPath() {
    return prompt("#", "App.GetAppPath(");
  }

  static getBatteryLevel() {
    return parseFloat(prompt("#", "App.GetBatteryLevel(\f") || "");
  }
  static getBluetoothAddress() {
    return prompt("#", "App.GetBluetoothAddress(");
  }
  static getBluetoothName() {
    return prompt("#", "App.GetBluetoothName(");
  }
  static getBtProfileState(type: string) {
    return prompt("#", "App.GetBtProfileState(\f"+type);
  }
  static getBuildNum() {
    return parseInt(prompt("#", "App.GetBuildNum(") || "");
  }

  static getChargeType() {
    return prompt("#", "App.GetChargeType(\f");
  }
  static getClipboardText() {
    return prompt("#", "App.GetClipboardText(");
  }
  static getCountry() {
    return prompt("#", "App.GetCountry(");
  }
  static getCountryCode() {
    return prompt("#", "App.GetCountryCode(");
  }

  static getData(name: string) {
    return prompt("#", "App.GetData(\f"+name);
  }
  static getDatabaseFolder() {
    return prompt("#", "App.GetDatabaseFolder(");
  }
  static getDrawerState(side: string) {
    return prompt("#", "App.GetDrawerState(\f"+side);
  }
  static getDefaultOrientation() {
    return prompt("#", "App.GetDefaultOrientation(");
  }
  static getDeviceId() {
    return prompt("#", "App.GetDeviceId(");
  }
  static getDisplayHeight() {
    return parseFloat(prompt("#", "App.GetDisplayHeight(") || "");
  }
  static getDisplayWidth() {
    return parseFloat(prompt("#", "App.GetDisplayWidth(") || "");
  }
  static getDSVersion() {
    return parseFloat(prompt("#", "App.GetDSVersion(") || "");
  }

  static getEnv(name: string) {
    return prompt("#", "App.GetEnv(\f"+name);
  }
  static getExternalFolder() {
    return prompt("#", "App.GetExternalFolder(");
  }

  static getFileDate(file: string) {
    var d = parseInt(prompt("#", "App.GetFileDate(\f"+file) || "");
    if (d) return new Date(d);
    else return null;
  }
  static getFileSize(file: string) {
    return parseInt(prompt("#", "App.GetFileSize(\f"+file) || "");
  }
  static getFreeSpace(mode: string) {
    return parseFloat(prompt("#", "App.GetFreeSpace(\f"+mode) || "");
  }

  static getInstalledApps() {
    return JSON.parse(prompt("#", "App.GetInstalledApps(\f") || "");
  }
  static getIntent() {
    var s = prompt("#", "App.GetIntent(") || "";
    if (s.length) return JSON.parse(s);
    else return null;
  }
  static getInternalFolder() {
    return prompt("#", "App.GetInternalFolder(");
  }
  static getIPAddress() {
    return prompt("#", "App.GetIPAddress(");
  }

  static getJoystickState(id: string, key: string) {
    return parseFloat(prompt("#", "App.GetJoyState(\f"+id+"\f"+key) || "");
  }
  static getJoystickStates(id: string) {
    return JSON.parse(prompt("#", "App.GetJoyStates(\f"+id) || "");
  }
  static getJoystickName(id: string) {
    return prompt("#", "App.GetJoyName(\f"+id);
  }

  static getKeyboardHeight() {
    return parseInt(prompt("#", "App.GetKeyboardHeight(") || "");
  }

  static getLanguage() {
    return prompt("#", "App.GetLanguage(");
  }
  static getLanguageCode() {
    return prompt("#", "App.GetLanguageCode(");
  }
  static getLastButton() {
    var ret = prompt("#", "App.GetLastButton(");
    if (ret) return (_map[ret]);
    else return null;
  }
  static getLastCheckBox() {
    var ret = prompt("#", "App.GetLastCheckBox(");
    if (ret) return (_map[ret]);
    else return null;
  }
  static getLastImage() {
    var ret = prompt("#", "App.GetLastImage(");
    if (ret) return (_map[ret]);
    else return null;
  }
  static getLastToggle() {
    var ret = prompt("#", "App.GetLastToggle(");
    if (ret) return (_map[ret]);
    else return null;
  }

  static getMacAddress() {
    return prompt("#", "App.GetMacAddress(");
  }
  static getMediaFile(appName: string, ext?: string) {
    return prompt("#", "App.GetMediaFile(\f"+appName+"\f"+ext);
  }
  static GetMetadata(file: string, keys: string) {
    return prompt("#", "App.GetMetadata(\f"+file+"\f"+keys);
  }
  static getMemoryInfo() {
    return JSON.parse(prompt("#", "App.GetMemoryInfo(\f") || "");
  }
  static getModel() {
    return prompt("#", "App.GetModel(");
  }

  static getName() {
    return prompt("#", "App.GetName(");
  }
  static getNotifyId() {
    return prompt("#", "App.GetNotifyId(");
  }

  static getObjects() {
    return _GetObjects();
  }
  static getOptions() {
    return prompt("#", "App.GetOptions(");
  }
  static getOrientation() {
    return prompt("#", "App.GetOrientation(");
  }
  static getOSVersion() {
    return parseInt(prompt("#", "App.GetBuildNum(") || "");
  }

  static getPackageName() {
    return prompt("#", "App.GetPackageName(");
  }
  static getPairedBtDevices() {
    return JSON.parse(prompt("#", "App.GetPairedBTDevices(\f") || "");
  }
  static getPath() {
    return prompt("#", "App.GetPath(");
  }
  static getPermission(type: string, callback: Function) {
    prompt("#", "App.GetPermission(\f"+type+"\f"+_Cbm(callback));
  }
  static getPrivateFolder(name: string, options?: string) {
    return prompt("#", "App.GetPrivateFolder(\f"+name+"\f"+options);
  }

  static getResourceId(name: string, options?: string) {
    return parseInt(
      prompt("#", "App.GetResourceId(\f" + name + "\f" + options) || "",
    );
  }
  static getRingerMode() {
    return prompt("#", "App.GetRingerMode(");
  }
  static getRotation() {
    return parseInt(prompt("#", "App.GetRotation(") || "");
  }
  static getRSSI() {
    return parseInt(prompt("#", "App.GetRSSI(") || "");
  }
  static getRunningApps() {
    return JSON.parse(prompt("#", "App.GetRunningApps(\f") || "");
  }
  static getRunningServices() {
    return JSON.parse(prompt("#", "App.GetRunningServices(\f") || "");
  }

  static getScreenDensity() {
    return parseFloat(prompt("#", "App.GetScreenDensity(") || "");
  }
  static getScreenHeight(options?: string) {
    return parseFloat(prompt("#", "App.GetScreenHeight(\f"+options) || "");
  }
  static getScreenWidth(options?: string) {
    return parseFloat(prompt("#", "App.GetScreenWidth(\f"+options) || "");
  }
  static getSharedFiles() {
    var s = prompt("#", "App.GetSharedFiles(") || "";
    if (s.length) return s.split(",");
    else return null;
  }
  static getSharedText(index: string) {
    return prompt("#", "App.GetSharedText("+index);
  }
  static getSpeakerPhone() {
    return prompt("#", "App.GetSpeakerPhone(") === "true";
  }
  static getSpecialFolder(name: string) {
    return prompt("#", "App.GetSpecialFolder(\f"+name);
  }
  static getSpeechEngines() {
    return JSON.parse(prompt("#", "App.GetSpeechEngines(") || "");
  }
  static getSSID() {
    return prompt("#", "App.GetSSID(");
  }

  static getTextBounds(text: string, size?: number, width?: number, obj?: any) {
    return JSON.parse(
      prompt(
        "#",
        "App.GetTextBounds(\f"+text+"\f"+size+"\f"+width+"\f"+(obj
          ? obj.id
          : null),
      ) || "",
    );
  }
  static getThemeInfo() {
    return JSON.parse(prompt("#", "App.GetThemeInfo(") || "");
  }
  static getThumbnail(
    source: string,
    destination?: string,
    width?: number,
    height?: number,
  ) {
    prompt(
      "#",
      "App.GetThumbnail(\f"+source+"\f"+destination+"\f"+width+"\f"+height,
    );
  }
  static getTop() {
    return parseFloat(prompt("#", "App.GetTop(") || "");
  }

  static getUser() {
    return prompt("#", "App.GetUser(");
  }

  static getVersion() {
    return parseFloat(prompt("#", "App.GetVersion(") || "");
  }
  static getVolume(stream: string) {
    return parseFloat(prompt("#", "App.GetVolume(\f"+stream) || "");
  }

  static goToSleep() {
    prompt("#", "App.GoToSleep(");
  }

  static hasSoftNav() {
    return prompt("#", "App.HasSoftNav(") === "true";
  }
  static hideProgress() {
    prompt("#", "App.HideProgress(");
  }
  static hideProgressBar() {
    prompt("#", "App.HideProgressBar(");
  }
  static hideKeyboard() {
    prompt("#", "App.HideKeyboard(");
  }
  static HttpRequest(
    type: string,
    baseUrl: string,
    path?: string,
    params?: string,
    callback?: Function,
    headers?: string,
  ) {
    prompt(
      "#",
      "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+
        _Cbm(callback)
      +"\f"+headers,
    );
  }

  static inIDE() {
    return prompt("#", "App.InIDE(") === "true";
  }
  static installApp(apkFile: string, callback?: Function, options?: string) {
    prompt("#", "App.InstallApp(\f"+apkFile+"\f"+_Cbm(callback)+"\f"+options);
  }
  static installWallpaper(packageName: string, className: string) {
    prompt("#", "App.InstallWallpaper\f"+packageName+"\f"+className);
  }

  static isAPK() {
    return prompt("#", "App.IsAPK(") === "true";
  }
  static isAppInstalled(packageName: string) {
    return prompt("#", "App.IsAppInstalled(\f"+packageName) === "true";
  }
  static isBluetoothEnabled() {
    return prompt("#", "App.IsBluetoothEnabled(") === "true";
  }
  static isBluetoothOn() {
    return prompt("#", "App.IsBluetoothOn(") === "true";
  }
  static isBtDevicePaired(name: string) {
    return prompt("#", "App.IsBtDevicePaired(\f"+name) === "true";
  }
  static isCharging() {
    return prompt("#", "App.IsCharging(") === "true";
  }
  static isChrome() {
    return prompt("#", "App.IsChrome(") === "true";
  }
  static isConnected() {
    return prompt("#", "App.IsConnected(") === "true";
  }
  static isDebugEnabled() {
    return _dbg ? true : false;
  }
  static isDebugging() {
    return prompt("#", "App.IsDebugging(") === "true";
  }
  static isEngine() {
    return prompt("#", "App.IsEngine(") === "true";
  }
  static isFolder(folder: string) {
    return prompt("#", "App.IsFolder("+folder) === "true";
  }
  static isKeyboardShown() {
    return prompt("#", "App.IsKeyboardShown(") === "true";
  }
  static isLocationEnabled(types: string) {
    return prompt("#", "App.IsLocationEnabled(\f"+types) === "true";
  }
  static isNavBarOnRight() {
    return prompt("#", "App.IsNavBarOnRight(") === "true";
  }
  static isNewVersion() {
    return prompt("#", "App.IsNewVersion(") === "true";
  }
  static isPortrait() {
    return prompt("#", "App.GetOrientation(") === "Portrait";
  }
  static isPremium() {
    return prompt("#", "App.IsPremium(") === "true";
  }
  static isScreenOn() {
    return prompt("#", "App.IsScreenOn(") === "true";
  }
  static isScoped() {
    return prompt("#", "App.IsScoped(") === "true";
  }
  static isService() {
    return prompt("#", "App.IsService(") === "true";
  }
  static isStarted() {
    return prompt("#", "App.IsStarted(") === "true";
  }
  static isTablet() {
    return prompt("#", "App.IsTablet(") === "true";
  }
  static isTV() {
    return prompt("#", "App.IsTV(") === "true";
  }
  static isWifiApEnabled() {
    return prompt("#", "App.IsWifiApEnabled(") === "true";
  }
  static isWifiEnabled() {
    return prompt("#", "App.IsWifiEnabled(") === "true";
  }

  static killApp(procId: string) {
    prompt("#", "App.KillApp("+procId);
  }

  static launchApp(packageName: string, noPlay?: boolean) {
    prompt("#", "App.LaunchApp(\f" + packageName + "\f" + noPlay);
  }
  static listFolder(
    path: string,
    filter?: string,
    limit?: number,
    options?: string,
  ) {
    return JSON.parse(
      prompt(
        "#",
        "App.ListFolder(\f" + path + "\f" + filter + "\f" + limit + "\f" +
          options,
      ) || "",
    );
  }
  static loadBoolean(name: string, dflt?: string, file?: string) {
    return (prompt(
      "#",
      "App.LoadBoolean(" + name + "\f" + dflt + "\f" + file,
    ) === "true");
  }
  static loadNumber(name: string, dflt?: string, file?: string) {
    return parseFloat(
      prompt("#", "App.LoadNumber(" + name + "\f" + dflt + "\f" + file) || "",
    );
  }
  static loadPlugin(url: string) {
    _LoadPlugin(url);
  }
  static loadScript(url: string, callback: Function) {
    _LoadScript(url, callback);
  }
  static loadText(name: string, dflt?: string, file?: string) {
    return prompt("#", "App.LoadText(" + name + "\f" + dflt + "\f" + file);
  }
  static lock() {
    prompt("#", "App.Lock(");
  }
  static lockDrawer(side: string) {
    prompt("#", "App.LockDrawer(\f"+side);
  }
  static makeFolder(folder: string) {
    prompt("#", "App.MakeFolder("+folder);
  }
  static openDrawer(side: string) {
    prompt("#", "App.OpenDrawer(\f"+side);
  }
  static openFile(file: string, type: string, choose: string) {
    prompt("#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose);
  }
  static openUrl(url: string, type: string, choose: string) {
    prompt("#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose);
  }

  static pairBtDevice(address: string, callback: Function) {
    prompt("#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback));
  }
  static path2Uri(path: string) {
    return prompt("#", "App.Path2Uri(\f"+path);
  }
  static pinScreen(enable: boolean) {
    prompt("#", "App.PinScreen(\f"+enable);
  }
  static playRingtone(type: string) {
    prompt("#", "App.PlayRingtone(\f"+type);
  }
  static preventScreenLock(mode?: string) {
    prompt("#", "App.PreventScreenLock("+mode);
  }
  static preventWifiSleep() {
    prompt("#", "App.PreventWifiSleep(");
  }

  static queryContent(
    uri: string,
    columns: string,
    select: string,
    args: string,
    sort: string,
  ) {
    return JSON.parse(
      prompt(
        "#",
        "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort,
      ) || "",
    );
  }
  static quit(message?: string, title?: string, options?: string) {
    prompt("#", "App.Quit(\f"+message+"\f"+title+"\f"+options);
  }

  static readFile(file: string, encoding: string) {
    return prompt("#", "App.ReadFile(\f"+file+"\f"+encoding);
  }
  static redirectAssets(dir: string) {
    prompt("#", "App.RedirectAssets(\f"+dir);
  }
  static removeDrawer(side: string) {
    prompt("#", "App.RemoveDrawer(\f"+side);
  }
  static removeLayout(layout: Layout) {
    prompt("#", "App.RemoveLayout("+layout.id);
  }
  static renameFile(source: string, destination: string) {
    prompt("#", "App.RenameFile(\f"+source+"\f"+destination);
  }
  static renameFolder(source: string, destination: string) {
    prompt("#", "App.RenameFile(\f"+source+"\f"+destination);
  }
  static replaceInFile(
    file: string,
    text: string,
    rep: string,
    options?: string,
  ) {
    prompt("#", "App.ReplaceInFile(\f"+file+"\f"+text+"\f"+rep+"\f"+options);
  }

  static saveText(name: string, value: string, file?: string) {
    prompt("#", "App.SaveText("+name+"\f"+value+"\f"+file);
  }
  static saveNumber(name: string, value: number, file?: string) {
    prompt("#", "App.SaveNumber("+name+"\f"+value+"\f"+file);
  }
  static saveBoolean(name: string, value: boolean, file?: string) {
    prompt("#", "App.SaveBoolean("+name+"\f"+value+"\f"+file);
  }
  static saveCookies() {
    prompt("#", "App.SaveCookies(");
  }
  static scheduleJob(delay: number, options?: string) {
    prompt("#", "App.ScheduleJob(\f"+delay+"\f"+options);
  }
  static script(file: string) {
    _LoadScriptSync(file);
  }
  static scanFile(file: string) {
    prompt("#", "App.ScanFile(\f"+file);
  }
  static screenShot(fileName: string, quality: string) {
    prompt("#", "App.ScreenShot(\f"+fileName+"\f"+quality);
  }
  static sendIntent(
    packageName: string | null,
    className: string | null,
    action: string | null,
    category: string | null,
    uri: string | null,
    type: string | null,
    extras: string,
    options?: string,
    callback?: Function,
  ) {
    prompt(
      "#",
      "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+
        _Cbm(callback)
      ,
    );
  }
  static sendMessage(message: string) {
    prompt("#", "App.SendMessage(\f"+message);
  }
  static sendMail(
    address: string,
    subject?: string,
    body?: string,
    attach?: string,
    type?: string,
    options?: string,
  ) {
    prompt(
      "#",
      "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options,
    );
  }
  static sendFile(
    file: string,
    subject?: string,
    text?: string,
    choose?: string,
  ) {
    prompt("#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose);
  }
  static sendText(text: string, subject?: string, choose?: string) {
    prompt("#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose);
  }
  static sendImage(file: string, choose: string) {
    prompt("#", "App.SendImage(\f"+file+"\f"+choose);
  }
  static sendSMS(message: string, number: string) {
    Api.sendIntent(
      null,
      null,
      "android.intent.action.SENDTO",
      null,
      "smsto:" + number,
      null,
      JSON.stringify([{ name: "sms_body", type: "string", value: message }]),
    );
  }
  static setAlarm(
    type: string,
    id: string,
    callback: Function,
    time: number,
    interval: number,
    options?: string,
  ) {
    return prompt(
      "#",
      "App.SetAlarm(\f" + type + "\f" + id + "\f" + _Cbm(callback) + "\f" +
        time + "\f" + interval + "\f" + options,
    );
  }
  static setAutoBoot(auto: boolean) {
    prompt("#", "App.SetAutoBoot(\f"+auto);
  }
  static setAutoStart(appName: string) {
    prompt("#", "App.SetAutoStart(\f"+appName);
  }
  static setAutoWifi(auto: boolean) {
    prompt("#", "App.SetAutoWifi(\f"+auto);
  }
  static setBackColor(color: string) {
    prompt("#", "App.SetBackColor(\f"+color);
  }
  static setBluetoothEnabled(enable: boolean) {
    prompt("#", "App.SetBluetoothEnabled(\f"+enable);
  }
  static setClipboardText(text: string) {
    prompt("#", "App.SetClipboardText("+text);
  }
  static setData(name: string, value: string) {
    prompt("#", "App.SetData(\f"+name+"\f"+value);
  }
  static setDebug(switches: boolean) {
    prompt("#", "_UseDbg(\f" + switches);
    _dbg = switches;
  }
  static setDebugEnabled(enable: boolean) {
    prompt("#", "_UseDbg(\f" + enable);
    _dbg = enable;
  }
  static setDensity(dpi: number) {
    prompt("#", "App.SetDensity(\f"+dpi);
  }
  static setInBackground() {
    prompt("#", "App.SetInBackground(\f");
  }
  static setInForeground(
    title: string,
    text: string,
    largeIcon: string,
    smallIcon: string,
    importance: string,
  ) {
    prompt(
      "#",
      "App.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance,
    );
  }
  static setJoystickOptions(options: string) {
    prompt("#", "App.SetJoystickOptions(\f"+options);
  }
  static setKioskMode(mode: string, enable: boolean, options?: string) {
    prompt("#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options);
  }
  static setMenu(list: string, iconPath: string) {
    prompt("#", "App.SetMenu("+list+"\f"+iconPath);
  }
  static setMockLocation(
    latitude: number,
    longitude: number,
    accuracy?: string,
    speed?: number,
  ) {
    prompt(
      "#",
      "App.SetMockLocation(\f"+latitude+"\f"+longitude+"\f"+accuracy+"\f"+speed,
    );
  }
  static setNavBarColor(color: string) {
    prompt("#", "App.SetNavBarColor(\f"+color);
  }
  static setOnBroadcast(callback: Function, action: string) {
    prompt("#", "App.SetOnBroadcast(\f"+_Cbm(callback)+"\f"+action);
  }
  static setOnDebug(callback: Function) {
    prompt("#", "App.SetOnDebug(\f"+_Cbm(callback));
  }
  static setOnError(callback: Function) {
    prompt("#", "App.SetOnError(\f"+_Cbm(callback));
  }
  static setOnKey(callback: Function) {
    prompt("#", "App.SetOnKey(\f"+_Cbm(callback));
  }
  static setOnShowKeyboard(callback: Function) {
    prompt("#", "App.SetOnShowKeyboard(\f"+_Cbm(callback));
  }
  static setOnWifiChange(callback: Function) {
    prompt("#", "App.SetOnWifiChange(\f"+_Cbm(callback));
  }
  static setOptions(options: string) {
    prompt("#", "App.SetOptions(\f"+options);
  }
  static setOrientation(orient: string, callback?: Function) {
    prompt("#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback));
  }
  static setPosition(
    left: number,
    top?: number,
    width?: number,
    height?: number,
    options?: string,
  ) {
    prompt(
      "#",
      "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options,
    );
  }
  static setPriority(level: string) {
    prompt("#", "App.SetPriority(\f"+level);
  }
  static setRingerMode(mode: string) {
    prompt("#", "App.SetRingerMode(\f"+mode);
  }
  static setScreenBrightness(level: number) {
    prompt("#", "App.SetScreenBrightness(\f"+level);
  }
  static setScreenMode(mode: string) {
    prompt("#", "App.SetScreenMode(\f"+mode);
  }
  static setSharedApp(name: string) {
    prompt("#", "App.SetSharedApp("+name);
  }
  static setSpeakerPhone(on: boolean) {
    prompt("#", "App.SetSpeakerPhone(\f"+on);
  }
  static setStatusBarColor(color: string) {
    prompt("#", "App.SetStatusBarColor(\f"+color);
  }
  static setTheme(theme: any) {
    prompt("#", "App.SetTheme(\f"+(theme ? theme.id : null));
  }
  static setTitle(title: string) {
    prompt("#", "App.SetTitle("+title);
  }
  static setUserAgent(agent: string) {
    prompt("#", "App.SetUserAgent(\f"+agent);
  }
  static setUserCreds(name: string, password: string) {
    prompt("#", "App.SetUserCreds(\f"+name+"\f"+password);
  }
  static setVolume(stream: string, level: number, options?: string) {
    prompt("#", "App.SetVolume(\f"+stream+"\f"+level+"\f"+options);
  }
  static setWifiApEnabled(enable: boolean, ssid: string, key?: string) {
    prompt("#", "App.SetWifiApEnabled(\f"+enable+"\f"+ssid+"\f"+key);
  }
  static setWifiEnabled(enable: boolean) {
    prompt("#", "App.SetWifiEnabled(\f"+enable);
  }
  static showDebug(show: boolean) {
    prompt("#", "App.ShowDebug("+show);
  }
  static showKeyboard(obj: any) {
    return prompt("#", "App.ShowKeyboard(\f"+obj.id) === "true";
  }
  static showMenu() {
    prompt("#", "App.ShowMenu(");
  }
  static showPopup(message: string, options?: string) {
    prompt("#", "App.ShowPopup("+message+"\f"+options);
  }
  static showProgress(message: string, options?: string) {
    prompt("#", "App.ShowProgress(\f"+message+"\f"+options);
  }
  static showProgressBar(title: string, percent: number, options?: string) {
    prompt("#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options);
  }
  static simulateDrag(
    obj: any,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    step: number,
    pause: number,
  ) {
    prompt(
      "#",
      "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause,
    );
  }
  static simulateKey(
    obj: any,
    keyName: string,
    modifiers: string,
    pause: number,
  ) {
    prompt(
      "#",
      "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause,
    );
  }
  static simulateScroll(
    obj: any,
    x: number,
    y: number,
    dx: number,
    dy: number,
    count: number,
    fling: boolean,
  ) {
    prompt(
      "#",
      "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling,
    );
  }
  static simulateTouch(obj: any, x: number, y: number, dir: string) {
    prompt("#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir);
  }
  static startApp(file: string, options?: string, intent?: string) {
    prompt("#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent);
  }
  static startDebugServer() {
    prompt("#", "App.StartDebugServer(");
  }
  static startService(packageName: string, className: string) {
    prompt("#", "App.StartService(\f"+packageName+"\f"+className);
  }
  static stopApp(name: string) {
    prompt("#", "App.StopApp("+name);
  }
  static stopDebugServer() {
    prompt("#", "App.StopDebugServer(");
  }
  static stopService() {
    prompt("#", "App.StopService(");
  }
  static sysExec(
    cmd: string,
    options?: string,
    maxRead?: number,
    timeout?: number,
  ) {
    return prompt(
      "#",
      "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout,
    );
  }
  static textToSpeech(
    text: string,
    pitch: number,
    rate: number,
    callback: Function,
    stream: string,
    locale: string,
    engine: string,
  ) {
    prompt(
      "#",
      "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+
        _Cbm(callback)
      +"\f"+stream+"\f"+locale+"\f"+engine,
    );
  }
  static toBack() {
    prompt("#", "App.ToBack(");
  }
  static toFront() {
    prompt("#", "App.ToFront(");
  }
  static translate(cancel: string, ok: string) {
    prompt("#", "App.Translate(\f"+cancel+"\f"+ok);
  }

  static unlock() {
    prompt("#", "App.Unlock(");
  }
  static unlockDrawer(side: string) {
    prompt("#", "App.UnlockDrawer(\f"+side);
  }
  static unpairBtDevice(address: string, callback: Function) {
    prompt("#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback));
  }
  static unzipFile(source: string, destination: string) {
    prompt("#", "App.UnzipFile(\f"+source+"\f"+destination);
  }
  static updateProgressBar(percent: number) {
    prompt("#", "App.UpdateProgressBar(\f"+percent);
  }
  static uploadFile(
    url: string,
    file: string,
    name: string,
    callback: Function,
  ) {
    prompt("#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback));
  }
  static uri2Path(uri: string) {
    return prompt("#", "App.Uri2Path(\f"+uri);
  }

  static vibrate(pattern: string) {
    prompt("#", "App.Vibrate(" + pattern);
  }

  static wait(secs: number) {
    prompt("#", "App.Wait(" + secs);
  }
  static wakeUp() {
    prompt("#", "App.WakeUp(");
  }
  static wifiConnect(ssid: string, key: string) {
    prompt("#", "App.WifiConnect(\f" + ssid + "\f" + key);
  }
  static wifiScan(callback: Function, options?: string) {
    prompt("#", "App.WifiScan(\f" + _Cbm(callback) + "\f" + options);
  }
  static writeFile(
    file: string,
    text: string,
    mode?: string,
    encoding?: string,
  ) {
    prompt(
      "#",
      "App.WriteFile(\f" + file + "\f" + text + "\f" + mode + "\f" + encoding,
    );
  }

  static zipFile(source: string, destination: string) {
    prompt("#", "App.ZipFile(\f"+source+"\f"+destination);
  }
  static zipFolder(source: string, destination: string) {
    prompt("#", "App.ZipFile(\f".concat(source,"\f",destination));
  }
  /*
  */

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
}
/*
function App() 
{				
	data = {};
	GetType() { return "App"; }
	
	
	
	//These objects auto-release (ie. single instance)
	//CreateListView( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }	
	CreateSMS() { if( _sms ) _sms.Release(); var ret = prompt( "#", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; }
	CreateEmail( account,password ) { if( _eml ) _eml.Release(); var ret = prompt( "#", "App.CreateEmail("+account+"\f"+password ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; }
	CreateSmartWatch( type ) { if( _smw ) _smw.Release(); var ret = prompt( "#", "App.CreateSmartWatch(\f"+type ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; }
	CreateCrypt( options ) { if( _crp ) _crp.Release(); var ret = prompt( "#", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; }
	CreateSpeechRec( options ) { if( _spr ) _spr.Release(); var ret = prompt( "#", "App.CreateSpeechRec(\f"+options ); if( ret) _spr = new Spr(ret); else _spr = null; return _spr; }
	
	//These objects need releasing manually.
	CreateOverlay( options ) { var ret = prompt( "#", "App.CreateOverlay(\f"+options ); if( ret ) return new Ovl(ret); else return null; }		
	
	CreateNxtRemote() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }	
	CreateWebServer( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; }	
	CreateUSBSerial( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; }	
	CreateSysProc( cmd,env,dir,options ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd+"\f"+env+"\f"+dir+"\f"+options ); if( ret ) return new Sys(ret); else return null; }	
	CreateService( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; }	
	
	
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
