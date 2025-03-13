'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

function PageHome({ pageContent, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`PageHome`}>Page Home</div>
		</>
	);
}

export default memo(PageHome);
