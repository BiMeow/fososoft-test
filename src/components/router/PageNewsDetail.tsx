'use client';

import BlogVertical from '@/components/common/BlogVertical';
import Breadcrumb from '@/components/common/Breadcrumb';
import CardNews from '@/components/common/CardNews';
import { IconCalendar, IconClock } from '@/components/common/Icon';
import { newsContent } from '@/data/news';
import dayjs from 'dayjs';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { title } from 'process';
import { memo, useEffect, useState } from 'react';

let listVerticalBlog = [
	{
		image: '/images/blog-vertical-1.png',
	},
	{
		image: '/images/blog-vertical-2.png',
		content: 'Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!',
	},
];

let listBreadcrumb: any = [
	{
		title: 'Tài nguyên',
		href: '#',
	},
	{
		title: 'Blog',
		href: '#',
	},
	{
		title: 'Quản lý sản xuất',
		href: '#',
	},
];

function PageNewsDetail({ pageContent, ...props }: any) {
	const router = useRouter();

	const [activeSection, setActiveSection] = useState(-1);
	const [activeRate, setActiveRate] = useState(-1);
	const [totalRate, setTotalRate] = useState<any>(0);
	const [listRate, setListRate] = useState([
		{
			image: '/images/icon-like.png',
			number: 1,
			title: 'Hữu ích',
		},
		{
			image: '/images/icon-heart.png',
			number: 1,
			title: 'Yêu thích',
		},
		{
			image: '/images/icon-nice.png',
			number: 1,
			title: 'Thú vị',
		},
		{
			image: '/images/icon-amazing.png',
			number: 1,
			title: 'Bất ngờ',
		},
		{
			image: '/images/icon-boring.png',
			number: 1,
			title: 'Nhàm chán',
		},
		{
			image: '/images/icon-angry.png',
			number: 1,
			title: 'Tức giận',
		},
	]);

	const updateListRateChoose = (item: any) => {
		if (item) {
			if (listRate && listRate.length > 0) {
				let newData = listRate.map((_item, _index) => {
					if (_item.title == item.title) {
						return {
							...item,
						};
					} else {
						return _item;
					}
				});
				setListRate(newData);
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	const scrollSection = (id: string) => {
		const scrollTo = document.querySelector(`#${id}`);

		if (scrollTo) {
			scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	const onEnter = (i: any) => {
		setActiveSection(i);
	};

	useEffect(() => {
		if (listRate.length) {
			const total = listRate.reduce((acc, item) => {
				return acc + item.number;
			}, 0);
			setTotalRate(total);
		} else {
			setTotalRate(0);
		}
		return () => {};
	}, [listRate]);

	useEffect(() => {
		setTimeout(() => {
			let listCusSectionDetail: any = gsap.utils.toArray('.cusSectionDetail');
			if (!!listCusSectionDetail.length) {
				listCusSectionDetail.forEach((e: any, i: any) => {
					gsap.timeline({
						scrollTrigger: {
							trigger: e,
							start: 'top 60%',
							end: 'bottom 40%',
							onEnterBack: () => onEnter(i),
							onEnter: () => onEnter(i),
						},
					});
				});
			}
		}, 500);

		return () => {};
	}, []);

	console.log('BiMeow log activeSection', activeSection);

	return (
		<>
			<div className={`PageNewsDetail cusContainer secSpacing`}>
				<div className="fadeRightTopPage mb-[48px]">
					<Breadcrumb list={listBreadcrumb} />
				</div>

				<div className="layoutNewsDetail secSpacing mx-[-24px] flex flex-wrap gap-y-[30px]">
					<div className="c1 w-[63.7%] px-[24px] tl-p:w-full">
						<div className="heading fadeUpTopPage mb-[24px] space-y-[16px]">
							<div className="tag w-fit rounded-[8px] bg-[#E2F0FE] px-[8px] py-[4px] text-[12px] font-medium capitalize text-[#0F4F9E]">
								Quản Lý Sản Xuất
							</div>
							<h1 className="title text-[36px] leading-[1.2]">
								Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
							</h1>
							<div className="flex items-center justify-between">
								<div className="author flex items-center">
									<div className="avatar mr-[12px] aspect-1 w-[64px] overflow-hidden rounded-full border border-[#F1F5F7]">
										<img
											src="/images/avatar.jpg"
											alt=""
											className={`size-full object-cover`}
											width={0}
											height={0}
											sizes="100vw"
										/>
									</div>
									<div className="content">
										<p className="text-[14px] font-medium text-[#667F93]">Tác giả</p>
										<p className="text-[16px] font-bold text-[#33404A]">FOSO Creator</p>
									</div>
								</div>

								<div className="moreInfo flex gap-[24px] text-[16px] text-[#667F93]">
									<div className="flex items-center">
										<IconCalendar className="icon mr-[8px] text-[24px]" />
										<p>Cập nhật vào {dayjs(new Date()).format('DD/MM/YYYY')}</p>
									</div>
									<div className="w-px bg-[#D9E1E7]"></div>
									<div className="flex items-center">
										<IconClock className="icon mr-[8px] text-[24px]" />
										<p>10 phút đọc</p>
									</div>
								</div>
							</div>
						</div>

						<div className="contentEditor space-y-[24px]">
							{newsContent?.map((e: any, i: number) => (
								<div className="cusSectionDetail fadeUpTopPage" key={i} id={e.id}>
									{e.content}
									{e.listSub?.map((e2: any, i2: number) => (
										<div className="cusSectionDetailSub" key={i2} id={e2.id}>
											{e2.content}
										</div>
									))}
								</div>
							))}
						</div>

						<div className="rating fadeUpTopPage !mt-[72px] rounded-[24px] bg-white p-[24px] shadow-[0px_1px_3px_#1212171A]">
							<h3 className="title mb-[4px] text-center text-[20px]">Bạn thấy bài viết như thế nào?</h3>
							<p className="mb-[24px] text-center">{totalRate} phản hồi</p>

							<div className="listRate flex flex-wrap justify-center gap-[32px]">
								{listRate?.map((e: any, i: number) => (
									<div
										className={`
										itemRate flexCenter group w-[90px] cursor-pointer flex-col gap-[4px] rounded-[4px] border duration-300
										${activeRate == i ? ' border-[#10805B] text-[#10805B]' : 'border-transparent'}
										`}
										key={i}
										onClick={() => {
											setActiveRate(i);
											updateListRateChoose({ ...e, number: e.number + 1 });
										}}
									>
										<img
											src={e.image}
											alt=""
											className={`aspect-1 w-[48px] group-hover:animate-bounce`}
											width={0}
											height={0}
											sizes="100vw"
										/>
										<p className="text-[16px] font-bold">{e.number}</p>
										<p className="text-[14px] font-medium">{e.title}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="c2 fadeUpTopPage w-[36.3%] px-[24px] tl-p:w-full">
						<div className="sticky top-[150px] space-y-[32px]">
							<div className="listSection text-[16px] font-medium leading-[2] text-[#33404A]">
								{newsContent?.map((e: any, i: number) => (
									<div className="itemSection" key={i} id={e.id}>
										<p
											className={`
											cursor-pointer duration-500
											${activeSection === i ? 'text-[#15AA7A]' : 'hover:text-green'}
											`}
											onClick={() => scrollSection(e.id)}
											id={e.id}
										>
											{e.title}
										</p>
										{e.listSub?.map((e2: any, i2: number) => (
											<p
												className="itemSubSection cursor-pointer pl-[30px] hover:text-green"
												key={i2}
												id={e2.id}
												onClick={() => scrollSection(e2.id)}
											>
												{e2.title}
											</p>
										))}
									</div>
								))}
							</div>
							{listVerticalBlog?.map((e: any, i: number) => (
								<div className="itemBlog" key={i}>
									<BlogVertical data={e} />
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="listRelatedNews fadeUpTopPage">
					<h3 className="title mb-[24px]">Bài viết liên quan</h3>
					<div className="list grid grid-cols-3 gap-[32px] mb:grid-cols-1">
						{[...Array(3)]?.map((e: any, i: number) => (
							<div className="itemNews" key={i}>
								<CardNews />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(PageNewsDetail);
