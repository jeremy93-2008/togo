import { cssifyObject } from 'css-in-js-utils';
import { StyleObject } from 'css-in-js-utils/es/cssifyObject';
import type * as CSS from 'csstype';

export type CSSPseudos = { [K in CSS.Pseudos]?: StyleObject };

export interface IStyle extends CSS.Properties, CSS.PropertiesHyphen, CSSPseudos {
    [key: string]:
    | StyleObject
    | string
    | number
    | undefined;
}

export function togo(classNames: string[], styles: IStyle) {
    return cssifyObject(styles as StyleObject);
}