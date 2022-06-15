/* 
test with no/bad item data
test with no/bad discount status value

test A price

test B price with discount
test number of C items with discount

test B price without discount
test number of C items without discount

test with letter other than A,B,C
*/

import { assertEquals, fail, assertThrows } from 'https://deno.land/std@0.79.0/testing/asserts.ts';
import { checkout } from './index.js'

//Handle bad array values
Deno.test('No Items', () => {
    const items = undefined
    const status = true
    assertEquals(checkout(items, status), 'No items array provided', 'Failed to handle bad array values')
})

//Handle bad discount status value
Deno.test('No Discount Status', () => {
    const items = ['B', 'B', 'B']
    const status = undefined
    assertEquals(checkout(items, status), 'No discount status provided', 'Failed to handle bad discount value')
})

/*Test with no discount*/

//No discount A test
Deno.test('No discount A test', () => {
    const items = ['A', 'A']
    const status = false
    const result = checkout(items, status)
    assertEquals(result.Price, "1.00", 'Incorrect item A price')
})

//No discount B test
Deno.test('No discount B test', () => {
    const items = ['B', 'B']
    const status = false
    const result = checkout(items, status)
    assertEquals(result.Price, "1.50", 'Incorrect item B price')
})

//No discount C test
Deno.test('No deal C test', () => {
    const items = ['C', 'C', 'C']
    const status = false
    const result = checkout(items, status)
    assertEquals(result.Basket.C, 3, 'Incorrect number of C items')
})


/* TEST DISCOUNTS */

//Item B discount test
Deno.test('Item B discount test', () => {
    const items = ['B', 'B', 'B']
    const status = true
    const result = checkout(items, status)
    assertEquals(result.Price, "2.00", 'Incorrect discount price')
})


//Item C deal test
Deno.test('Item C deal test', () => {
    const items = ['C', 'C', 'C']
    const status = true
    const result = checkout(items, status)
    assertEquals(result.Basket.C, 4, 'Incorrect number of items')
})



/* Test with item names other thatn A, B or C */
Deno.test('Handle items not in catalogue', () => {
    const items = ['K', 3333, 'A']
    const status = true
    const result = checkout(items, status)
    assertEquals(result, 'Invalid item provided', 'Failed to handle items out side of catalogue')
})
