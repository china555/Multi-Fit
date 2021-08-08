module.exports = {
  type: 'postgres',
  host: 'ec2-34-224-55-230.compute-1.amazonaws.com',
  port: 5432,
  username: 'spgknahydkbrdh',
  password: '099a60d2740bdc2f3f89b61a7ada52cfbec26666103f5ec67fa2e67c53755084',
  database: 'd632s2eii95ugm',
  entities: ['dist/entity/**/*.entity.js'],
  // synchronize: process.env.NODE_ENV !== 'production',
  // dropSchema: process.env.NODE_ENV !== 'production',
  logging: true,
  ssl: {
    ca: process.env.SSL_CERT,
  },
};
