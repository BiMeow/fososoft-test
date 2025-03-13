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
			<div className={`Footer hidden bg-orange py-[45px] text-white`}>
				<div className="cusContainer">Footer</div>
			</div>
		</>
	);
}

export default memo(Footer);
