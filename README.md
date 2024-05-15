# mm-product-card

Este es un paquete de pruebas de despliegue en NPM

## Marco Mora

## Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
    } from 'mm-product-card'
```

```
            <ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, increaseBy, isMaxCountReached, count }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />

                        </>
                    )
                }
            </ProductCard>
```