import { useRouter } from 'next/navigation';
import { Fragment, memo } from 'react';
import { IconArrow, IconArrowDropdown } from '@/components/common/Icon';
import Link from 'next/link';

function Breadcrumb({ list = [], cusClass = '', ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`Breadcrumb cusContainer mb-[40px] `}>
				<div className={`flex items-center space-x-[5px] text-[14px] text-[#17181A] ${cusClass}`}>
					<Link href="/" className="hover:text-green duration-300">
						Trang chủ <span className="!text-[#17181A]">{`>`}</span>
					</Link>
					{list.map((e: any, i: number) => (
						<Link
							key={i}
							href={e.href}
							className="itemBreadcrumb hover:text-green duration-300 last:pointer-events-none last:font-bold last:text-[#050505] mb:text-[8px]"
						>
							{e.title} {i != list.length - 1 && <span className="!text-[#17181A]">{`>`}</span>}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default memo(Breadcrumb);
