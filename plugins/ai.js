
import fetch from 'node-fetch'
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Apa itu OpenAI`

let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
if (!res.ok) throw eror
        let json = await res.json()
        await m.reply(`${json.result}`)
        return !0
}

handler.help = ['van <pertanyaan>']
handler.tags = ['main']
handler.command = /^(van)$/i
handler.limit = false
handler.register = true

export default handler
