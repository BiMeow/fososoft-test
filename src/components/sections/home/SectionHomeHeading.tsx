import { memo, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/common/Breadcrumb';
import gsap from 'gsap';
import { useWindowSize } from 'usehooks-ts';

let listBreadcrumb: any = [
	{
		title: 'Tài nguyên',
		href: '#',
	},
	{
		title: 'Blog',
		href: '#',
	},
];

function SectionHomeHeading({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	useEffect(() => {
		if (width > 1280) {
			setTimeout(() => {
				gsap.timeline({
					scrollTrigger: {
						trigger: '.SectionHomeHeading .deco1',
						// start: 'top bottom',
						start: 'top center',
						end: 'bottom top',
						scrub: 2,
					},
				}).fromTo('.SectionHomeHeading .deco1', { y: -100 }, { y: 100, ease: 'sine.out' });
				gsap.timeline({
					scrollTrigger: {
						trigger: '.SectionHomeHeading .deco2',
						// start: 'top bottom',
						start: 'top center',
						end: 'bottom top',
						scrub: 2,
					},
				}).fromTo('.SectionHomeHeading .deco2', { y: -150, x: 0 }, { y: 150, x: -150, ease: 'sine.out' });
			}, 500);
		}

		return () => {};
	}, []);

	return (
		<>
			<div className={`SectionHomeHeading secSpacing relative pb-[16px] pt-[48px] text-center`}>
				<div className="deco1 absolute left-[2%] top-[20%] w-[10.2%]">
					<img
						src="/images/home-heading-deco-1.png"
						alt=""
						className="fadeRightTopPage w-full"
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div>
				<div className="deco2 absolute right-[3%] top-[25%] w-[10.2%]">
					<img
						src="/images/home-heading-deco-2.png"
						alt=""
						className=" fadeLeftTopPage w-full"
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div>

				<div className="content cusContainer relative z-10 ">
					<div className="fadeUpTopPage mb-[72px]">
						<Breadcrumb list={listBreadcrumb} cusClass="justify-center" />
					</div>

					<h1 className="titleHeading fadeUpTopPage mb-[8px] text-[64px] mb:text-[32px]">
						Blog <span className="textGradientToBottomRight font-extrabold">FOSO</span> - <br /> Cập Nhật
						Tin Tức{' '}
						<span className="relative inline-block">
							<span className="relative z-10 font-extrabold">Mới Nhất</span>
							<span className="absolute bottom-[15%] right-0 h-[28px] w-[98.5%] rounded-full bg-green"></span>
						</span>
					</h1>

					<p className="fadeUpTopPage font-medium">
						Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
					</p>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeHeading);
