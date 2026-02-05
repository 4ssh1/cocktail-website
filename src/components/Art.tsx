import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../consts/index.js';

const Art = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const start = isMobile ? 'top 20%' : 'top top';

		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#art',
				start,
				end: 'bottom center',
				scrub: 1,
				pin: true,
				onLeaveBack: () => {
					gsap.set('.masked-img', { maskImage: 'url(/mask.png)', maskSize: '50%', maskPosition: 'center' });
				}
			}
		})

		maskTimeline
			.set('.masked-img', { maskImage: 'url(/mask.png)', maskSize: '50%', maskPosition: 'center', scale: 1, maskRepeat: 'no-repeat' })
			.to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', display: 'none' })
			.to('.masked-img', {
				scale: 1,
				maskPosition: 'center',
				maskSize: '100%',
				duration: 0.6,
				ease: 'power1.inOut',
				onComplete: () => {
					gsap.set('.masked-img', { maskImage: 'url(/drink-5.jpg)' });
				}
			}, '-=1')
			.to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
	})

	return (
		<div id="art">
			<h2 className="will-fade">The ART</h2>
			<div className="sm:mt-10">
				<div className="content">
					<ul className="space-y-4 will-fade mt-10">
						{goodLists.map((feature, index) => (
							<li key={index} className="md:flex items-center gap-2 hidden">
								<p>{feature}</p>
							</li>
						))}
					</ul>

					<div className="cocktail-img relative mt-10 sm:mt-50">
						<img
							src="/under-img.jpg"
							alt="cocktail"
							className="abs-center masked-img size-full object-contain mt-5"
						/>
					</div>

					<ul className="space-y-2 mt-20 md:space-y-4 will-fade">
						{featureLists.map((feature, index) => (
							<li key={index} className="flex items-center justify-start gap-2">
								<p className="md:w-fit w-60">{feature}</p>
							</li>
						))}
					</ul>
				</div>

				<div className="masked-container">
					<h2 className="will-fade">Sip-Worthy Perfection</h2>
					<div id="masked-content">
						<h3>Made with Craft, Poured with Passion</h3>
						<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Art