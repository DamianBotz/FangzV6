let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hayðâ¹, ingin Donasi?

ð *Pembayaran*
ð³ Via: Dana 
ð Nomor: 085785845416
ð¤ A/n: Damian
ð Mitra: Damian BOT
ð° Metode pembayaran: Online ( ~Cod~ )


Â®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/199b3e69af1419c49af96.jpg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['dana']
handler.tags = ['info']
handler.command = /^(donasidana)$/i
handler.private = true

export default handler
