'use client';

import SectionHomeHeading from '@/components/sections/home/SectionHomeHeading';
import SectionHomeListNews from '@/components/sections/home/SectionHomeListNews';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

function PageHome({ pageContent, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`PageHome relative`}>
				<img
					src="/images/home-deco.png"
					alt=""
					className="absolute left-0 top-[4%] w-[20%]"
					width={0}
					height={0}
					sizes="100vw"
				/>
				<img
					src="/images/home-deco.png"
					alt=""
					className="absolute bottom-0 right-0 w-[20%] scale-[-1]"
					width={0}
					height={0}
					sizes="100vw"
				/>

				<div className="relative z-10">
					<SectionHomeHeading />
					<SectionHomeListNews />
				</div>
			</div>
		</>
	);
}

export default memo(PageHome);
