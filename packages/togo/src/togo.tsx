import { cssifyObject } from 'css-in-js-utils';
import { StyleObject } from 'css-in-js-utils/es/cssifyObject';
import type * as CSS from 'csstype';

import { nanoid } from 'nanoid'

export type CSSPseudos = { [K in CSS.Pseudos]?: StyleObject };

export interface IStyle extends CSS.Properties, CSS.PropertiesHyphen, CSSPseudos {
    [key: string]:
    | StyleObject
    | string
    | number
    | undefined;
}

export function togo(classNames: string[], styles: IStyle) {
    const className = 'togo-' + nanoid(5)
    const style = generateStyles(className, styles)

    const styleElement = document.createElement('style')
    styleElement.innerHTML = style
    document.head.appendChild(styleElement)


    return classNames.join(' ') + ' ' + className
}

export function generateStyles(className: string, styles: IStyle) {
    let styleString = `.${className} {${cssifyObject(styles as StyleObject)}}`

    const keys = Object.keys(styles)

    const object = keys.filter(key => typeof styles[key] === 'object').map(key => [key, styles[key]])

    object.forEach(([key, value]) => {
        if ((key as string).indexOf('&') !== -1) {
            return styleString += " " + generateStyles(`${(key as string).replace('&', className)}`, value as IStyle)
        }
        styleString += " " + generateStyles(`${className} ${(key as string).replace('&', className)}`, value as IStyle)
    })

    return styleString
}