declare var _map: any;
declare var _Cbm: any;
declare var _Tween: any;
declare var _dbg: boolean;

declare interface EventArg {
    source: {
        id: string;
        data: any;
    }
    action?: string;
    count?: number;
    X?: number;
    Y?: number;
}

declare interface Callable { (): void }
declare interface OnTouchCallable { ( arg: EventArg ): void }

declare function _GetObjects(): any;
declare function _LoadPlugin(url:string): void;
declare function _LoadScript(url:string,callback?:Function): void;
declare function _LoadScriptSync(url:string): void;