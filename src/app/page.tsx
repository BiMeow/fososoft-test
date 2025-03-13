import PageHome from '@/components/router/PageHome';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
	noStore();

	return <PageHome />;
}
