const Discord = require('discord.js')
const bot = new Discord.Client()
var compte = 0
bot.on('ready', () => {
    console.log('I am ready!');
});
bot.on("message", message => {
    const prefix = "!"
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const donne = args.slice(1, 2).toString();
    var motif = ""
    const command = args.shift().toLowerCase();
    for (var i = 1; i < args.length; i++) {
        motif = motif + " " + args[i]
    }
    if (command === '+') {
        message.delete(1000);
        if (!args.length || isNaN(parseFloat(donne))) {
            return message.channel.send(`:interrobang: ** Vous  n'avez pas transmis les bons argument(s) ${message.author} **!`);
        }
        compte = compte + parseFloat(donne)
        message.channel.send(`:heavy_plus_sign: - **Ajout  sur le compte principal : ` + parseFloat(donne) + `$, pour le motif suivant : ` + motif + `. (${message.author})** `);
        message.channel.send(":dollar:  **- Votre compte contient actuellement : " + "__" + compte + "__" + "$**")
    } else if (command === '-') {
        message.delete(1000);
        if (!args.length || isNaN(parseFloat(donne))) {
            return message.channel.send(`:interrobang: Vous  n'avez pas transmis les bons argument(s) ${message.author}!`);
        }
        compte = compte - parseFloat(donne)
        message.channel.send(`:heavy_minus_sign: - **Retrait  sur le compte principal : ` + parseFloat(donne) + `$, pour le motif suivant : ` + motif + `. (${message.author})** `);
        message.channel.send(":dollar:  **- Votre compte contient actuellement : " + "__" + compte + "__" + "$**")
    } else if (command === '=') {
        message.delete(1000);
        if (!args.length || isNaN(parseFloat(donne))) {
            return message.channel.send(`:interrobang: Vous  n'avez pas transmis les bons argument(s) ${message.author}!`);
        }
        compte = parseFloat(donne)
        message.channel.send(":moneybag:  **- Votre compte vient d'être initialisé à : " + "__" + compte + "__" + "$**")
    } else if (command === 'status') {
        message.delete(1000);
        message.channel.send(":dollar: ** - Votre compte contient actuellement : " + "__" + compte + "__" + "$**")
    } else if (command === 'h') {
        message.delete(1000);
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#FF0000	')
            .setTitle('Welcome, voici les différentes commandes du bot LivretDesComptes, !h pour y accèder')
            .addBlankField()
            .setThumbnail('https://image.noelshack.com/fichiers/2019/24/3/1560355585-banknotes-159085-960-720.png')
            .addField('Pour initialiser le compte banquaire : != [SOMME]', 'Exemple : != 150', true)
            .addField('Pour créditer le compte : !+ [SOMME] [MOTIF]', 'Exemple : !+ 150 Vente drogues', true)
            .addField('Pour débiter le compte : !-[SOMME]', 'Exemple : !- 150 Achat cigarettes ', true)
            .addField('Pour avoir accès au solde du compte de la Bratva : !status', 'Exemple : !status', true)
            .addField('Pour avoir accès aux différentes commandes : !h', ' Exemple : !h', true)
            .setImage('https://image.noelshack.com/fichiers/2019/24/3/1560356032-4ndhfxm.png')
            .setTimestamp()
            .setFooter('Fabriqué par Tiziano G. pour la Bratva')
        message.channel.sendEmbed(exampleEmbed)
    }
});

bot.login(process.env.BOT_TOKEN) 
