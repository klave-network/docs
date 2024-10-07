'use client';

import versions from '~/public/constants/versions.json';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Label } from '~/components/ui/label';

const { VERSIONS, LATEST_VERSION, BETA_VERSION } = versions;

export function ApiVersionSelect() {
	return (
		<div className="bg-fd-card py-3 border-y transition-colors border-fd-foreground/10 bg-fd-background/60 mb-2 -mx-4 md:-mx-3 px-4 md:px-3 flex flex-col gap-2">
			<Label className="text-xs">Version</Label>
			<Select defaultValue={LATEST_VERSION}>
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
