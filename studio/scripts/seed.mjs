import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'w4e1ersx';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.log('\n======================================================');
  console.log('To seed Sanity with write permissions, provide an API token:');
  console.log('1. Go to https://sanity.io/manage');
  console.log('2. Click on project "26true" -> API -> Tokens -> "+ Add API token"');
  console.log('   - Name: Seed Script');
  console.log('   - Permissions: Editor (or Administrator)');
  console.log('3. Run:');
  console.log('   SANITY_AUTH_TOKEN="<paste-token-here>" npm run seed');
  console.log('\nAlternatively, if you are logged into Sanity CLI:');
  console.log('   npx sanity dataset import data/seed.ndjson production');
  console.log('======================================================\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function seed() {
  const ndjsonPath = path.join(__dirname, '../data/seed.ndjson');
  const lines = fs.readFileSync(ndjsonPath, 'utf-8').trim().split('\n');
  const docs = lines.map((line) => JSON.parse(line));

  console.log(`\nStarting seed: ${docs.length} documents into Sanity (${projectId}/${dataset})...`);

  const transaction = client.transaction();
  for (const doc of docs) {
    transaction.createOrReplace(doc);
  }

  const result = await transaction.commit();
  console.log(`\n✅ Successfully seeded ${result.results?.length || docs.length} documents into Sanity!`);
  console.log('Open http://localhost:3333 to see and edit your content live.\n');
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
