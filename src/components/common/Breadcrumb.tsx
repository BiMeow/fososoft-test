import { useRouter } from 'next/navigation';
import { Fragment, memo } from 'react';
import { IconArrow, IconArrowDropdown } from '@/components/common/Icon';
import Link from 'next/link';

function Breadcrumb({ list = [], cusClass = '', ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`Breadcrumb`}>
				<div className={`flex items-center space-x-[5px] text-[14px] text-[#17181A] ${cusClass}`}>
					<Link href="/" className="duration-300 hover:text-green">
						Trang chủ <span className="!text-[#17181A]">{`>`}</span>
					</Link>
					{list.map((e: any, i: number) => (
						<Link
							key={i}
							href={e.href}
							className="itemBreadcrumb duration-300 last:pointer-events-none last:font-bold last:text-[#050505] hover:text-green mb:text-[8px]"
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
