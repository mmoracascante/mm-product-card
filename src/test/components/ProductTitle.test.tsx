import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from "../../components";
import { product1 } from "../data/products";




describe('Testeando componente <ProductTitle />', () => {

    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Debe de mostrar con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (<ProductTitle />)
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


})
