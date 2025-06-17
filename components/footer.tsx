export const Footer = () => {
	return (
		<footer className="w-full text-left text-sm">
			<p className="text-slate-500 dark:text-slate-300 text-xs opacity-20">
				<a className="text-klave-dark-blue dark:text-klave-light-blue hover:underline pr-0" href="https://secretarium.com/">Secretarium</a> © {new Date().getFullYear()} All rights reserved,&nbsp;
				<i title={process.env.NEXT_REPO_BRANCH}>v{process.env.NEXT_REPO_VERSION} ({process.env.NEXT_REPO_COMMIT?.substring(0, 8)}{process.env.NEXT_REPO_DIRTY ? <i title='Dirty'>*</i> : ''})</i>
			</p>
		</footer>
	);
};
