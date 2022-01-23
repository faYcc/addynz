/*CMD
  command: /IPResultado
  help: 
  need_reply: 
  auto_retry_time: 
  folder: sh
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content)
var ip = result.ip
var continent = result.continent
var continent_code = result.continent_code
var country = result.country
var country_code = result.country_code
var country_capital = result.country_capital
var country_phone = result.country_phone
var country_neighbours = result.country_neighbours
var region = result.region
var city = result.city
var latitude = result.latitude
var longitude = result.longitude
var timezone = result.timezone
var currency = result.currency
var currency_code = result.currency_code
var currency_symbol = result.currency_symbol
var org = result.org
if ( ip == undefined){
Bot.sendMessage("⛓️Coloca una IP Válida")
} else {
Bot.sendMessage("*▪️IP :* `"+ip+"`\n*▪️Ciudad:* `"+city+"`\n*▪️Region:* `"+region+"`\n*▪️País :* `"+country+"`\n*▪️Código de País:* `"+country_code+"`\n*▪️Capital del País:* `"+country_capital+"`\n*▪️Continente:* `"+continent+"`\n*▪️Código del Continente:* `"+continent_code+"`\n*▪️Latitud:* `"+latitude+"`\n*▪️Longitud:* `"+longitude+"`\n*▪️Zona Horaria:* `"+timezone+"`\n*▪️Código de llamada:* `"+country_phone+"`\n*▪️Países Vecinos:* `"+country_neighbours+"`\n*▪️Moneda:* `"+currency+"`\n*▪️ Código de Moneda:* `"+currency_code+"`\n*▪️Símbolo de Moneda:* `"+currency_symbol+"`\n*▪️Proveedor de Internet:* `"+org+"`", {is_reply : true})
} 
