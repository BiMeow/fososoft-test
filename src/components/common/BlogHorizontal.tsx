import { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrow } from '@/components/common/Icon';

function BlogHorizontal({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`BlogHorizontal relative overflow-hidden rounded-[40px] px-[60px] py-[55px]`}>
				<div className="content max-w-[376px]">
					<h2 className="title mb-[32px] font-bold text-white">
						Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
					</h2>

					<div className="btnOutline flexCenter group w-fit">
						<p>tham gia ngay</p>
						<div className="icon ml-[40px] -rotate-45 text-[18px] text-white duration-300 group-hover:rotate-0 group-hover:text-darkGreen">
							<IconArrow />
						</div>
					</div>
				</div>

				<img
					src="/images/main-blog.png"
					alt=""
					className="absolute bottom-0 right-[25px] w-[44%] translate-y-[26%]"
					width={0}
					height={0}
					sizes="100vw"
				/>
			</div>
		</>
	);
}

export default memo(BlogHorizontal);
