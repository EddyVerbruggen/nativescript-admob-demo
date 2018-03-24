var Observable = require("tns-core-modules/data/observable").Observable;
var platform = require("tns-core-modules/platform");
var admob = require("nativescript-admob");

function createViewModel() {
  var viewModel = new Observable();

  viewModel.doCreateBanner = function (size) {
    admob.createBanner({
      // if the 'view' property is not set, the banner is overlayed on the current top most view
      testing: true,
      size: size,
      iosBannerId: "ca-app-pub-9517346003011652/3985369721",
      androidBannerId: "ca-app-pub-9517346003011652/7749101329",
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
      margins: {
        // if both are set, top wins
        //top: 10
        bottom: platform.isIOS ? 50 : 0
      },
      keywords: ["foo", "bar"]
    }).then(
        function() {
          console.log("admob createBanner done");
        },
        function(error) {
          console.log("admob createBanner error: " + error);
        }
    );
  };

  viewModel.doCreateInterstitial = function () {
    admob.createInterstitial({
      testing: true,
      iosInterstitialId: "ca-app-pub-9517346003011652/6938836122",
      androidInterstitialId: "ca-app-pub-9517346003011652/6938836122",
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: ["ce97330130c9047ce0d4430d37d713b1"]
    }).then(
        function() {
          console.log("admob createInterstitial done");
        },
        function(error) {
          console.log("admob createInterstitial error: " + error);
        }
    );
  };

  viewModel.doCreateSmartBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.SMART_BANNER);
  };

  viewModel.doCreateSkyscraperBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.SKYSCRAPER);
  };

  viewModel.doCreateLargeBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.LARGE_BANNER);
  };

  viewModel.doCreateRegularBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.BANNER);
  };

  viewModel.doCreateRectangularBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.MEDIUM_RECTANGLE);
  };

  viewModel.doCreateLeaderboardBanner = function () {
    this.doCreateBanner(admob.AD_SIZE.LEADERBOARD);
  };

  viewModel.doHideBanner = function () {
    admob.hideBanner().then(
        function() {
          console.log("admob hideBanner done");
        },
        function(error) {
          console.log("admob hideBanner error: " + error);
        }
    );
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
