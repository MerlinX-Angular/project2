import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IProduct } from './product.model';

export class ProductData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        const products: IProduct[] = [
            {
                'id': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': '2016.05.04',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
                'category': 'Garden'

            },
            {
                'id': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': '2016.04.09',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
                'category': 'Garden'
            },
            {
                'id': 3,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'releaseDate': '2016.04.09',
                'description': 'Curved claw steel hammer',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
                'category': 'Toolbox'

            },
            {
                'id': 4,
                'productName': 'Saw',
                'productCode': 'TBX-0022',
                'releaseDate': '2016.04.09',
                'description': '15-inch steel blade hand saw',
                'price': 11.55,
                'starRating': 3.7,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
                'category': 'Toolbox',
            },
            {
                'id': 5,
                'productName': 'Video Game Controller',
                'productCode': 'GMG-0042',
                'releaseDate': '2016.05.04',
                'description': 'Standard two-button video game controller',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
                'category': 'Gaming',
            }
        ];
        return { products };
    }
}
