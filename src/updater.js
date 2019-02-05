'use strict';

class Updater {
    
    // this will be the constructor.
    constructor(plistURL, appVersion) {
        this.url = plistURL;
        this.appVersion = appVersion;
    }
    
    // main method takes success and fail callbacks. 
    // The success callback will be if the app is up to date.
    // fail callback returns an error of either, 
    isUpdated() {
        
    }
    
    // async method to query the app.plist wherever it is hosted (using jquery.get) 
    queryPlist() {
        
    }
    
    // method to check for update, should return -1 (out of date), 0 (up to date), 1 (somehow newer), or null/error.
    checkForUpdate() {
        
    }
    
    // method to check iOS vs Android vs Browser?
    
    // method to run the plist version comparison
    
    
}