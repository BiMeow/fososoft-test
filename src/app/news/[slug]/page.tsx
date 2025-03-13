import PageNewsDetail from '@/components/router/PageNewsDetail';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
    noStore();

    return <PageNewsDetail />;
}
