exports.seed = async function(knex) {
  // Insere os novos veículos sem limpar a tabela antes
  await knex('veiculos').insert([
    {
      placa: 'MBB-3030',
      montadora: 'Mercedes-Benz',
      modelo: 'Actros 2651'
    },
    {
      placa: 'DAF-4040',
      montadora: 'DAF',
      modelo: 'XF 530'
    }
  ]);
};
