import { css, } from "styled-components";
import { objectMap, } from "./utility";

const defaultSm = 768;
const defaultMd = 992;
const defaultLg = 1200;

export const defaultBreakpoints = {
	xs: { min: 0, max: defaultSm - 1, },
	sm: { min: defaultSm, max: defaultMd - 1, },
	md: { min: defaultMd, max: defaultLg - 1, },
	lg: { min: defaultLg, max: 100000, },
};
export const defaultBps = defaultBreakpoints;

export const bp = objectMap(defaultBps, (key, val) => ({
	min: (...cont) =>
		css`
			@media (min-width: ${ val.min }px) {
				${ css(...cont) };
			}
		`,
	max: (...cont) =>
		css`
			@media (max-width: ${ val.max }px) {
				${ css(...cont) };
			}
		`,
	only: (...cont) => css`
		@media (min-width: ${ val.min }px) and (max-width: ${ val.max }px) {
			${ css(...cont) };
		}
	`,
}));

export const xs = bp.xs.only;
export const sm = bp.sm.only;
export const md = bp.md.only;
export const lg = bp.lg.only;

export const bpEach = (prop, vals) => css`
	${ Object.keys(vals).map(key => bp[key].only`${ prop }: ${ vals[key] };`) };
`;

export const bpEither = (prop, vals) => css`
	${ xs`${ prop }: ${ vals.xs };` } ${ bp.sm.min`${ prop }: ${ vals.other };` };
`;
