import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "Hello, choise option!",
        Markup.inlineKeyboard([
          Markup.button.callback("+", "lesson_like"),
          Markup.button.callback("-", "lesson_dislike"),
        ])
      );
    });

    this.bot.action("lesson_like", (ctx) => {
        ctx.session.courseLike = true;
        ctx.editMessageText("COOL!");
    });

    this.bot.action("lesson_dislike", (ctx) => {
        ctx.session.courseLike = false;
        ctx.editMessageText("SAD:(");
    });
  }
}
