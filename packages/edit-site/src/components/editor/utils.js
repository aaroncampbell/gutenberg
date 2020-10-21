/**
 * External dependencies
 */
import { find } from 'lodash';

/* Supporting data */
export const GLOBAL_CONTEXT = 'global';
export const PRESET_CATEGORIES = {
	color: { path: [ 'color', 'palette' ], key: 'color' },
	gradient: { path: [ 'color', 'gradients' ], key: 'gradient' },
	fontSize: { path: [ 'typography', 'fontSizes' ], key: 'size' },
};
export const LINK_COLOR = '--wp--style--color--link';
export const LINK_COLOR_DECLARATION = `a { color: var(${ LINK_COLOR }, #00e); }`;

/* Helpers for unit processing */
export const fromPx = ( value ) => {
	switch ( typeof value ) {
		case 'string':
			return +value.replace( 'px', '' );
		case 'number':
		default:
			return value;
	}
};

export const toPx = ( value ) => ( value ? value + 'px' : value );

export function getPresetVariable( presetCategory, presets, value ) {
	if ( ! value ) {
		return;
	}
	const presetData = PRESET_CATEGORIES[ presetCategory ];
	const { key } = presetData;
	const presetObject = find( presets, ( preset ) => {
		return preset[ key ] === value;
	} );
	return (
		presetObject && `var:preset|${ presetCategory }|${ presetObject.slug }`
	);
}

export function getPresetValueFromVariable(
	presetCategory,
	presets,
	variable
) {
	if ( ! variable ) {
		return;
	}
	const slug = variable.slice( variable.lastIndexOf( '|' ) + 1 );
	const presetObject = find( presets, ( preset ) => {
		return preset.slug === slug;
	} );
	if ( presetObject ) {
		const presetData = PRESET_CATEGORIES[ presetCategory ];
		const { key } = presetData;
		return presetObject[ key ];
	}
}
