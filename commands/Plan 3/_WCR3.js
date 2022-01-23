/*CMD
  command: /WCR3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 3
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p3", wallet, "string");
Bot.runCommand("🧩P3") 
