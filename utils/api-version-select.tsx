'use client';

import versions from '~/public/constants/versions.json';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Label } from '~/components/ui/label';
import { usePathname, useRouter } from 'next/navigation';

const { VERSIONS, LATEST_VERSION, BETA_VERSION } = versions;

export function ApiVersionSelect() {
	const router = useRouter();
	const pathname = usePathname();
	const version = getVersionFromPath(pathname);

	if (!version) return null;

	const handleVersionChange = (newVersion: string) => {
		const pathSegments = pathname.split('/');

		// Replace the current version with the new version
		// assuming version is the next segment after 'sdk'
		const versionIndex = pathSegments.indexOf('sdk') + 1;
		// Replace the current version in the path
		// if the new version is the latest, we replace with 'latest'
		pathSegments[versionIndex] = newVersion === LATEST_VERSION ? 'latest' : newVersion;

		// Join the path segments back into a valid URL
		const newPath = pathSegments.join('/');

		// Navigate to the updated version's path
		router.push(newPath);
	};

	// Add -mx-4 md:-mx-3 px-4 md:px-3 to styles if topbar from <HomeLayout/> is present
	return (
		<div className="bg-transparent py-3 border-y transition-colors border-border mb-2 flex flex-col gap-2 ">
		    <Label className="text-xs">Version</Label>
			<Select defaultValue={version === 'latest' ? LATEST_VERSION : version} onValueChange={handleVersionChange}>
				<SelectTrigger className="">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{VERSIONS.map((version) => (
						<SelectItem value={version} key={version}>
							{versionToText(version)}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{/* Changing versions is a JS only mechanism. To help crawlers find other versions, we add hidden links. */}
			{VERSIONS.map((version) => (
				<a className="hidden" key={version} href={`/sdk/versions/${version}`} />
			))}
		</div>
	);
}

export function versionToText(version: string): string {
	if (version === 'unversioned') {
		return 'Next (unversioned)';
	} else if (version === LATEST_VERSION) {
		return `${formatSdkVersion(LATEST_VERSION)} (latest)`;
	} else if (BETA_VERSION && version === BETA_VERSION.toString()) {
		return `${formatSdkVersion(BETA_VERSION.toString())} (beta)`;
	}

	return formatSdkVersion(version);
}

function formatSdkVersion(version: string): string {
	return `SDK ${version.substring(1, 2)}`;
}

function isVersionedPath(path: string): boolean {
	return path.startsWith('/sdk');
}

function getVersionFromPath(path: string): string | null {
	return isVersionedPath(path) ? path.split('/', 3).pop()! : null;
}
