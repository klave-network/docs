export const Footer = () => {
	return (
		<footer className="bg-blue-200 dark:bg-blue-900 text-center text-sm h-56">
			<p className="text-slate-500 dark:text-slate-300 text-xs">
				© {new Date().getFullYear()} Copyright
			</p>
		</footer>
	);
};
