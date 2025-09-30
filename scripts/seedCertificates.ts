import { doc, setDoc } from 'firebase/firestore';
import { getDb } from '../client/src/lib/firebase';

function generateEightDigitId(): string {
  const min = 10_000_000; // inclusive
  const max = 99_999_999; // inclusive
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

async function main(): Promise<void> {
  const db = getDb();

  const common = {
    date_of_birth: '12-06-2002',
    establishment_name: 'E06210900009-Ordnance Equipment Factory Hazratpur',
    establishment_address: 'Ordnance Equipment Factory, Hazratpur, Firozabad',
    district: 'Firozabad',
    state: 'Uttar Pradesh',
    designated_trade: 'Electrical',
    sector: 'Electrical (Including New and Renewable Energy)',
    level: '5',
    training_duration_from: '01-04-2021',
    training_duration_to: '31-03-2022',
    head_in: 'Jun 2022',
    job_in: '72.50%'
  } as const;

  const trainees = [
    { trainee_name: 'Ajit Kumar Sharma' },
    { trainee_name: 'Sunita Devi' },
    { trainee_name: 'Munesh Kumar Sharma' },
  ];

  const insertions = trainees.map(async (t) => {
    const id = generateEightDigitId();
    const data = { id, ...t, ...common };
    await setDoc(doc(db, 'certificates', id), data);
    return id;
  });

  const ids = await Promise.all(insertions);
  // eslint-disable-next-line no-console
  console.log('Seeded certificate IDs:', ids.join(', '));
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});


