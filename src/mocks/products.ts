export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	category: string;
}

export const categories = [
	{ slug: 'abrigos', name: 'Abrigos', category: 'abrigo' },
	{ slug: 'pantalones', name: 'Pantalones', category: 'pantalon' },
	{ slug: 'remeras', name: 'Remeras', category: 'remera' },
	{ slug: 'accesorios', name: 'Accesorios', category: 'accesorio' },
];

export const products: Product[] = [
	{
		id: 1,
		name: 'Buzo oversize negro con capucha',
		price: 54900,
		description:
			'Buzo negro de corte amplio, con capucha, bolsillo canguro y logo en el pecho.',
		image: '/images/products/1.png',
		category: 'abrigo'
	},
	{
		id: 2,
		name: 'Remera oversize blanca',
		price: 24900,
		description:
			'Remera blanca de manga corta, cuello redondo y calce amplio con logo en el pecho.',
		image: '/images/products/2.png',
		category: 'remera'
	},
	{
		id: 3,
		name: 'Campera verde con capucha',
		price: 89900,
		description:
			'Campera verde oscuro con cuello alto, capucha y bolsillos frontales con cierre.',
		image: '/images/products/3.png',
		category: 'abrigo'
	},
	{
		id: 4,
		name: 'Top cropped ciruela de manga larga',
		price: 29900,
		description:
			'Top color ciruela de corte ajustado, manga larga y cuello alto, con largo cropped.',
		image: '/images/products/4.png',
		category: 'remera'
	},
	{
		id: 5,
		name: 'Pantalon cargo negro',
		price: 62900,
		description:
			'Pantalon negro de pierna amplia con bolsillos cargo, tiras laterales y cintura con cordon.',
		image: '/images/products/5.png',
		category: 'pantalon'
	},
	{
		id: 6,
		name: 'Sweater chocolate de cuello alto',
		price: 59900,
		description:
			'Sweater de punto color chocolate con cuello alto, mangas amplias y terminaciones acanaladas.',
		image: '/images/products/6.png',
		category: 'abrigo'
	},
	{
		id: 7,
		name: 'Tapado largo negro',
		price: 119900,
		description:
			'Tapado negro de corte amplio con solapas, botones frontales y bolsillos laterales.',
		image: '/images/products/7.png',
		category: 'abrigo'
	},
	{
		id: 8,
		name: 'Top negro con recorte asimetrico',
		price: 32900,
		description:
			'Top negro de calce ajustado con cuello alto y recortes que dejan un hombro al descubierto.',
		image: '/images/products/8.png',
		category: 'remera'
	},
	{
		id: 9,
		name: 'Pantalon cargo verde oliva',
		price: 62900,
		description:
			'Pantalon verde oliva de pierna amplia con bolsillos cargo y tiras laterales.',
		image: '/images/products/9.png',
		category: 'pantalon'	
	},
	{
		id: 10,
		name: 'Campera oversize ciruela con cierre',
		price: 57900,
		description:
			'Campera color ciruela de calce amplio con cierre frontal y bolsillos delanteros.',
		image: '/images/products/10.png',
		category: 'abrigo'
	},
	{
		id: 11,
		name: 'Camisa oversize negra',
		price: 44900,
		description:
			'Camisa negra de manga larga y corte amplio con botones frontales y bolsillo en el pecho.',
		image: '/images/products/11.png',
		category: 'remera'
	},
	{
		id: 12,
		name: 'Musculosa cropped blanca',
		price: 19900,
		description:
			'Musculosa blanca de textura acanalada con cuello redondo, corte cropped y logo en el pecho.',
		image: '/images/products/12.png',
		category: 'remera'
	},
	{
		id: 13,
		name: 'Pantalon cargo marron',
		price: 62900,
		description:
			'Pantalon marron de corte holgado y pierna amplia con bolsillos cargo laterales.',
		image: '/images/products/13.png',
		category: 'pantalon'
	},
	{
		id: 14,
		name: 'Jogger gris de pierna amplia',
		price: 42900,
		description:
			'Jogger gris melange de corte relajado con cintura elastica, bolsillos y logo en la pierna.',
		image: '/images/products/14.png',
		category: 'pantalon'
	},
	{
		id: 15,
		name: 'Gorra negra con logo',
		price: 18900,
		description:
			'Gorra negra de seis paneles con visera curva y logo blanco en el frente.',
		image: '/images/products/15.png',
		category: 'accesorio'
	},
];
