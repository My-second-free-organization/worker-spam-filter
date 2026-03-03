import { WebClient } from "@slack/web-api";

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function notifyTaskAssigned(channel: string, taskName: string, assignee: string) {
  await slack.chat.postMessage({ channel, text: `New task assigned: *${taskName}* to <@${assignee}>`, blocks: [{ type: "section", text: { type: "mrkdwn", text: `*${taskName}*\nAssigned to <@${assignee}>` } }, { type: "actions", elements: [{ type: "button", text: { type: "plain_text", text: "View Task" }, action_id: "view_task" }] }] });
}
