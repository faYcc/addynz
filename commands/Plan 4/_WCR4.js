/*CMD
  command: /WCR4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 4
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p4", wallet, "string");
Bot.runCommand("🧩P4") 
