'use client';
import { useStorage } from '@/components/context/StorageProvider';
import { getApiBaseUrl } from '@/config/AppConfig';
import { message, notification } from 'antd';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { useIsMounted, useWindowSize } from 'usehooks-ts';

notification.config({
	duration: 2,
	maxCount: 3,
});

export const MainContext = React.createContext<any>(null);

const MainProvider: React.FC<any> = ({ children, isPrivate }) => {
	const isMounted = useIsMounted();
	const pathName = usePathname();
	const { width } = useWindowSize();
	const { setSetting, setListProductCate } = useStorage();

	const initAnimation = () => {
		let listFadeIn = gsap.utils.toArray('.fadeIn');
		listFadeIn.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					// start: 'top bottom',
					start: 'top bottom',
					end: 'top center',
					scrub: 2,
				},
			}).fromTo(l, { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' });
		});

		let listFadeUp = gsap.utils.toArray('.fadeUp');
		listFadeUp.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
					end: 'top center',
					scrub: 2,
				},
			}).fromTo(
				l,
				{ y: 75, autoAlpha: 0, opacity: 0 },
				{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeDown = gsap.utils.toArray('.fadeDown');
		listFadeDown.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
					end: 'top center',
					scrub: 2,
				},
			}).fromTo(
				l,
				{ y: -75, autoAlpha: 0, opacity: 1 },
				{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeRight = gsap.utils.toArray('.fadeRight');
		listFadeRight.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
					end: 'top center',
					scrub: 2,
				},
			}).fromTo(
				l,
				{ x: -75, autoAlpha: 0, opacity: 0 },
				{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeLeft = gsap.utils.toArray('.fadeLeft');
		listFadeLeft.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
					end: 'top center',
					scrub: 2,
				},
			}).fromTo(
				l,
				{ x: 75, autoAlpha: 0, opacity: 0 },
				{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeInTopPage = gsap.utils.toArray('.fadeInTopPage');
		listFadeInTopPage.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
				},
			}).fromTo(l, { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' });
		});

		let listFadeUpTopPage = gsap.utils.toArray('.fadeUpTopPage');
		listFadeUpTopPage.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
				},
			}).fromTo(
				l,
				{ y: 75, autoAlpha: 0, opacity: 0 },
				{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeDownTopPage = gsap.utils.toArray('.fadeDownTopPage');
		listFadeDownTopPage.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
				},
			}).fromTo(
				l,
				{ y: -75, autoAlpha: 0, opacity: 0 },
				{ y: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeRightTopPage = gsap.utils.toArray('.fadeRightTopPage');
		listFadeRightTopPage.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
				},
			}).fromTo(
				l,
				{ x: -75, autoAlpha: 0, opacity: 0 },
				{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		let listFadeLeftTopPage = gsap.utils.toArray('.fadeLeftTopPage');
		listFadeLeftTopPage.forEach((l: any) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: l,
					start: 'top bottom',
				},
			}).fromTo(
				l,
				{ x: 75, autoAlpha: 0, opacity: 0 },
				{ x: 0, autoAlpha: 1, opacity: 1, duration: 0.7, ease: 'sine.out' }
			);
		});

		ScrollTrigger.refresh();
	};

	const getSetting = async () => {
		try {
			const Apicall: any = await axios.get(getApiBaseUrl(`/api/v1/frontend/settings`));
			const res: any = Apicall.data;
			if (res.success) {
				setSetting(res.data);
			}
		} catch (error) {
			notification.warning({ message: 'Somthing wrong!' });
		}
	};

	const getListProductCate = async (query: any) => {
		try {
			const Apicall: any = await axios({
				method: 'get',
				url: getApiBaseUrl(`/api/v1/frontend/categories${query}`),
			});
			const res: any = Apicall.data;
			if (res.success) {
				setListProductCate(res.data);
			}
		} catch (error) {
			notification.warning({ message: 'Somthing wrong!' });
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// getSetting();
		// getListProductCate('');

		return () => {};
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (isMounted() && pathName) {
				window.scroll(0, 0);
				initAnimation();
				ScrollTrigger.refresh();
			}
		}, 750);

		return () => {};
	}, [isMounted, pathName]);

	// useEffect(() => {
	// 	if (width < 1000) {
	// 		ScrollTrigger.defaults({
	// 			scroller: '.mainPage',
	// 		});
	// 	}
	// 	return () => {};
	// }, [width]);

	return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainProvider;

export const useMain = () => {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error('useMain has to be used within <MainContext.Provider>');
	}
	return context;
};
