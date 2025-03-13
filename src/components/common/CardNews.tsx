import { IconArrow, IconCalendar, IconClock } from '@/components/common/Icon';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { motion } from 'framer-motion';

function CardNews({ data, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<motion.div
				className={`CardNews //hover:bg-white //hover:shadow-[0px_0px_20px_#0003] group relative h-full cursor-pointer overflow-hidden bg-transparent shadow-[0px_0px_0px_#0000]`}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<div className="image aspect-1 overflow-hidden rounded-[20px]">
					<img
						src="/images/news-1.jpg"
						alt=""
						className="size-full object-fill duration-500 group-hover:scale-105"
						width={0}
						height={0}
						sizes="100vw"
						loading="lazy"
					/>
				</div>
				<div className="content space-y-[16px] pt-[24px]">
					<div className="tag w-fit rounded-[8px] bg-[#E2F0FE] px-[8px] py-[4px] text-[12px] font-medium capitalize text-[#0F4F9E]">
						Quản Lý Sản Xuất
					</div>
					<h3 className="mb-[10px] text-[24px] font-extrabold duration-500 group-hover:text-green">
						Tại sao BOM quan trọng trong quản lý sản xuất?
					</h3>
					<div className="flex gap-[12px] text-[#667F93]">
						<div className="flex items-center">
							<IconCalendar className="icon mr-[8px] text-[24px]" />
							<p>{dayjs(new Date()).format('DD/MM/YYYY')}</p>
						</div>
						<div className="w-px bg-[#D9E1E7]"></div>
						<div className="flex items-center">
							<IconClock className="icon mr-[8px] text-[24px]" />
							<p>10 phút đọc</p>
						</div>
					</div>
					<div className="flex items-center text-[#667F93]">
						<p className="font-semibold">Khám phá thêm</p>
						<IconArrow className="ml-[28px] text-[24px] duration-300 group-hover:ml-[32px]" />
					</div>
				</div>
				<Link href={`/news/bimeow`} className="absFull" />
			</motion.div>
		</>
	);
}

export default memo(CardNews);
