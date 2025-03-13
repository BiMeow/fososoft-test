import { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/common/Breadcrumb';

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

	return (
		<>
			<div className={`SectionHomeHeading secSpacing relative pb-[16px] pt-[48px] text-center`}>
				<img
					src="/images/home-heading-deco-1.png"
					alt=""
					className="absolute left-[2%] top-[20%] w-[10.2%]"
					width={0}
					height={0}
					sizes="100vw"
				/>
				<img
					src="/images/home-heading-deco-2.png"
					alt=""
					className="absolute right-[3%] top-[25%] w-[10.2%]"
					width={0}
					height={0}
					sizes="100vw"
				/>

				<div className="content cusContainer relative z-10">
					<div className="mb-[72px]">
						<Breadcrumb list={listBreadcrumb} cusClass="justify-center" />
					</div>

					<h1 className="titleHeading mb-[8px] text-[64px]">
						Blog <span className="textGradientToBottomRight font-extrabold">FOSO</span> - <br /> Cập Nhật
						Tin Tức{' '}
						<span className="relative inline-block">
							<span className="relative z-10 font-extrabold">Mới Nhất</span>
							<span className="absolute bottom-[15%] right-0 h-[28px] w-[98.5%] rounded-full bg-green"></span>
						</span>
					</h1>

					<p className="font-medium">Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</p>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeHeading);
