import { css } from '@emotion/react';

export const globalNProgressStyles = css`
	#nprogress .bar {
		background: #1ca8e1;
	}

	#nprogress .peg {
		box-shadow: 0 0 10px #1ca8e1, 0 0 5px #1ca8e1;
	}

	#nprogress .spinner {
		top: 3rem;
	}

	#nprogress .spinner-icon {
		border-top-color: #1ca8e1;
		border-left-color: #1ca8e1;
	}

	@media (max-width: 30rem) {
		#nprogress .spinner {
			visibility: hidden;
		}
	}
`;
