import { describe, it, expect } from 'vitest'
import { togo } from '../togo'

describe('simple', () => {
    it('should be true', () => {
        const togo2 = togo(['base'], {
            fontSize: '12px',
            color: 'red',
            backgroundColor: 'blue',
            '&:hover': {
                color: 'green',
            },
            variants: {
                primary: {
                    color: 'red',
                },
                secondary: {
                    color: 'blue',
                },
            },
        })
        console.log(togo2)
        expect(true).toBe(true)
    })
})
