import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";
import { VUE_APP_BUGSNAG_KEY, VUE_APP_BUGSNAG_STAGE } from "./environment";

const ignorePatterns = ["Request failed with status code 401"];

export function startBugsnag() {
  Bugsnag.start({
    apiKey: VUE_APP_BUGSNAG_KEY,
    releaseStage: VUE_APP_BUGSNAG_STAGE,
    enabledReleaseStages: ["production"],
    logger: null,
    plugins: [new BugsnagPluginVue()],
    onError: (event) => {
      const matches = ignorePatterns.some((p) =>
        p.includes(event.errors[0].errorMessage)
      );
      if (matches) {
        return false;
      }
    },
  });
  return Bugsnag.getPlugin("vue");
}
