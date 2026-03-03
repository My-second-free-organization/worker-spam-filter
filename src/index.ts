import { App } from "@slack/bolt";
import { registerCommands } from "./commands";
import { registerEvents } from "./events";

const app = new App({ token: process.env.SLACK_BOT_TOKEN!, signingSecret: process.env.SLACK_SIGNING_SECRET! });
registerCommands(app);
registerEvents(app);

(async () => { await app.start(process.env.PORT || 3000); console.log("Slack bot running"); })();
