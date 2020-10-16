const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.5455874",
        name: "Lar dos meninos",
        about: "Presta assitência a crianças de 02 a 18 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "34534543",
        images: [

            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",

            "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 7h até 20h",
        open_on_weekends: "0"
    });

    //consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages) ;

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1" ');
    console.log(orphanage);

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
});