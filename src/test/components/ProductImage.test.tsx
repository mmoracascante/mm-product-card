import React from "react"; import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../components'
import { product2 } from '../data/products'



describe('Testeando componente <ProductImage />', () => {

    test('Debe mostrar la imagen', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>

                {
                    () => (<ProductImage />)
                }
            </ProductCard>



        )
        expect(wrapper.toJSON()).toMatchSnapshot()


    })

    test('No debe mostrar la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />



        )
        expect(wrapper.toJSON()).toMatchSnapshot()


    })
})