/* 
test with no items

test A price
test B price with discount
test B price without discount
test number of C items with discount
test number of C items without discount

test with garbage data
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

//Item A price test
Deno.test('Item A price test', () => {
    const items = ['A', 'A']
    const status = false
    const result = checkout(items, status)
    assertEquals(result.Price, "1.00", 'Incorrect item A price')
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
