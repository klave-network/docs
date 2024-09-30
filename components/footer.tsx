import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="bg-background text-slate-50 pt-6 text-sm font-sansMedium">
			<div className="mx-auto max-w-[80rem] px-8">
				<div className="flex flex-wrap py-5 mb-5">
					<div className="text-light-body w-full lg:w-4/12 mb-20 lg:mb-0">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-klave-cyan to-klave-light-blue font-owners font-medium tracking-wide text-2xl sm:text-3xl">
							klave
						</span>
						&nbsp;&nbsp;&nbsp;Secured by
						<br />
						<a
							href="https://secretarium.com/"
							target="_blank"
							rel="noopener noreferrer"
							data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
							className="font-owners font-medium tracking-wide text-2xl sm:text-3xl text-white"
							aria-label="Go to Secretarium homepage"
						>
							Secretarium
						</a>
					</div>
					<div className="w-1/2 sm:w-1/4 lg:w-2/12 mb-6 md:mb-2 pr-3 lg:pr-0 lg:pl-4">
						<h2 className="h5 mb-3 font-mono text-[#C3C4C5] text-normal">Technology</h2>

						<ul className="list-style-none f5">
							<li className="lh-condensed mb-3">
								<Link href="/" className="transition-colors hover:text-klave-light-blue">
									Docs
								</Link>
							</li>
							<li className="lh-condensed mb-3">
								<Link href="/whitepaper" className="transition-colors hover:text-klave-light-blue">
									Whitepaper
								</Link>
							</li>
						</ul>
					</div>

					<div className="w-1/2 sm:w-1/4 lg:w-2/12 mb-6 md:mb-2 pr-3 md:pr-0 md:pl-4">
						<h2 className="h5 mb-3 font-mono text-[#C3C4C5] text-normal">About</h2>

						<ul className="list-style-none f5">
							<li className="lh-condensed mb-3">
								<a
									href="https://klave.com/about"
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors hover:text-klave-light-blue"
								>
									Overview
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://klave.com/pricing#faq"
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors hover:text-klave-light-blue"
								>
									FAQs
								</a>
							</li>
						</ul>
					</div>

					<div className="w-1/2 sm:w-1/4 lg:w-2/12 mb-6 md:mb-2 pr-3 md:pr-0 md:pl-4">
						<h2 className="h5 mb-3 font-mono text-[#C3C4C5] text-normal">Contact</h2>

						<ul className="list-style-none f5">
							<li className="lh-condensed mb-3">
								<a
									href="https://klave.com/contact"
									target="_blank"
									rel="noopener noreferrer"
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									Contact
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://twitter.com/KlaveNetwork"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to Twitter","label":"text:twitter"}'
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									Twitter
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://www.linkedin.com/company/klave-network/"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{& quot;category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									LinkedIn
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://discord.gg/MkUxsVeqDW"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to Discord server","label":"text:discord"}'
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									Discord
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://github.com/klave-network"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									GitHub
								</a>
							</li>
							<li className="lh-condensed mb-3">
								<a
									href="https://www.producthunt.com/products/klave"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to Product Hunt page","label":"text:producthunt"}'
									className="transition-colors duration-200 ease-in hover:text-klave-light-blue"
								>
									ProductHunt
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-slate-800 text-sm">
					<div className="flex py-4 justify-between flex-row-reverse items-center">
						<ul className="list-none flex items-center">
							<li className="mr-3">
								<a
									href="https://klave.com/terms-and-conditions"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to terms and conditions","label":"text:terms"}'
								>
									Terms & Conditions
								</a>
							</li>
							<li className="mr-3">
								<a
									href="https://klave.com/privacy-policy"
									target="_blank"
									rel="noopener noreferrer"
									data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
								>
									Privacy Policy
								</a>
							</li>
						</ul>

						<ul className="list-none flex flex-wrap text-light-body">
							<li className="mr-3">
								<span title="Registered 10406018 in England and Wales. 8-9 Well Court, London, United Kingdom, EC4M 9DN">
									&copy; {new Date().getFullYear()} Secretarium Ltd.
								</span>
							</li>
							<li className="mr-3">All rights reserved.</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
