import { createConnection, getConnection, Repository } from 'typeorm';

export const MockDbConnection = {
  async create() {
    await createConnection();
  },

  async close() {
    await getConnection().close();
  },

  getRepostory<T>(repositoryName: string): Repository<T> {
    const connection = getConnection();
    return connection.getRepository(repositoryName);
  },

  async clear() {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      console.log('entity', entity);
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  },
};
