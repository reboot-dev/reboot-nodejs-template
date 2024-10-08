import { ExternalContext, Reboot } from "@reboot-dev/reboot";
import { describe, it, before, after } from "node:test";
import assert from "node:assert";

describe("Main Application", async () => {
  let context: ExternalContext;
  let rbt: Reboot;

  before(async () => {
    rbt = new Reboot();
    await rbt.start();
    await rbt.up([]);
    context = rbt.createExternalContext("test-runner");
  });

  after(async () => {
    await rbt.stop();
  });

  describe("Servicer", () => {
    it("does not throw", async () => {
      assert.ok(context);
    });
  });
});
