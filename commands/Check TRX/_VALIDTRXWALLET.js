/*CMD
  command: /VALIDTRXWALLET
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Check TRX
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
var eth = data.price_in_eth
var c = data.percent_change_24h
var cv = data.volume_percent_change_24h
var p = data.price_in_usd
var btc = data.price_in_btc
var mc = data.market_cap
var tk = data.token
Bot.sendMessage("Token "+tk+"\nPrecio "+p+" USD\nPrecio en ETH "+eth+" ETH\nPrecio en BTC "+btc+" BTC\nCambio del precio en las ultimas 24 horas "+c+"%\nCambio del volumen "+cv+"%\nMarketCap "+mc+" USD")
