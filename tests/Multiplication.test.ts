import {Dollar} from '../Dollar'

test("multiplication",()=>{
    const five : Dollar = new Dollar(5);
    let product : Dollar;
    product = five.times(2)
    expect(product.amount).toEqual(10);
    product = five.times(3);
    expect(product.amount).toEqual(15);
    product = five.times(5);
    expect(product.amount).toEqual(25);
})

export{}