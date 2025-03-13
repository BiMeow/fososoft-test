'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

function PageNewsDetail({ pageContent, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`PageNewsDetail`}>PageNewsDetail</div>
		</>
	);
}

export default memo(PageNewsDetail);
