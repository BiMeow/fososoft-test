'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ReactLenis } from '@studio-freight/react-lenis';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function DefaultLayout({ children, locale }: { children?: React.ReactNode; locale?: any }) {
	const lenisRef = useRef<any>();
	const { width } = useWindowSize();

	const [init, setInit] = useState<any>(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		setInit(true);
	}, []);

	useEffect(() => {
		function update(time: any) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	});

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		init && (
			<>
				<ReactLenis ref={lenisRef} autoRaf={false} root={true}>
					<div className="mainPage relative tl-p:w-screen tl-p:overflow-hidden">
						<Header />
						<div className="pageContent min-h-dvh w-full pt-[127px]">{children}</div>
						<Footer />
					</div>
				</ReactLenis>
			</>
		)
	);
}
