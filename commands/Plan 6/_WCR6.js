/*CMD
  command: /WCR6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 6
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p6", wallet, "string");
Bot.runCommand("🧩P6") 
