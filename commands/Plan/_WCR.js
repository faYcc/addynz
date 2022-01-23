/*CMD
  command: /WCR
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p1", wallet, "string");
Bot.runCommand("🧩P1") 
