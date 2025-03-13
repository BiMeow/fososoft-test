import { IconArrow, IconArrowDropdown, IconVietnam } from '@/components/common/Icon';
import AppConfig from '@/config/AppConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

function Header({ ...props }) {
	const router = useRouter();
	const pathname = usePathname();
	const { width } = useWindowSize();

	const [scrolled, setScrolled] = useState<any>(false);
	const [activeMenu, setActiveMenu] = useState<any>(0);
	const [showNav, setShowNav] = useState<any>(false);

	const onEnterPageContent = (e: any) => {
		setScrolled(e);
	};

	// useEffect(() => {
	// 	if (pathname == '/') setActiveMenu(0);
	// 	else {
	// 		setActiveMenu(-1);
	// 	}
	// 	return () => {};
	// }, [pathname]);

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: '.pageContent',
					start: '100px top',
					end: '100px top',
					onEnter: () => onEnterPageContent(true),
					onLeaveBack: () => onEnterPageContent(false),
				},
			});

			ScrollTrigger.refresh();
		}, 400);
	}, []);

	let listMenu = [
		{
			title: 'Về chúng tôi',
			href: '#',
		},
		{
			title: 'Giải pháp',
			href: '/product',
			children: [...Array(3)]?.map((e: any, i: number) => {
				return {
					title: `Giải pháp ${i + 1}`,
					href: `#`,
				};
			}),
		},
		{
			title: 'Tài nguyên',
			href: '/product',
			children: [...Array(3)]?.map((e: any, i: number) => {
				return {
					title: `Tài nguyên ${i + 1}`,
					href: `#`,
				};
			}),
		},
		{
			title: 'Liên hệ',
			href: '#',
		},
	];

	return (
		<>
			<div
				className={`
					Header //sticky fixed left-0 top-0 z-[444] w-full py-[24px] duration-300 ease-linear
					tl-p:bg-white tl-p:py-[10px]
				`}
			>
				<div
					className={`
					mx-auto flex max-w-[1280px] items-center justify-center gap-[64px] rounded-[40px]  p-[12px] shadow-[0px_0px_60px_#0000000D] duration-500
					tl-p:justify-between
					${scrolled ? 'bg-white' : 'bg-[#FFFFFFA6]'}
					`}
				>
					<Link href={'/'}>
						<img
							src={AppConfig.getBaseAssetUrl('/images/logo.png')}
							alt="FryGo's Logo"
							className="w-[134px] tl-p:w-[100px]"
							width={0}
							height={0}
							sizes="100vw"
						/>
					</Link>

					<div
						className={`
						listMenu flex gap-[16px] rounded-[50px] bg-[#FFFFFF80] px-[30px] py-[10px] backdrop-blur-[10px] duration-300
						tl-p:absolute tl-p:left-0 tl-p:top-full tl-p:h-[calc(100dvh-50px)] tl-p:w-screen tl-p:flex-col tl-p:rounded-none tl-p:bg-white
						${showNav ? '' : 'tl-p:translate-x-[-100%]'}
						`}
					>
						{listMenu?.map((e: any, i: number) => (
							<div className="itemMenu group relative" key={i}>
								<div
									className={`
									relative flex cursor-pointer items-center font-medium duration-300
									${activeMenu == i ? 'text-green' : 'text-[#25272A] hover:font-bold group-hover:text-[#000]'}
									`}
								>
									<div className="titleNav relative">
										<p className="text-[14px] font-bold opacity-0">{e.title}</p>
										<p className="absCenter whitespace-nowrap text-[14px]">{e.title}</p>
									</div>

									{!!e.children?.length ? (
										<div className="iconDropdown flexCenter ml-[8px] text-[16px]">
											<IconArrowDropdown />
										</div>
									) : (
										<Link href={e.href} className="absFull" onClick={() => setShowNav(false)} />
									)}
								</div>

								{!!e.children?.length && (
									<div className="listSubMenu hideScrollbar absolute left-1/2 top-full max-h-0 w-max -translate-x-1/2 overflow-auto pt-[0px] duration-500 ease-linear group-hover:max-h-[400px] group-hover:pt-[10px] tl-p:relative tl-p:left-[unset] tl-p:top-[unset] tl-p:translate-x-0">
										<div
											className={`
											list space-y-[10px] rounded-b-[10px] bg-[#FFFFFF80] p-[10px]
											${scrolled || pathname != '/' ? 'bg-white' : ''}
											`}
										>
											{e.children?.map((e2: any, i2: number) => (
												<div
													className="itemSubMenu relative duration-500 hover:text-green"
													key={i2}
												>
													<p className="cursor-pointer text-[14px]">{e2.title}</p>
													<Link
														href={e2.href}
														className="absFull"
														onClick={() => setShowNav(false)}
													/>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					<div className="listBtn flexCenter gap-[8px] mb:hidden">
						<div className="language group relative rounded-[50px] border border-[#09090B0D] bg-[#e5e6e7] px-[12px] py-[8px]">
							<div className="flexCenter activeLang">
								<div className="flag flexCenter aspect-1 w-[24px] rounded-full text-[24px]">
									<IconVietnam />
								</div>
								<p className="ml-[12px] mr-[4px] text-[14px] font-medium leading-[1]">VI</p>
								<IconArrowDropdown className="text-[16px]" />
							</div>

							<div className="listLang hideScrollbar absolute left-1/2 top-full max-h-0 w-max -translate-x-1/2 overflow-auto pt-[0px] duration-500 ease-linear group-hover:max-h-[400px] group-hover:pt-[10px] tl-p:relative tl-p:left-[unset] tl-p:top-[unset] tl-p:translate-x-0">
								<div
									className={`
									list space-y-[10px] rounded-b-[10px] bg-[#FFFFFF80] p-[10px]
									${scrolled ? 'bg-white' : ''}
									`}
								>
									{['VI', 'EN', 'JP'].map((e: any, i: number) => (
										<div
											className="itemLang flex cursor-pointer items-center rounded-[4px] p-[4px] duration-300 hover:bg-green"
											key={i}
										>
											<div className="flag flexCenter aspect-1 w-[24px] rounded-full text-[24px]">
												<IconVietnam />
											</div>
											<p className="ml-[12px] mr-[4px] text-[14px] font-medium leading-[1]">
												{e}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<Link href={'#'} className="" onClick={() => setShowNav(false)}>
							<div className="btnGradient flexCenter group">
								<p>Trở thành khách hàng</p>
								<div className="icon flexCenter ml-[12px] aspect-1 w-[22px] -rotate-45 rounded-full bg-[#000] text-[14px] text-white duration-300 group-hover:rotate-0">
									<IconArrow />
								</div>
							</div>
						</Link>
					</div>

					<div className="flexCenter hidden aspect-1 w-[40px] cursor-pointer rounded-[50%] bg-green tl-p:flex">
						<div
							className="hamburger-lines relative hidden tl-p:flex"
							onClick={() => {
								setShowNav(!showNav);
							}}
						>
							<span
								className={`line line1 ${showNav ? 'translate-x-[3px] translate-y-[2px] rotate-45' : ''}`}
							></span>
							<span className={`line line2 ${showNav ? 'scale-y-0' : ''}`}></span>
							<span
								className={`line line3 ${showNav ? 'translate-x-[3px] translate-y-[-1px] -rotate-45' : ''}`}
							></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Header);
