var vmModule = require("./main-view-model");
var application = require("application");
var admob = require("nativescript-admob");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    // if you want to show a banner on pageload enable this block
    /*    
    admob.createBanner({
      testing: true,
      size: admob.AD_SIZE.SMART_BANNER,
      iosBannerId: "ca-app-pub-9517346003011652/3985369721",
      androidBannerId: "ca-app-pub-9517346003011652/7749101329",
      margins: {
        bottom: 50
      }
    });
    */
}
exports.pageLoaded = pageLoaded;
