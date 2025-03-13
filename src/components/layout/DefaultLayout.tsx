'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import AppConfig from '@/config/AppConfig';

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

	const options: any = useMemo(
		() => ({
			fpsLimit: 60,
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					repulse: {
						distance: 100,
						duration: 0.1,
					},
				},
			},
			particles: {
				color: {
					value: '#ffffff',
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'out',
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: { density: { enable: true }, value: 30 },
				opacity: {
					value: { min: 0.5, max: 1 },
				},
				shape: {
					type: 'image',
					options: {
						image: {
							src: AppConfig.getBaseAssetUrl('/images/deco-star.png'),
							width: 20,
							height: 20,
							replaceColor: false,
						},
					},
				},
				size: {
					value: { min: 3, max: 10 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		init && (
			<>
				{/* <Particles id="tsparticles" options={options} /> */}

				<ReactLenis ref={lenisRef} autoRaf={false} root={true}>
					<div className="mainPage relative tl-p:w-screen tl-p:overflow-hidden">
						<Header />
						<div className="pageContent min-h-[calc(100dvh-400px)] w-full">{children}</div>
						<Footer />
					</div>
				</ReactLenis>
			</>
		)
	);
}
