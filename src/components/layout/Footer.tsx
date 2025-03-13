import { useStorage } from '@/components/context/StorageProvider';
import AppConfig, { getApiBaseUrl } from '@/config/AppConfig';
import { notification } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

let listMenu = [
	{
		title: 'Trang chủ',
		href: '/',
	},
	{
		title: 'Sản phẩm',
		href: '/product',
	},
	{
		title: 'Giới thiệu',
		href: '/about',
	},
	{
		title: 'Đối tác',
		href: '/partner',
	},
	{
		title: 'Tin tức',
		href: '/news',
	},
];

let listPolicy = [
	{
		title: 'Chính sách sử dụng',
		href: '/policy/TERM-AND-CONDITION',
	},
	{
		title: 'Chính sách đổi trả',
		href: '/policy/RETURN-POLICY',
	},
	{
		title: 'Chính sách giao hàng',
		href: '/policy/SHIPPING-POLICY',
	},
	{
		title: 'Chính sách thanh toán',
		href: '/policy/PAYMENT-POLICY',
	},
	{
		title: 'Chính sách bảo mật',
		href: '/policy/PRIVACY-POLICY',
	},
];

function Footer({ ...props }) {
	const { setting } = useStorage();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<any>({ mode: 'all' });

	const onSubmitSubcribe = async (dataForm: any) => {
		const Apicall: any = await axios.post(getApiBaseUrl(`/api/v1/frontend/subscribers`), dataForm);
		const res = Apicall.data;

		if (res.success) {
			notification.success({ message: res.message });
			reset();
		} else {
			notification.warning({ message: res.message || 'Vui lòng thử lại!' });
		}
	};

	return (
		<>
			<div className={`Footer bg-orange py-[45px] text-white`}>
				<div className="cusContainer">
					<div className="mb-[30px] flex items-center gap-[100px] mb:justify-center">
						<Link href={'/'}>
							<img
								src={AppConfig.getBaseAssetUrl('/images/logo.png')}
								alt="FryGo's Logo"
								className="w-[235px] mb:w-[200px]"
							/>
						</Link>
						<div className="h-px w-full rounded-[50px] bg-white mb:hidden"></div>
					</div>
					<div className="flex flex-wrap justify-between gap-[30px] font-light">
						<div className="c1 max-w-[350px] space-y-[12px] ">
							{setting?.address && <p>{setting?.address}</p>}
							{setting?.phone && (
								<p>
									Hotline:{' '}
									<a href={`tel:${setting?.phone}`} className="duration-500 hover:text-red">
										{setting?.phone}
									</a>
								</p>
							)}
							{setting?.email && (
								<p>
									Email:{' '}
									<a href={`mailto:${setting?.email}`} className="duration-500 hover:text-red">
										{setting?.email}
									</a>
								</p>
							)}
							{setting?.factoryAddress && <p>{setting?.factoryAddress}</p>}
						</div>

						<div className="c2 space-y-[12px]">
							<p className="text-[24px] font-bold">Liên kết:</p>
							{listMenu?.map((e: any, i: number) => (
								<div className="itemMenu duration-500 hover:text-red" key={i}>
									<Link href={e.href}>{e.title}</Link>
								</div>
							))}
						</div>

						<div className="c3 space-y-[12px]">
							<p className="text-[24px] font-bold">Chính sách hỗ trợ:</p>
							{listPolicy?.map((e: any, i: number) => (
								<div className="itemMenu duration-500 hover:text-red" key={i}>
									<Link href={e.href}>{e.title}</Link>
								</div>
							))}
						</div>

						<div className="c4 space-y-[20px]">
							<p className="text-[24px] font-bold">Đăng ký nhận khuyến mãi</p>
							<form className="formSubcribe space-y-[20px]" onSubmit={handleSubmit(onSubmitSubcribe)}>
								<div className="itemInput rounded-[100px] bg-white px-[30px] py-[20px]">
									<div className="relative">
										<input
											type="email"
											className="cusInput rounded-none p-0"
											placeholder="Email"
											{...register('email', { required: true })}
										/>
										{errors?.email && <div className="errors">Vui lòng kiểm tra Email!</div>}
									</div>
								</div>
								<button type="submit" className="btnMain w-fit hover:bg-white hover:text-red">
									Đăng ký
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Footer);
