import { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrow } from '@/components/common/Icon';

function BlogVertical({ data, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`BlogVertical flex min-h-[650px] flex-col justify-between rounded-[24px] py-[38px]`}>
				<img src={data?.image} alt="" className="w-full" width={0} height={0} sizes="100vw" />
				<div className="content p-[23px]">
					{data?.content && (
						<h2 className="title mb-[24px] text-[20px] font-bold text-white">{data?.content}</h2>
					)}

					<div className="btnOutline flexCenter group justify-between">
						<p>tham gia ngay</p>
						<div className="icon ml-[40px] -rotate-45 text-[18px] text-white duration-300 group-hover:rotate-0 group-hover:text-darkGreen">
							<IconArrow />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(BlogVertical);
