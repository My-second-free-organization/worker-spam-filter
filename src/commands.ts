import { App } from "@slack/bolt";

export function registerCommands(app: App) {
  app.command("/flowforge-tasks", async ({ command, ack, respond }) => {
    await ack();
    await respond({ text: `Fetching tasks for <@${command.user_id}>...` });
  });
  app.command("/flowforge-approve", async ({ command, ack, respond }) => {
    await ack();
    await respond({ text: "Task approved!" });
  });
}
