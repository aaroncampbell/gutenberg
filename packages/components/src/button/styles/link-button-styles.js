/**
 * External dependencies
 */
import { css } from '@emotion/core';

/**
 * Internal dependencies
 */
import { buttonBase } from './base-styles';
import { reduceMotion, config, color, darken } from '../../utils';

export const styles = css`
	${ buttonBase }
	margin: 0;
	padding: 0;
	box-shadow: none;
	border: 0;
	border-radius: 0;
	background: none;
	outline: none;
	text-align: left;
	/* Mimics the default link style in common.css */
	color: #0073aa;
	text-decoration: underline;
	transition-property: border, background, color;
	transition-duration: 0.05s;
	transition-timing-function: ease-in-out;
	${ reduceMotion( 'transition' ) }
	height: auto;

	&:hover:not( :disabled ),
	&:active:not( :disabled ) {
		color: #00a0d2;
		box-shadow: none;
	}

	&:focus {
		color: #124964;
		box-shadow: 0 0 0 ${ config( 'borderWidth' ) } #5b9dd9,
			0 0 ${ config( 'borderWidthFocus' ) } ${ config( 'borderWidth' ) }
				rgba( 30, 140, 190, 0.8 );
	}
`;

export const destructive = css`
	color: ${ color( 'alert.red' ) };

	&:active:not( :disabled ),
	&:hover:not( :disabled ) {
		color: ${ darken( color( 'alert.red' ), 20 ) };
		background: none;
	}

	&:focus:not( :disabled ) {
		color: var( --wp-admin-theme-color );
	}
`;
