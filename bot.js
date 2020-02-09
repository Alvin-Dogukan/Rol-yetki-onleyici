client.on("roleUpdate", async(oldRole, newRole) => {
    

    const entry = await oldRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first()) //log'dan rol editleme verilerini aldık
if((entry.executor.id === client.user.id)) return; //rolü editleyen kişi kullandığınız bot'sa işlem uygulamasın.

    let alvin = oldRole.guild.member(entry.executor); //Rolü Güncelleyen kişiyi bulduk
alvin.roles.filter(a => a.hasPermission('ADMINISTRATOR')).forEach(x => kisi.removeRole(x.id)) //**Yönetici** Yetkilerini Aldık.
alvin.roles.filter(a => a.hasPermission('MANAGE_CHANNELS')).forEach(x => kisi.removeRole(x.id))//**Kanal Yönet** Yetkilerini Aldık.
alvin.roles.filter(a => a.hasPermission('MANAGE_ROLES')).forEach(x => kisi.removeRole(x.id)) //**Rol Yönet** Yetkilerini Aldık.


//rolü eski haline çevirdik
    newRole.edit({
      name: oldRole.name, //rolün eski adı
      color: oldRole.color, //rolün eski rengi
      position: oldRole.position, //rolün eski durumunu
      permissions: oldRole.permissions, //rolün eski yetkileri
      hoist: oldRole.hoist, //rolün eski yerini ayarladık
      mentionable: oldRole.mentionable, //rolün eski etiketlenebilir/etiketlenemez olan yerlerini ayarladık.
    });
    //rol editlemeyi bitirdik.
});
client.login('Botunuzun Tokeni');
