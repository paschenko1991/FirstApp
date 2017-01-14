const data = [
	{
		"id": 1,
		"name": "Кроссовки Reebok EVERCHILL TRAIN",
		"desc": "Кроссовки Reebok EVERCHILL TRAIN для фитнеса. Модель выполнена в синем цвете из комбинации текстиля и полимерного материала. Детали: сетчатый верх - для вентиляции; низкий дизайн - для полной свободы движений; промежуточная подошва из пеноматериала EVERCOOL 48 - для отличной амортизации и прочности; специальные изогнутые канавки - для сцепления и специальная точка вращения - для поддержки во время выполнения самых интенсивных движений; дополнительная поддержка пятки; перфорированная стелька EVERCOOL; внутренняя шнуровка для оптимальной посадки.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 4699,
		"image": "src/App/images/1.jpg"
	},
	{
		"id": 2,
		"name": "Кеды Jack & Jones",
		"desc": "Кеды Jack & Jones выполнены полностью из текстиля. Детали: шнуровка, контрастная резиновая подошва.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 2030,
		"image": "src/App/images/2.jpg"
	},
	{
		"id": 3,
		"name": "Кроссовки NIKE AIR PEGASUS 83 LTR Nike",
		"desc": "Кроссовки NIKE AIR PEGASUS 83 созданы на основе легендарной беговой модели и адаптированы для повседневной жизни. Модель выполнена из натурального велюра и кожи; подкладка и стелька из текстиля; резиновая подошва. Детали: шнуровка на подъеме; сетчатый язычок для дополнительной вентиляции воздуха; отстрочка деталей; задник с усилителем; подошва с амортизирующим эффектом и крупным протектором.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 5490,
		"image": "src/App/images/3.jpg"
	},
	{
		"id": 4,
		"name": "Кроссовки NIKE TANJUN Nike",
		"desc": "Кроссовки Nike TANJUN выполнены из воздухопроницаемого текстиля. Детали: удобная шнуровка; мягкая стелька из EVA; внутренняя отделка из текстиля; протектор на подошве создает надежное сцепление с любой поверхностью.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 4990,
		"image": "src/App/images/4.jpg"
	},
	{
		"id": 5,
		"name": "Кеды Norway Originals",
		"desc": "Кеды Norway Originals выполнены из искусственной кожи. Детали: шнуровка, текстильная подкладка, резиновая подошва.",
		"sizes": [39, 40, 41],
		"price": 2460,
		"image": "src/App/images/5.jpg"
	},
	{
		"id": 6,
		"name": "Кроссовки NIKE AIR MAX INVIGOR Nike",
		"desc": "Мужские кроссовки NIKE AIR MAX INVIGOR, выполненные в стиле легендарных Air Max 95, отличаются легкостью, комфортом и знаменитым привлекательным дизайном. Детали: бесшовные накладки и легендарный модуль Max Air в области пятки для создания стильного образа и поддержки в течение дня, легкий дышащий верх Breathe Tech, бесшовные накладки для уменьшения веса модели и минималистичного дизайна.",
		"sizes": [39, 40, 41, 42, 43, 44],
		"price": 5990,
		"image": "src/App/images/6.jpg"
	},
	{
		"id": 7,
		"name": "Кеды Alcott",
		"desc": "Низкие кеды Alcott выполнены из натуральной замши, мягкая текстильная подкладка. Детали: плотная шнуровка, гибкая подошва, два комплекта шнурков.",
		"sizes": [40, 41, 42],
		"price": 1790,
		"image": "src/App/images/7.jpg"
	},
	{
		"id": 8,
		"name": "Кеды Reflex",
		"desc": "Зимние кеды Reflex выполнены из искусственного нубука, подкладка и стелька - из искусственного меха. Детали: плоская резиновая подошва.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 2790,
		"image": "src/App/images/8.jpg"
	},
	{
		"id": 9,
		"name": "Кеды Moza-X",
		"desc": "Кеды Moza-X выполнены из искусственной замши, текстильные стелька и подкладка. Детали: шнуровка на подъеме, петля на заднике, гибкая подошва.",
		"sizes": [40, 41, 42],
		"price": 1720,
		"image": "src/App/images/9.jpg"
	},
	{
		"id": 10,
		"name": "Кеды CLAVEL M 316 1 Lacoste",
		"desc": "Кеды Lacoste выполнены из натуральной замши с текстильной подкладкой. Детали: текстильная стелька, функциональная шнуровка, усиленная пятка, логотип бренда, резиновая подошва.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 6280,
		"image": "src/App/images/10.jpg"
	},
	{
		"id": 11,
		"name": "Кроссовки TRAIL CRUSHER Merrell",
		"desc": "Кроссовки Merrell Trail Crusher предназначены для бега по пересеченной местности. Подкладка из воздухопроницаемой сетки с антибактериальной пропиткой M Select FRESH - для оптимального микроклимата. Промежуточная облегченная подошва M Bound из EVA (4 мм наклон, амортизирующий слой - 8 мм) и технология Air Cushion в пяточной части - для дополнительной амортизации и стабильности. Подошва M Select GRIP - для надежного сцепления с поверхностью. Детали: уплотненный мыс и задник, светоотражающие вставки.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 5999,
		"image": "src/App/images/11.jpg"
	},
	{
		"id": 12,
		"name": "Кроссовки iD active",
		"desc": "Кроссовки iD active выполнены из натуральной кожи. Детали: шнуровка; внутренняя отделка из натурального меха; подошва из термопластиковой резины.",
		"sizes": [38, 39, 40, 41, 42, 43, 44, 45],
		"price": 6899,
		"image": "src/App/images/12.jpg"
	}
];

export default data;