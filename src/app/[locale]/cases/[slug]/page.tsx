import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Chip } from '@/components/ui/chip';

interface CasePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function CasePage({ params }: CasePageProps) {
  const t = useTranslations(`cases.${params.slug}`);

  // Pull each “list” as an object of { [index]: string }
  const tasksObj = t('tasks');
  const solutionsObj = t('solutions');
  const resultsObj = t('results');
  const conclusionsObj = t('conclusions');

  console.log(tasksObj)

  // Convert to arrays in render
  const tasks = Object.values(tasksObj);
  const solutions = Object.values(solutionsObj);
  const results = Object.values(resultsObj);
  const conclusions = Object.values(conclusionsObj);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Contrast header */}
      <section className="bg-gray-900 text-white p-8 rounded-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">{t('name')}</h1>
        <div className="flex gap-4">
          <Chip variant="outline">Under NDA</Chip>
        </div>
      </section>

      {/* Responsive grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {/* Situation */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Situation</h2>
          <p>{t('situation')}</p>
        </div>

        {/* Financial Damage */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Financial Damage</h2>
          <p>{t('finDamage')}</p>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <ul className="list-disc list-inside space-y-1">
            {tasks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Solutions</h2>
          <ul className="list-disc list-inside space-y-1">
            {solutions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Problem */}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Problem</h2>
          <p>{t('problem')}</p>
        </div>

        {/* Results */}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Results</h2>
          <ul className="list-disc list-inside space-y-1">
            {results.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Financial Effect */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Financial Effect</h2>
          <p>{t('finEffect')}</p>
        </div>

        {/* Conclusions – span full width on md+ */}
        <div className="space-y-2 lg:col-span-4 md:col-span-3 sm:col-span-2">
          <h2 className="text-2xl font-semibold">Conclusions</h2>
          <ul className="list-disc list-inside space-y-1">
            {conclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next case link */}
      {t('nextCase') && (
        <section>
          <Link
            href={t('nextCase')}
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            {t('nextCase')} →
          </Link>
        </section>
      )}
    </main>
  );
}
