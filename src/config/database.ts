import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://luizhenrique4na_user:LRkuJ6Iii2FbWKbUwPGJDsDpCA18jAoj@dpg-cr7rtrbtq21c739f1p70-a.oregon-postgres.render.com/luizhenrique4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
