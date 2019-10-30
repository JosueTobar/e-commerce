import {createStore} from "redux"
const initialState = {
    products:[
        {
            "idProducts": 1,
            "productCode": "SN32124554564",
            "sku": "NS",
            "nameProducts": "Nintendo Switch",
            "description": "Game developer company, in good working order, ready if you want to play rigth away, do not think buying another video game console, buy a Nintendo Switch it will give hours of fun without limit!",
            "colour": null,
            "updateDate": 1572847200000,
            "price": 455.0,
            "quantity": 2,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": -2180109600000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 1,
                    "idPro": 1,
                    "idCat": 1,
                    "category": {
                        "idCategory": 1,
                        "nameCategory": "Video Games",
                        "description": "A wide range of video games",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 9,
                    "imageCode": 3,
                    "imageName": "images (2).jpg",
                    "idCombo": null,
                    "idProduct": 1,
                    "url": "http://192.168.100.33:8090/ecommerce/images/images (2).jpg"
                },
                {
                    "idImageProduct": 5,
                    "imageCode": 3,
                    "imageName": "14106587955230.jpg",
                    "idCombo": null,
                    "idProduct": 1,
                    "url": "http://192.168.100.33:8090/ecommerce/images/14106587955230.jpg"
                },
                {
                    "idImageProduct": 10,
                    "imageCode": 3,
                    "imageName": "images (3).jpg",
                    "idCombo": null,
                    "idProduct": 1,
                    "url": "http://192.168.100.33:8090/ecommerce/images/images (3).jpg"
                }
            ]
        },
        {
            "idProducts": 2,
            "productCode": "PS4xxx-xxxx-xxx",
            "sku": "PS",
            "nameProducts": "Playstation 4 Pro ",
            "description": "Tipo de producto: consola PS4 Pro Capacidad: 1TB Tiene GPU con el doble de potencia que la PS4 estándar Juegos en 4 K dinámico Incluye tarjeta prepago de PlayStation para recargar tu monedero virtual con 20 € Este producto está disponible exclusivamente en Amazon Podrás utilizar los 20 euros de tu monedero virtual también con el juego Fortnite",
            "colour": null,
            "updateDate": 1573020000000,
            "price": 499.99,
            "quantity": 5,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572415200000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 2,
                    "idPro": 2,
                    "idCat": 1,
                    "category": {
                        "idCategory": 1,
                        "nameCategory": "Video Games",
                        "description": "A wide range of video games",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 3,
                    "imageCode": 3,
                    "imageName": "ps4Pro.jpg",
                    "idCombo": null,
                    "idProduct": 2,
                    "url": "http://192.168.100.33:8090/ecommerce/images/ps4Pro.jpg"
                },
                {
                    "idImageProduct": 2,
                    "imageCode": 3,
                    "imageName": "psn4.jpg",
                    "idCombo": null,
                    "idProduct": 2,
                    "url": "http://192.168.100.33:8090/ecommerce/images/psn4.jpg"
                }
            ]
        },
        {
            "idProducts": 3,
            "productCode": "GG",
            "sku": "G",
            "nameProducts": "Case Gaming",
            "description": "Este elegante estuche ofrece la manera perfecta de agregar protección y crear un estilo individual para su dispositivo móvil. - Fácil instalación rápida. - Gran posibilidad de enfriamiento, buen diseño interno y sin bordes nerviosos. - Frente muy robusto y atractivo, buen trabajo de pintura y calidad de construcción.",
            "colour": null,
            "updateDate": 1572847200000,
            "price": 90.99,
            "quantity": 15,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572501600000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 25,
                    "idPro": 3,
                    "idCat": null,
                    "category": null
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 50,
                    "imageCode": 3,
                    "imageName": "4031-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 3,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4031-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 51,
                    "imageCode": 3,
                    "imageName": "4032-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 3,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4032-thickbox_default.jpg"
                }
            ]
        },
        {
            "idProducts": 7,
            "productCode": "T",
            "sku": "TGS",
            "nameProducts": "Teclado SportsBot",
            "description": "Diseño ergonómico, la estabilidad, la durabilidad a largo plazo: Teclado y mouse ambos son diseño ergonómico para un uso cómodo acolchado de teclado y mouse ambos para añadir estabilidad especiales. de alta calidad ABS construcción para mejorar la durabilidad Todo en uno: ss301 Gaming Combo incluye piel LED de alta calidad, diseño de auricular w/sonido Surround de unos graves ricos, Sharp diseño gaming teclado, y diseño ergonómico mouse para proporcionar todas las necesidades de usted y la mejor experiencia de juego",
            "colour": null,
            "updateDate": 1573020000000,
            "price": 80.8,
            "quantity": 12,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572501600000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 6,
                    "idPro": 7,
                    "idCat": 1,
                    "category": {
                        "idCategory": 1,
                        "nameCategory": "Video Games",
                        "description": "A wide range of video games",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 26,
                    "imageCode": null,
                    "imageName": "8710-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 7,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8710-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 25,
                    "imageCode": null,
                    "imageName": "8709-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 7,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8709-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 23,
                    "imageCode": null,
                    "imageName": "8707-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 7,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8707-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 24,
                    "imageCode": null,
                    "imageName": "8708-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 7,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8708-thickbox_default.jpg"
                }
            ]
        },
        {
            "idProducts": 8,
            "productCode": "NZXT",
            "sku": "TG",
            "nameProducts": "NZXT - Funda para PC",
            "description": "Alto rendimiento 0,6 mm Secc Mid Tower funda diseñada para los jugadores de bricolaje y resistente Incluyen 2 x USB3.0 Puertos de audio y MIC Excelente diseño de flujo de aire con ventilación de aire superior diseño y puede instalar hasta 8 ventiladores Incluye 1 x 120 mm ventilador LED rojo y 1 x ventiladores",
            "colour": null,
            "updateDate": 1572933600000,
            "price": 666.0,
            "quantity": 12,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572501600000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 7,
                    "idPro": 8,
                    "idCat": 1,
                    "category": {
                        "idCategory": 1,
                        "nameCategory": "Video Games",
                        "description": "A wide range of video games",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 30,
                    "imageCode": null,
                    "imageName": "7713-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 8,
                    "url": "http://192.168.100.33:8090/ecommerce/images/7713-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 28,
                    "imageCode": null,
                    "imageName": "7710-large_default.jpg",
                    "idCombo": null,
                    "idProduct": 8,
                    "url": "http://192.168.100.33:8090/ecommerce/images/7710-large_default.jpg"
                },
                {
                    "idImageProduct": 29,
                    "imageCode": null,
                    "imageName": "7712-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 8,
                    "url": "http://192.168.100.33:8090/ecommerce/images/7712-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 27,
                    "imageCode": null,
                    "imageName": "7708-large_default.jpg",
                    "idCombo": null,
                    "idProduct": 8,
                    "url": "http://192.168.100.33:8090/ecommerce/images/7708-large_default.jpg"
                }
            ]
        },
        {
            "idProducts": 9,
            "productCode": "T",
            "sku": "TG",
            "nameProducts": "Case MUSETEX",
            "description": "Esta excelente caja para ordenador de videojuegos de torre media atx soporta placas base hasta E-ATX, ATX, Micro-ATX, mini-ITX; se monta hasta 3 discos duros y 3 unidades de disco duro. 4 ventiladores LED MVP 120 RGB preinstalados en esta caja de ordenador de juegos: 3 x delantero, 1 x trasero; hasta 14.173 in de largo de ",
            "colour": "RED",
            "updateDate": null,
            "price": 99.99,
            "quantity": 12,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 1.0E8,
            "productDeliveryDate": 1572501600000,
            "width": 200.0,
            "height": 200.0,
            "depth": 900.0,
            "weight": 500.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 8,
                    "idPro": 9,
                    "idCat": 1,
                    "category": {
                        "idCategory": 1,
                        "nameCategory": "Video Games",
                        "description": "A wide range of video games",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 34,
                    "imageCode": null,
                    "imageName": "8485-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 9,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8485-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 33,
                    "imageCode": null,
                    "imageName": "8484-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 9,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8484-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 32,
                    "imageCode": null,
                    "imageName": "8483-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 9,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8483-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 31,
                    "imageCode": null,
                    "imageName": "8482-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 9,
                    "url": "http://192.168.100.33:8090/ecommerce/images/8482-thickbox_default.jpg"
                }
            ]
        },
        {
            "idProducts": 10,
            "productCode": "T",
            "sku": "TGS",
            "nameProducts": "Case X08",
            "description": "Una compacta caja para ordenador ATX soporta placas base hasta E-ATX  Tamaño completo de 0.157 in de grosor, panel lateral de cristal templado y el panel frontal dan a la funda un aspecto único y muestran perfectamente su estructura interior. La tira de iluminación RGB en la parte delantera, se controla fácilmente con un botón manual Soporta la instalación de 120/240/14.173 in sistema de",
            "colour": null,
            "updateDate": 1573020000000,
            "price": 99.99,
            "quantity": 13,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572501600000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 24,
                    "idPro": 10,
                    "idCat": 7,
                    "category": {
                        "idCategory": 7,
                        "nameCategory": "Football",
                        "description": "Sport clothes, shoes, football equipment",
                        "idCategoryPadre": 4
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 35,
                    "imageCode": null,
                    "imageName": "4031-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 10,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4031-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 37,
                    "imageCode": null,
                    "imageName": "4033-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 10,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4033-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 36,
                    "imageCode": null,
                    "imageName": "4032-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 10,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4032-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 38,
                    "imageCode": null,
                    "imageName": "4034-large_default.jpg",
                    "idCombo": null,
                    "idProduct": 10,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4034-large_default.jpg"
                },
                {
                    "idImageProduct": 39,
                    "imageCode": null,
                    "imageName": "4035-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 10,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4035-thickbox_default.jpg"
                }
            ]
        },
        {
            "idProducts": 11,
            "productCode": "T",
            "sku": "TG",
            "nameProducts": "Dell E2417H",
            "description": "Monitor plano de 24 pulgadas full HD para gaming, multimedia y diseño  Tamaño: 24  Tipo de panel: IPS   Resolución: 1920x1080@60Hz  Tiempo de respuesta: 8 ms  Entradas: Display Port, VGA  Altavoces: Si  Cables incluídos: Cable de poder , cable Display Port Características: Dell Display Manager CompatibilityESPECIFICACIONES DETALLADAS",
            "colour": "RED",
            "updateDate": null,
            "price": 55.99,
            "quantity": 12,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 1.0E8,
            "productDeliveryDate": 1572501600000,
            "width": 200.0,
            "height": 200.0,
            "depth": 900.0,
            "weight": 500.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 10,
                    "idPro": 11,
                    "idCat": 6,
                    "category": {
                        "idCategory": 6,
                        "nameCategory": "Laptops",
                        "description": "Laptops, Portable equipments",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": [
                {
                    "idImageProduct": 43,
                    "imageCode": null,
                    "imageName": "4971-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 11,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4971-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 42,
                    "imageCode": null,
                    "imageName": "4970-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 11,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4970-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 41,
                    "imageCode": null,
                    "imageName": "4969-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 11,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4969-thickbox_default.jpg"
                },
                {
                    "idImageProduct": 40,
                    "imageCode": null,
                    "imageName": "4968-thickbox_default.jpg",
                    "idCombo": null,
                    "idProduct": 11,
                    "url": "http://192.168.100.33:8090/ecommerce/images/4968-thickbox_default.jpg"
                }
            ]
        },
        {
            "idProducts": 19,
            "productCode": "Xiaorm-123",
            "sku": "qweqweqwerty",
            "nameProducts": "Xiaomi Redmi 2",
            "description": "nice smarthphone",
            "colour": null,
            "updateDate": null,
            "price": 150.0,
            "quantity": 2,
            "taxes": 0.0,
            "additionalShippingCost": 0.0,
            "wholeSalePrice": 0.0,
            "productDeliveryDate": 1572847200000,
            "width": 0.0,
            "height": 0.0,
            "depth": 0.0,
            "weight": 0.0,
            "idOrders": null,
            "subTotal": 0.0,
            "quantityCart": 1,
            "listCat": null,
            "productsCategorySet": [
                {
                    "idProductsCategory": 18,
                    "idPro": 19,
                    "idCat": 3,
                    "category": {
                        "idCategory": 3,
                        "nameCategory": "Technology",
                        "description": "Computers, Pc components, gadgets, cellphones, among others",
                        "idCategoryPadre": null
                    }
                }
            ],
            "proImageSet": []
        }
    ],
    product: {},
    cart: [],
    baseUri:"http://192.168.100.33:8090/"
}
const reducerCart = (state = initialState,action)=>{
    console.log(action)
    switch(action.type) {
        case "ADD_PRODUCT_LIST":
            return{
                ...state,
                products: action.productList
            }
        case "ADD_TO_CART":
            return{
             ...state,
                 cart: state.cart.concat(action.product)
            }
        case "DELETE_PRODUCT_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(p => p.idProducts !== action.product.idProducts)
            }
         case "UPDATE_PRODUCT_FROM_CART":
             return{
                 ...state,
                 cart: state.cart.map((p) => p.idProducts === action.product.idProducts?action.product:p)
             }   
 
        default:
          // code block
      }
return state
}
export default createStore(reducerCart)