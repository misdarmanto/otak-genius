import { AdMobRewarded } from "expo-ads-admob";

const production = "ca-app-pub-8095237298596091/3079059481"; //production
                
function RewardedAd(resolve, loading, error) {
  AdMobRewarded.setAdUnitID(production);

  loading(true);
  AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
    console.log("earn reward");
    resolve(true);
  });

  AdMobRewarded.requestAdAsync()
    .then(() => {
      AdMobRewarded.showAdAsync()
        .then(() => loading(false))
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      error(true);
      loading(false);
    });
}

export default RewardedAd;
