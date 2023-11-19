const products = [
  /* T-shirts */
  {
    _id: '1',
    name: 'Men Polo Collar T-shirt',
    image: '/mens-latest/1.jpg',
    description:
      'Men Green Slim Fit Solid Polo Collar T-shirt. With the Active Tshirt, you\'re in for a style treat. This t-shirt is cut to fit you perfectly and crafted from fabric that will keep you cool and dry throughout the day.',
    brand: 'WROGN',
    category: 'tshirt',
    gender: 'menproduct',
    price: 799,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'The Graphic Slim Fit T-Shirt in Tortoise Brown',
    image: '/mens-latest/1_1.jpg',
    description:
      'Basic with a twist. Inspired by ornate vintage textiles, this T-shirt is made from pre-shrunk organic cotton and features a slim fit. Regular length. Ribbed crewneck. Flag label on the side. Ideal for layering, wear it season after season alone or underneath a sweater or overshirt.',
    brand: 'PEARL',
    category: 'tshirt',
    gender: 'menproduct',
    price: 159,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '3',
    name: 'The Colour Block Motion T-Shirt in Deep Blue',
    image: '/mens-latest/1_2.jpg',
    description:
      'Stay active without losing your cool. The slim fit Motion T-shirt features drirelease®, a thermoregulating technology designed to pull moisture away from the skin and keep you dry at all times. Colour block design. Crewneck. Saddle sleeves. Flatlock stitch construction for added ease throughout the day. Complete the look by pairing it with its matching Motion pant or jogger.',
    brand: 'WROGN',
    category: 'tshirt',
    gender: 'menproduct',
    price: 799,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'The Slim Fit Essential T-Shirt in Dark Blue',
    image: '/mens-latest/1_3.jpg',
    description:
      'Basic, only better. An all-time favourite, this icon is designed to never grow old or out of style. Made from the finest of organic cottons, it features a slim fit and a timeless crewneck. Wear it throughout the year, either alone or under a sweater or overshirt.',
    brand: 'NIKE',
    category: 'tshirt',
    gender: 'menproduct',
    price: 799,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'The Slim Fit Henley T-Shirt in Vintage Grey',
    image: '/mens-latest/1_4.jpg',
    description:
      'Add a touch of sophistication to your daily T-shirt rotation. Made from organic cotton, this slim fit henley T-shirt features contrasting ribbed collar and sleeve hems. Regular length. Pique jersey. An elevated essential inspired by classic athletic aesthetics.',
    brand: 'ADIDAS',
    category: 'tshirt',
    gender: 'menproduct',
    price: 799,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  /* Shirts */
  {
    _id: '6',
    name: 'Men Solid Casual Shirt',
    image: '/mens-latest/2.jpg',
    description:
      'Men Pink Slim Fit Solid Casual Shirt. Has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem.',
    brand: 'Dennis Lingo',
    category: 'shirt',
    price: 599,
    gender: 'menproduct',
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },

  /* Jackets */
  {
    _id: '7',
    name: 'Men Black Solid Sporty Jacket',
    image: '/mens-latest/3.jpg',
    description:
      'A classic wind cheater gets a trendy makeover. The HRX Mens Running Jacket protects you from the wind as you run and its ergonomic seams give a wide range of motion. After your run, the wind cheater helps regulate body temperature so that you don\'t catch a chill.',
    brand: 'HRX',
    category: 'jacket',
    gender: 'menproduct',
    price: 929,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },

  /* Suits */
  {
    _id: '8',
    name: 'Burgundy Self-Design Slim Fit Formal Suit',
    image: '/mens-latest/5.jpg',
    description:
      'Burgundy self-design suit single-breasted with double button closures, long sleeves, one welt pocket, and two flap pockets. Burgundy self-design mid-rise trousers have a zip fly with a button and a hook and bar closure, four pockets, a waistband with belt loops. Comes with a lapel pin.',
    brand: 'Louis Philippe',
    gender: 'menproduct',
    category: 'suits',
    price: 1500,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },

  /* Shorts */
  {
    _id: '9',
    name: 'Men Black Solid Sports RAPID-DRY Shorts',
    image: '/mens-latest/4.jpg',
    description:
      'The HRX Mens Active Shorts are the ultimate upgrade for your summer wardrobe. These shorts incorporate the latest in clothing technology to keep you cool and fresh throughout the day. Rapid Dry Technology wicks sweat and dries fast. Anti-Microbial technology keeps odor-causing microbes away. Pockets to keep essentials at hand.',
    brand: 'HRX',
    category: 'shorts',
    price: 599,
    countInStock: 7,
    rating: 3.5,
    gender: 'menproduct',
    numReviews: 10,
  },

  /* Jeans */
  {
    _id: '10',
    name: 'Black Skinny Fit Jeans',
    image: '/mens-latest/6.jpg',
    description:
      'Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans. Black dark wash 5-pocket mid-rise jeans, clean look with no fade, has a button and zip closure, waistband with belt loops.',
    brand: 'WROGN',
    category: 'jeans',
    price: 799,
    countInStock: 0,
    gender: 'menproduct',
    rating: 4,
    numReviews: 12,
  },
  
  /* Women's Product */
    {
      _id: '11',
      name: 'Women Black Solid High Neck Cropped Top',
      image: '/womens-latest/1.jpg',
      description: 'Black solid knitted crop top, has a high neck, and long sleeves',
      brand: 'SASSAFRAS',
      category: 'top',
      gender: 'womenproduct',
      price: 699,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '12',
      name: 'Pink Ethnic Motifs Embroidered Mirror Work Kurti',
      image: '/womens-latest/2.jpg',
      description:
        'Pink straight kurti Ethnic motifs embroidered Round neck, three-quarter, puff sleeves Mirror work detail Machine weave regular cotton viscose blend',
      brand: 'Biba',
      category: 'kurti',
      price: 899,
      gender: 'womenproduct',
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      _id: '13',
      name: 'Women Black Solid Fringed Hem Denim Jacket',
      image: '/womens-latest/3.jpg',
      description:
        'Black solid denim jacket, has a spread collar, button closure, long sleeves, two pockets, straight hem with fringed detail',
      brand: 'SASSAFRAS',
      category: 'jacket',
      gender: 'womenproduct',
      price: 1500,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      _id: '14',
      name: 'Women Black High-Rise Stretchable Jeans',
      image: '/womens-latest/5.jpg',
      description:
        'Black dark wash 5-pocket high-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops',
      brand: 'PARIS HAMILTON',
      category: 'jeans',
      price: 2500,
      countInStock: 11,
      gender: 'womenproduct',
      rating: 5,
      numReviews: 12,
    },
    {
      _id: '15',
      name: 'Men Black Solid Sports RAPID-DRY Shorts',
      image: '/womens-latest/4.jpg',
      description:
        'Navy blue woven culottes Regular fit Mid-rise Length: cropped Pattern: striped Flat-front design Feature: plain 2 pockets',
      brand: 'Fabindia',
      category: 'trouser',
      price: 699,
      countInStock: 7,
      rating: 3.5,
      gender: 'womenproduct',
      numReviews: 10,
    },
    {
      _id: '16',
      name: 'Dusty Pink Lehenga Set',
      image: '/womens-latest/6.jpg',
      description:
        'Dusty Pink semi-stitched lehenga and unstitched blouse with dupatta Dusty Pink unstitched woven design blouse Dusty Pink solid semi-stitched lehenga, has a drawstring and concealed zip closure, flared hem Dusty Pink solid dupatta, has a ruffle detailing border',
      brand: 'Inddus',
      category: 'indi',
      price: 2500,
      countInStock: 0,
      gender: 'womenproduct',
      rating: 4,
      numReviews: 12,
    },
  
  ];
  
export default products;
