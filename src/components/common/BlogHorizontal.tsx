import { memo, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrow } from '@/components/common/Icon';
import gsap from 'gsap';

function BlogHorizontal({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: '.BlogHorizontal .mainImageBlog',
					// start: 'top bottom',
					start: 'top 80%',
					end: 'bottom center',
					scrub: 1,
				},
			}).fromTo('.BlogHorizontal .mainImageBlog', { y: 0 }, { y: '-20%', ease: 'sine.out' });
		}, 500);

		return () => {};
	}, []);

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

				<div className="absolute bottom-0 right-[25px] w-[44%] translate-y-[26%]">
					<div className="mainImageBlog relative">
						<img
							src="/images/main-blog.png"
							alt=""
							className="relative z-[2] w-full"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<img
							src="/images/deco-blog-1.png"
							alt=""
							className="deco1 absolute right-[5%] top-0 z-[1] w-[60%]"
							width={0}
							height={0}
							sizes="100vw"
						/>
						<img
							src="/images/deco-blog-2.png"
							alt=""
							className="deco2 absolute left-[22%] top-[23%] z-[3] w-[70%]"
							width={0}
							height={0}
							sizes="100vw"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(BlogHorizontal);
