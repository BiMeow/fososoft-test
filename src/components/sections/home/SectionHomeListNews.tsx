import BlogHorizontal from '@/components/common/BlogHorizontal';
import BlogVertical from '@/components/common/BlogVertical';
import CardNews from '@/components/common/CardNews';
import { IconArrow, IconArrowDropdown, IconSearch } from '@/components/common/Icon';
import { Pagination, PaginationProps } from 'antd';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';

let listCate = [
	{
		title: 'Tất cả',
		amount: '108',
	},
	{
		title: 'Thiết Kế Website',
		amount: '36',
	},
	{
		title: 'Thiết Kế App Mobile',
		amount: '13',
	},
	{
		title: 'Quản Lý Sản Xuất',
		amount: '25',
	},
	{
		title: 'Quản Lý Bán Hàng',
		amount: '22',
	},
	{
		title: 'Báo Chí Nói Về FOSO',
		amount: '7',
	},
	{
		title: 'Tin Tức FOSO',
		amount: '5',
	},
];

let listVerticalBlog = [
	{
		image: '/images/blog-vertical-1.png',
	},
	{
		image: '/images/blog-vertical-2.png',
		content: 'Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!',
	},
];

function SectionHomeListNews({ ...props }) {
	const router = useRouter();

	const [curPage, setCurPage] = useState(1);

	const itemRenderPagin: PaginationProps['itemRender'] = (_, type, originalElement) => {
		if (type === 'prev') {
			return (
				<a className="flexCenter">
					<IconArrow className="mr-[8px] rotate-180 text-[24px]" /> Trang trước
				</a>
			);
		}
		if (type === 'next') {
			return (
				<a className="flexCenter">
					Trang kế tiếp <IconArrow className="ml-[8px] text-[24px]" />
				</a>
			);
		}
		return originalElement;
	};

	return (
		<>
			<div className={`SectionHomeListNews cusContainer secSpacing`}>
				<div className="layoutListNews mx-[-16px] flex">
					<div className="c1 w-[73%] px-[16px]">
						<h2 className="title mb-[24px]">Tất cả bài viết</h2>
						<div className="listNews mb-[72px] grid grid-cols-2 gap-x-[32px] gap-y-[48px]">
							<div className="blog col-span-2">
								<BlogHorizontal />
							</div>

							{[...Array(6)]?.map((e: any, i: number) => (
								<div className="itemNews" key={i}>
									<CardNews />
								</div>
							))}
						</div>
						<div className="pagin">
							<Pagination
								align="center"
								pageSize={6}
								defaultCurrent={1}
								total={60}
								className="cusPagin"
								showSizeChanger={false}
								itemRender={itemRenderPagin}
								onChange={(page, pageSize) => {
									setCurPage(page);
								}}
							/>
						</div>
					</div>
					<div className="c1 w-[27%] px-[16px] ">
						<div className="sticky top-[150px] space-y-[32px]">
							<div className="search">
								<h3 className="title mb-[24px] text-[24px]">Tìm kiếm</h3>
								<div className="flex rounded-[12px] bg-white p-[12px] shadow-[0px_12px_24px_-4px_#919EAB29]">
									<input
										type="text"
										className="cusInput w-[calc(100%-48px)] p-[12px]"
										placeholder="Tìm kiếm bài viết"
									/>
									<div className="icon flexCenter aspect-1 w-[48px] cursor-pointer rounded-[12px] bg-[#15AA7A] text-[24px] text-white duration-300 hover:bg-green hover:text-darkGreen">
										<IconSearch />
									</div>
								</div>
							</div>

							<div className="listCategories">
								<h3 className="title mb-[24px] text-[24px]">Danh mục</h3>
								<div className="list space-y-[16px]">
									{listCate?.map((e: any, i: number) => (
										<div
											className="itemCate flex cursor-pointer justify-between font-medium text-[#667F93] duration-300 hover:text-green"
											key={i}
										>
											<p>{e.title}</p>
											<p>{e.amount}</p>
										</div>
									))}
								</div>
							</div>

							{listVerticalBlog?.map((e: any, i: number) => (
								<div className="itemBlog" key={i}>
									<BlogVertical data={e} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeListNews);
