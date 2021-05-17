declare var _map: any;
declare var _Cbm: any;
declare var _Tween: any;

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
