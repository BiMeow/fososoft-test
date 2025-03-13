import { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import AppConfig from '@/config/AppConfig';
import Link from 'next/link';

function CardNews({ data, hideDesc = false, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div
				className={`CardNews group relative h-full cursor-pointer overflow-hidden rounded-[20px] bg-white shadow-[0px_0px_10px_#0001] hover:bg-white hover:shadow-[0px_0px_15px_#0003]`}
			>
				<div className="image aspect-[40/27] overflow-hidden">
					<img
						// src={AppConfig.getBaseAssetUrl('/images/home/news-1.jpg')}
						src={data?.image?.vi}
						alt=""
						className="size-full object-cover duration-500 group-hover:scale-105"
					/>
				</div>
				<div className="content p-[20px]">
					<h3 className="mb-[10px] text-[18px] font-semibold duration-500 group-hover:text-red">
						{data?.name?.vi}
					</h3>
					{!hideDesc && <p className="text-[14px] text-[#979797]">{data?.description?.vi}</p>}
				</div>
				<Link href={`/news/${data?.slug?.vi}`} className="absFull" />
			</div>
		</>
	);
}

export default memo(CardNews);
