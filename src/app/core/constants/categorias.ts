import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Gaseosas',
    id: 1,
    productos: [
    {
      nombre:"Coca Cola",
      precio: 1200,
      descripcion: "750 ml",
      imagen: "https://storage.googleapis.com/phygital_files/boutique-gelada/uploads/produto/ref_coca_cola_2l_pet_f5eabaae-bd08-47ba-867e-7e5633bc6852.png"
    },
    {
      nombre:"Sprite",
      precio: 1500,
      descripcion: "750 ml",
      imagen: "https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-25-at-11-08-571-f2321c146eb51f1dac16299005725116-1024-1024.jpeg"
    },
    {
      nombre:"Speed XL",
      precio: 1300,
      descripcion: "750 ml",
      imagen: "https://acdn.mitiendanube.com/stores/001/664/228/products/sped1-965700bbaf6c88498716244644815764-640-0.jpg"
    },
    {
      nombre:"Agua tónica",
      precio: 1250,
      descripcion: "750 ml",
      imagen: "https://distribuidorabelgrano.com/wp-content/uploads/2020/10/schweppes-15L-tonica-almacen-gaseosas-casa-segal-mendoza-600x600-e1603133861180.jpg"
    },
    {
      nombre:"H2O limoneto",
      precio: 1500,
      descripcion: "750 ml",
      imagen: "https://i0.wp.com/rockypizzas.com/wp-content/uploads/2022/05/H2O-Limoneto.png?fit=699%2C699&ssl=1"
    },
  ]
},
{
    nombre: 'Bebidas alcoholicas',
    id: 2,
    productos: [
      {
        nombre: 'Gin Tonic Beefeater',
        precio: 3000,
        descripcion: "750 ml",
        imagen: "https://applejack.com/site/images/Beefeater-Gin-175-l_1.png"
      },
      {
        nombre: 'Vodka Sernova',
        precio: 2200,
        descripcion: "750 ml",
        imagen: "https://vinotecaligier.com/media/catalog/product/cache/73269a27812eefec516431430aa0b457/b/e/be74628_mxtdpdugue9ebkiv.jpg"
      },
      {
        nombre: 'Vino Las Perdices',
        precio: 5300,
        descripcion: "750 ml",
        imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/perdices.jpg"
      },
      {
        nombre: 'Champagne Rose Chandon',
        precio: 8300,
        descripcion: "750 ml",
        imagen: "https://arcordiezb2c.vteximg.com.br/arquivos/ids/178298/Champagne-Rose-Chandon-375-Cc-1-15447.jpg?v=638176125677430000"
      },
    ]
},
{
    nombre: 'Hielo',
    id: 3,
    productos: [
      {
        nombre: 'Bolsa de hielo',
        precio: 200,
        descripcion: "2 kg",
        imagen: 'https://blessings.com.ar/wp-content/uploads/2022/05/bolsa-hielo-660x800.jpg'
      },
      {
        nombre: 'Bolsa de hielo',
        precio: 500,
        descripcion: "4 kg",
        imagen: 'https://blessings.com.ar/wp-content/uploads/2022/05/bolsa-hielo-660x800.jpg'
      },
    ]
}
]
