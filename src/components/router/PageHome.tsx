'use client';

import SectionHomeHeading from '@/components/sections/home/SectionHomeHeading';
import SectionHomeListNews from '@/components/sections/home/SectionHomeListNews';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { memo, useEffect } from 'react';

function PageHome({ pageContent, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: '.decoHome1',
					// start: 'top bottom',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}).fromTo('.decoHome1', { y: 0 }, { y: 300, ease: 'sine.out' });
			gsap.timeline({
				scrollTrigger: {
					trigger: '.decoHome2',
					// start: 'top bottom',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}).fromTo('.decoHome2', { y: 0 }, { y: -300, ease: 'sine.out' });
		}, 500);

		return () => {};
	}, []);

	return (
		<>
			<div className={`PageHome relative`}>
				<img
					src="/images/home-deco.png"
					alt=""
					className="decoHome1 absolute left-0 top-[4%] w-[20%]"
					width={0}
					height={0}
					sizes="100vw"
				/>
				<img
					src="/images/home-deco.png"
					alt=""
					className="decoHome2 absolute bottom-0 right-0 w-[20%] scale-[-1]"
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
