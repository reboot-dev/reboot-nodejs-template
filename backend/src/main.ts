import { Application, ExternalContext } from "@reboot-dev/reboot";

const initialize = async (context: ExternalContext) => {};

new Application({
  servicers: [],
  initialize,
}).run();
