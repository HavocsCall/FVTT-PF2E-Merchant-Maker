import { initializeMerchantData } from "./merchant-maker.criteria-data.js";
import { registerActorDirectoryButton } from "./merchant-maker.app.js";
import { registerModuleSettings } from "./merchant-maker.settings.js";

Hooks.once("init", () => {
	registerModuleSettings();
});

Hooks.once("ready", async () => {
	await initializeMerchantData();
});

registerActorDirectoryButton();
