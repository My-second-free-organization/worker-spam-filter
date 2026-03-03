import { App } from "@slack/bolt";

export function registerEvents(app: App) {
  app.event("app_mention", async ({ event, say }) => {
    await say(`Hi <@${event.user}>! I can help with FlowForge tasks.`);
  });
  app.action("approve_task", async ({ ack, body }) => {
    await ack();
    console.log("Task approved by", body.user.id);
  });
}
