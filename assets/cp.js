
//----- CORDOVA PLUGIN SUPPORT -----------

var cordova = 
{
    /**
     * Plugin callback mechanism.
     */
    // Randomize the starting callbackId to avoid collisions after refreshing or navigating.
    // This way, it's very unlikely that any new callback would get the same callbackId as an old callback.
    callbackId: Math.floor(Math.random() * 2000000000),
    callbacks:  {},
    callbackStatus: {
        NO_RESULT: 0,
        OK: 1,
        CLASS_NOT_FOUND_EXCEPTION: 2,
        ILLEGAL_ACCESS_EXCEPTION: 3,
        INSTANTIATION_EXCEPTION: 4,
        MALFORMED_URL_EXCEPTION: 5,
        IO_EXCEPTION: 6,
        INVALID_ACTION: 7,
        JSON_EXCEPTION: 8,
        ERROR: 9
    },

    exec: function(success, fail, service, action, args) 
    {
        var callbackId = service + cordova.callbackId++,
            argsJson = JSON.stringify(args),
            returnValue;
    
        cordova.callbacks[callbackId] = {success:success, fail:fail};
    
        if (success || fail) {
            cordova.callbacks[callbackId].success = success;
        } else {
            delete cordova.callbacks[callbackId];
        }
     
		if( service=="FastCanvas" ) _gfx.Exec( callbackId, service, action, argsJson );
        else _ExecCP( callbackId, service, action, argsJson );
    },

    /**
     * Called by native code when returning successful result from an action.
     */
    callbackSuccess: function(callbackId, args) {
        try {
            //alert( "callbackSuccess: " + callbackId + " " + args ) 
            cordova.callbackFromNative(callbackId, true, args.status, args.message, args.keepCallback);
        } catch (e) {
            console.log("Error in error callback: " + callbackId + " = "+e);
        }
    },

    /**
     * Called by native code when returning error result from an action.
     */
    callbackError: function(callbackId, args) {
        // TODO: Deprecate callbackSuccess and callbackError in favour of callbackFromNative.
        // Derive success from status.
        try {
            cordova.callbackFromNative(callbackId, false, args.status, args.message, args.keepCallback);
        } catch (e) {
            console.log("Error in error callback: " + callbackId + " = "+e);
        }
    },

    /**
     * Called by native code when returning the result from an action.
     */
    callbackFromNative: function(callbackId, success, status, message, keepCallback) 
    {
        var callback = cordova.callbacks[callbackId];
        if (callback) {
            if (success && status == cordova.callbackStatus.OK) {
                callback.success && callback.success(message);
            } else if (!success) {
                callback.fail && callback.fail(message);
            }

            // Clear callback if not expecting any more results
            if (!keepCallback) {
                delete cordova.callbacks[callbackId];
            }
        }
    }
};
