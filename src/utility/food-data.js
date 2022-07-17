const foodItemsArr = [
    {
        id: 'hlt1',
        category: 'healthy',
        name: 'Herbed Chicken Marsala',
        desc: "Smothered in low-calorie sauteed mushrooms and sun-dried tomatoes, this dish is both healthy and satisfying. A little bit of butter goes a long way in the sauce-just a touch adds creamy richness.",
        rating: 4,
        imgurl: require('../assets/Healthy/healthy1.jpeg'),
        price: 350,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt2',
        category: 'healthy',
        name: 'Salmon with Kale Salad',
        desc: "Pan-Seared Salmon with Kale and Apple Salad. The star of this dish is the kale salad. It's crunchy, tangy and sweet!",
        rating: 5,
        imgurl: require('../assets/Healthy/healthy2.jpeg'),
        price: 550,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt3',
        category: 'healthy',
        name: 'Parmesan Chicken with Broccoli',
        desc: "This chicken gets incredibly crunchy, thanks to a light coating of panko and Parmesan and a quick cook in the air fryer! Serve it with charred broccoli and a tangy yogurt sauce for a healthy and complete meal you can throw together any day of the week.",
        rating: 4,
        imgurl: require('../assets/Healthy/healthy3.jpeg'),
        price: 450,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt4',
        category: 'healthy',
        name: 'Veg Tacos',
        desc: "It's impossible to resist flavorful and tender veggies after it's been slowly simmered in chicken broth and aromatic spices.",
        rating: 3,
        imgurl: require('../assets/Healthy/healthy4.jpg'),
        price: 200,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt5',
        category: 'healthy',
        name: 'Noodle Soup',
        desc: "This soup is just as good for dinner as it is for lunch -- it's warming and comforting and perfect for a rainy day.",
        rating: 4,
        imgurl: require('../assets/Healthy/healthy5.jpg'),
        price: 150,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt6',
        category: 'healthy',
        name: 'Breakfast Burrito',
        desc: "Ellie's whole-wheat breakfast burritos make for a hand-held, vegetable-packed way start to your day.",
        rating: 5,
        imgurl: require('../assets/Healthy/healthy6.jpeg'),
        price: 200,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt7',
        category: 'healthy',
        name: 'Rainbow Salad',
        desc: "Sauteed veggies and boiled potatoes is full of crunch and well-seasoned ingredients. Eating all the colors of the rainbow ensures we get a nutrient dense meal, packed with nearly all the vitamins and minerals our body needs for the day.",
        rating: 4,
        imgurl: require('../assets/Healthy/healthy7.jpg'),
        price: 250,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt8',
        category: 'healthy',
        name: 'Chicken and Broccoli',
        desc: "This simple weeknight stir-fry is comforting and satisfying. The broccoli stems are used to add textural contrast and also to help bulk up the dish, and why waste them?",
        rating: 5,
        imgurl: require('../assets/Healthy/healthy8.jpg'),
        price: 400,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'hlt9',
        category: 'healthy',
        name: 'Avocado Toast',
        desc: "In this reverse-engineered avocado toast, the avocado is coated with crispy garlic breadcrumbs before being topped with a perfect fried egg.",
        rating: 5,
        imgurl: require('../assets/Healthy/healthy9.jpeg'),
        price: 250,
        btnActiveClr: 'rgb(0, 194, 0)'
    },
    {
        id: 'ch1',
        category: 'chinese',
        name: 'Hot and Sour Soup',
        desc: "Made with the goodness of mushrooms, cabbage, carrot and a spicy twist of red peppers or white pepper and sour with vinegar.",
        rating: 4,
        imgurl: require('../assets/Chinese/chinese1.jpg'),
        price: 120,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch2',
        category: 'chinese',
        name: 'Szechwan Chilli Chicken',
        desc: "A fiery delight straight from the Sichuan region. It is loaded with pungent spices like brown pepper. red chillies, ginger, green chillies and white pepper.",
        rating: 5,
        imgurl: require('../assets/Chinese/chinese2.jpg'),
        price: 250,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch3',
        category: 'chinese',
        name: 'Spring Rolls',
        desc: "A crisp appetizer where shredded veggies are encased in thin sheets and then fried golden. Little munchies to prepare at home for a high tea menu or just a party starter, served with a tangy dip.",
        rating: 5,
        imgurl: require('../assets/Chinese/chinese3.jpg'),
        price: 175,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch4',
        category: 'chinese',
        name: 'Stir Fried Tofu with Rice',
        desc: "A simple stir-fry with tofu and oriental sauces. Sti fried togu with rice is a great main course dish to prepare at home laced with flavourful spices and sauces. Serve with some fried rice to make a wholesome meal.",
        rating: 3,
        imgurl: require('../assets/Chinese/chinese4.jpg'),
        price: 225,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch5',
        category: 'chinese',
        name: 'Honey Chilli Potato',
        desc: "The quintessential Indo-Chinese snack! Honey chilli potato is what you'll find at every Chinese van in and around north India. It has the perfect balance of sweet and spicy with sliced potatoes tossed with a host of sauces and spices.",
        rating: 5,
        imgurl: require('../assets/Chinese/chinese5.jpg'),
        price: 150,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch6',
        category: 'chinese',
        name: 'Veg Hakka Noodles',
        desc: "A kid's favourite, veg hakka noodles is a great way to shove all the veggies down to your kid's plate. Just toss up all your favourite veggies like capsicum, carrot, spring onions and cabbage in a tangy mix of sauces and you'll have a clear winner at the table!",
        rating: 4,
        imgurl: require('../assets/Chinese/chinese6.jpg'),
        price: 125,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch7',
        category: 'chinese',
        name: 'Veg Fried Rice',
        desc: "Veg fried rice is a delicious recipe with the goodness of veggies like carrot, cabbage, beans along with baby corn, soy sauce, chillies and garlic. Perfect lunch or dinner option.",
        rating: 4,
        imgurl: require('../assets/Chinese/chinese7.jpg'),
        price: 125,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch8',
        category: 'chinese',
        name: 'Machurian',
        desc: "Manchurians made of mushrooms are bathed in the classic hot and spicy Indo-Chinese flavours. So, if you are a fan of manchurians, then this is a must try",
        rating: 5,
        imgurl: require('../assets/Chinese/chinese8.png'),
        price: 110,
        btnActiveClr: 'orangered'
    },
    {
        id: 'ch9',
        category: 'chinese',
        name: 'Paneer Chilli',
        desc: "Indo-Chinese appetizer where crisp batter fried paneer is tossed in slightly sweet, spicy, hot and sour Chilli Sauce.",
        rating: 4,
        imgurl: require('../assets/Chinese/chinese9.jpg'),
        price: 175,
        btnActiveClr: 'orangered'
    },
    {
        id: 'veg1',
        category: 'veg',
        name: 'Palak Panner',
        desc: "Paneer in a thick paste made from puréed spinach, called palak in Hindi, Marathi, Gujarati, and other Indian languages.",
        rating: 5,
        imgurl: require('../assets/Veg/veg1.jpg'),
        price: 275,
        btnActiveClr: 'green'
    },
    {
        id: 'veg2',
        category: 'veg',
        name: 'Panner Butter Masala',
        desc: "Paneer butter masala is rich and creamy made of butter, paneer, onions, tomatoes, cashew and spice powders, and herbs. adding a fresh and generous amount of butter to the gravy gives a good taste.",
        rating: 4,
        imgurl: require('../assets/Veg/veg2.jpg'),
        price: 250,
        btnActiveClr: 'green'
    },
    {
        id: 'veg3',
        category: 'veg',
        name: 'Rajma Masala',
        desc: "Red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.",
        rating: 5,
        imgurl: require('../assets/Veg/veg3.jpg'),
        price: 275,
        btnActiveClr: 'green'
    },
    {
        id: 'veg4',
        category: 'veg',
        name: 'Dal Makhani',
        desc: "This has to be one of the most popular and delicious dals in India. Luscious and rich with a deep flavor, this dal is made mostly with a whole black lentil called sabut urad dal and a smattering of red kidney beans.",
        rating: 4,
        imgurl: require('../assets/Veg/veg4.jpg'),
        price: 225,
        btnActiveClr: 'green'
    },
    {
        id: 'veg5',
        category: 'veg',
        name: 'Bhindi Masala',
        desc: "North Indian curried dish featuring tender okra pods, piquant onions, tangy tomatoes, bold spices and herbs. It is a popular dish and served in many restaurants.",
        rating: 5,
        imgurl: require('../assets/Veg/veg5.jpg'),
        price: 200,
        btnActiveClr: 'green'
    },
    {
        id: 'veg6',
        category: 'veg',
        name: 'Kadhai Paneer',
        desc: "Paneer cooked in spicy kadai masala, bell peppers, tomatoes and kasuri methi.",
        rating: 3,
        imgurl: require('../assets/Veg/veg6.jpg'),
        price: 350,
        btnActiveClr: 'green'
    },
    {
        id: 'veg7',
        category: 'veg',
        name: 'Dal Tadka',
        desc: "Cooked spiced lentils are finished with a tempering made of ghee/ oil and spices.",
        rating: 4,
        imgurl: require('../assets/Veg/veg7.jpg'),
        price: 175,
        btnActiveClr: 'green'
    },
    {
        id: 'veg8',
        category: 'veg',
        name: 'Veg Pulao',
        desc: "Rice cooked in stock or broth, adding spices, and other veggies",
        rating: 5,
        imgurl: require('../assets/Veg/veg8.jpg'),
        price: 225,
        btnActiveClr: 'green'
    },
    {
        id: 'veg9',
        category: 'veg',
        name: 'Aloo Gobi',
        desc: "Vegetarian dish from the Indian subcontinent made with potatoes, cauliflower, and Indian spices. It is yellowish in colour due to the use of turmeric, and occasionally contains kalonji and curry leaves.",
        rating: 5,
        imgurl: require('../assets/Veg/veg9.jpg'),
        price: 250,
        btnActiveClr: 'green'
    },
    {
        id: 'nv1',
        category: 'non-veg',
        name: 'Butter Chicken',
        desc: "Ask any Indian foodie their favourite Indian chicken dishes, butter chicken will invariably be in the top three. Succulent chicken pieces doused in a velvety gravy of butter and cream, makes for heavenly treat for non-vegetarians.",
        rating: 5,
        imgurl: require('../assets/Non Veg/nv1.jpg'),
        price: 375,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv2',
        category: 'non-veg',
        name: 'Butter Chicken',
        desc: "A typical north-Indian-style chicken curry! Spicy chicken masala is a heaven for all the spice lovers who love their chicken doused in a myriad of flavours.",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv2.jpg'),
        price: 400,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv3',
        category: 'non-veg',
        name: 'Shahi Chicken Korma',
        desc: "A rich chicken curry, slow-cooked over low flame, chicken korma is as 'shahi' as it sounds. It is a popular technique of braising meat with yogurt, cream, stock and various spices that became a favourite during the Mughal era.",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv3.jpg'),
        price: 425,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv4',
        category: 'non-veg',
        name: 'Mutton Kofte',
        desc: "Koftas are a part of Mughlai cuisine of the Indian subcontinent, borrowed largely from Persian cuisine and reserved for special occasions. Here is a delightful mutton kofte recipe made with an extensive use of spices and herbs, including sun dried leaves, cardamom, kasturi methi, deggi mirch and saunf powder.",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv4.jpg'),
        price: 575,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv5',
        category: 'non-veg',
        name: 'Champaran Mutton Curry',
        desc: "A dish that is prepared from goat meat and vegetables. The dish is found in different variations across all states, countries and regions of South Asia and the Caribbean.",
        rating: 5,
        imgurl: require('../assets/Non Veg/nv5.jpg'),
        price: 650,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv6',
        category: 'non-veg',
        name: 'Champaran Mutton Curry',
        desc: "Some know it as 'ahuna mutton', while some call it 'matka gosht', nonetheless, this one-pot mutton curry from Bihar has a fan base of its own drooling over",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv6.jpg'),
        price: 600,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv7',
        category: 'non-veg',
        name: 'Malabari Prawn Curry',
        desc: "Soak in the flavours of south with this authentic coconut-y prawn curry! Tangy tamarind, chillies and coconut paste stirred together and cooked with prawns in a luscious, spicy curry.",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv7.jpg'),
        price: 425,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv8',
        category: 'non-veg',
        name: 'Goan Fish Curry',
        desc: "Bring the authentic flavours of Goan cuisine right inside your home! This fish curry has fish marinated in a thick paste of onion, coconut, garlic and chilli are cooked till soft and best served on a bed of rice.",
        rating: 4,
        imgurl: require('../assets/Non Veg/nv8.jpg'),
        price: 375,
        btnActiveClr: 'brown'
    },
    {
        id: 'nv9',
        category: 'non-veg',
        name: 'Crab Meat Masala',
        desc: "This one is sure to set your taste buds ablaze with crab meat tossed with fiery spices from the south including the chop masala.",
        rating: 5,
        imgurl: require('../assets/Non Veg/nv9.jpg'),
        price: 425,
        btnActiveClr: 'brown'
    },
    {
        id: 'ff1',
        category: 'fast food',
        name: 'Cheeseburger',
        desc: "Slice of cheese placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
        rating: 4,
        imgurl: require('../assets/Fast Food/ff1.jpg'),
        price: 175,
        btnActiveClr: 'red'
    },
    {
        id: 'ff2',
        category: 'fast food',
        name: 'Onion Rings',
        desc: "An appetizer or side dish in British and American cuisine. They generally consist of a cross-sectional 'ring' of onion dipped in batter or bread crumbs and then deep fried; a variant is made with onion paste.",
        rating: 4,
        imgurl: require('../assets/Fast Food/ff2.jpg'),
        price: 150,
        btnActiveClr: 'red'
    },
    {
        id: 'ff3',
        category: 'fast food',
        name: 'French Fries',
        desc: "Batonnet or allumette-cut deep-fried potatoes, disputed origin from Belgium and France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer",
        rating: 5,
        imgurl: require('../assets/Fast Food/ff3.jpg'),
        price: 125,
        btnActiveClr: 'red'
    },
    {
        id: 'ff4',
        category: 'fast food',
        name: 'Milkshake',
        desc: "Sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture",
        rating: 5,
        imgurl: require('../assets/Fast Food/ff4.jpg'),
        price: 145,
        btnActiveClr: 'red'
    },
    {
        id: 'ff5',
        category: 'fast food',
        name: 'Fried Chicken',
        desc: "Chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried. The breading adds a crisp coating or crust to the exterior of the chicken while retaining juices in the meat.",
        rating: 5,
        imgurl: require('../assets/Fast Food/ff5.jpg'),
        price: 475,
        btnActiveClr: 'red'
    },
    {
        id: 'ff6',
        category: 'fast food',
        name: 'Sandwich',
        desc: "Basically, slices of meat, cheese, or other food placed between two slices of bread.",
        rating: 3,
        imgurl: require('../assets/Fast Food/ff6.png'),
        price: 150,
        btnActiveClr: 'red'
    },
    {
        id: 'ff7',
        category: 'fast food',
        name: 'Hot Dog',
        desc: "Grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself",
        rating: 4,
        imgurl: require('../assets/Fast Food/ff7.jpg'),
        price: 275,
        btnActiveClr: 'red'
    },
    {
        id: 'ff8',
        category: 'fast food',
        name: 'Hamburger',
        desc: "Burger consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
        rating: 5,
        imgurl: require('../assets/Fast Food/ff8.jpg'),
        price: 325,
        btnActiveClr: 'red'
    },
    {
        id: 'ff9',
        category: 'fast food',
        name: 'Pizza',
        desc: "Round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
        rating: 5,
        imgurl: require('../assets/Fast Food/ff9.jpg'),
        price: 375,
        btnActiveClr: 'red'
    },
    {
        id: 'itl1',
        category: 'italian',
        name: 'Caprese Salad with Pesto Sauce',
        desc: "Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one.",
        rating: 4,
        imgurl: require('../assets/Italian/itl1.jpg'),
        price: 175,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl2',
        category: 'italian',
        name: 'Bruschetta',
        desc: "An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic. The classic Italian starter!",
        rating: 5,
        imgurl: require('../assets/Italian/itl2.jpg'),
        price: 225,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl3',
        category: 'italian',
        name: 'Pasta Carbonara',
        desc: "This simple Roman pasta dish derives its name from 'carbone' meaning coal. It was a pasta popular with the coal miners. The original recipe calls for guanciale, which is pig's cheek, but since its not easily available, the chef has used bacon instead.",
        rating: 4,
        imgurl: require('../assets/Italian/itl3.jpg'),
        price: 250,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl4',
        category: 'italian',
        name: 'Margherita Pizza',
        desc: "Fancy a pipping hot pizza, fresh out of the oven? Create one at home! Margherita Pizza is to many the true Italian flag. One of the most loved Italian dishes, it just takes a few simple ingredients and you get insanely delicious results!",
        rating: 5,
        imgurl: require('../assets/Italian/itl4.jpg'),
        price: 325,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl5',
        category: 'italian',
        name: 'Mushroom Risotto',
        desc: "A plateful of buttery risotto with the goodness of mushrooms. A healthy bowl of mushroom risotto has benefits more than you can think. A great source of protein, powerful antioxidant and even has cancer-fighting properties.",
        rating: 5,
        imgurl: require('../assets/Italian/itl5.jpg'),
        price: 275,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl6',
        category: 'italian',
        name: 'Lasagna',
        desc: "The ultimate Italian dish has to be this recipe of Lasagna. A secret to the best lasagna recipe lies in the perfectly made, home made bolognese sauce and this bacon and lamb lasagna boasts of a delicious one!",
        rating: 3,
        imgurl: require('../assets/Italian/itl6.jpg'),
        price: 350,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl7',
        category: 'italian',
        name: 'Stuffed Ravioli',
        desc: "The classic Italian Ravioli comes with an Indian twist. Tricolor ravioli stuffed pumpkin, shallots and oodles of parmesan cheese along with the goodness of walnuts.",
        rating: 4,
        imgurl: require('../assets/Italian/itl7.jpg'),
        price: 375,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl8',
        category: 'italian',
        name: 'Mango and Coconut Pannacotta',
        desc: "Indulge in this sweet delight, made of fresh cream, gelatin, sugar and the king of fruits- mango! Top it with mint leaves to add a dose of freshness.",
        rating: 4,
        imgurl: require('../assets/Italian/itl8.jpg'),
        price: 225,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'itl9',
        category: 'italian',
        name: 'Pizza Panne',
        desc: "Enjoy the crisp crunch of these paper thin snacks. Infused will garlic and subtle spices, you can team them up with whatever you desire or just go on a solo affair!",
        rating: 5,
        imgurl: require('../assets/Italian/itl9.jpg'),
        price: 425,
        btnActiveClr: 'rgb(245, 245, 118)'
    },
    {
        id: 'ds1',
        category: 'desserts',
        name: 'Blueberry Icecream',
        desc: "Icecream made with sugar, water, cream and ofcourse blueberries!",
        rating: 5,
        imgurl: require('../assets/Desserts/ds1.jpg'),
        price: 125,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds2',
        category: 'desserts',
        name: 'Gulab Jamun',
        desc: "Sweet confectionary or dessert, originating in the Indian subcontinent",
        rating: 4,
        imgurl: require('../assets/Desserts/ds2.jpeg'),
        price: 100,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds3',
        category: 'desserts',
        name: 'Chocolate Icecream',
        desc: "Icecream made with sugar, water, cream and ofcourse sweet sweet chocolate!",
        rating: 5,
        imgurl: require('../assets/Desserts/ds3.jpg'),
        price: 125,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds4',
        category: 'desserts',
        name: 'Apple Pie',
        desc: "Pie filled with apples served with whipped cream, ice cream, or cheddar cheese.",
        rating: 3,
        imgurl: require('../assets/Desserts/ds4.jpg'),
        price: 175,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds5',
        category: 'desserts',
        name: 'Vanilla Icecream',
        desc: "Icecream made with sugar, water, cream and ofcourse sweet milk!",
        rating: 4,
        imgurl: require('../assets/Desserts/ds5.jpg'),
        price: 125,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds6',
        category: 'desserts',
        name: 'Rasgulla',
        desc: "Ball-shaped dumplings of chhena and semolina dough, cooked in light sugar syrup made of sugar.",
        rating: 5,
        imgurl: require('../assets/Desserts/ds6.jpg'),
        price: 100,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds7',
        category: 'desserts',
        name: 'Strawberry Icecream',
        desc: "Icecream made with sugar, water, cream and ofcourse strawberries!",
        rating: 5,
        imgurl: require('../assets/Desserts/ds7.jpg'),
        price: 125,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds8',
        category: 'desserts',
        name: 'Trifle',
        desc: "Thin layer of sponge fingers commonly soaked in sherry or another fortified wine, custard and a fruit element",
        rating: 5,
        imgurl: require('../assets/Desserts/ds8.jpg'),
        price: 225,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'ds9',
        category: 'desserts',
        name: 'Brownie with Icecream',
        desc: "Brownie served with vanilla icecream topped with chocolate syrup",
        rating: 5,
        imgurl: require('../assets/Desserts/ds9.jpg'),
        price: 250,
        btnActiveClr: 'palevioletred'
    },
    {
        id: 'bv1',
        category: 'beverages',
        name: 'Tea',
        desc: 'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries.',
        rating: 4,
        imgurl: require('../assets/Beverages/bv1.jpg'),
        price: 75,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv2',
        category: 'beverages',
        name: 'Coffee',
        desc: 'Brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.',
        rating: 4,
        imgurl: require('../assets/Beverages/bv2.jpeg'),
        price: 125,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv3',
        category: 'beverages',
        name: 'Mango Lassi',
        desc: "A delicious creamy drink with mango, yogurt, milk, a little sugar, and a sprinkling of cardamom. It's cool and refreshing on a hot day!",
        rating: 5,
        imgurl: require('../assets/Beverages/bv3.jpg'),
        price: 100,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv4',
        category: 'beverages',
        name: 'Pina Colada',
        desc: "A cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice",
        rating: 5,
        imgurl: require('../assets/Beverages/bv4.jpg'),
        price: 400,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv5',
        category: 'beverages',
        name: 'Lemonade',
        desc: "A sweetened lemon-flavored beverage. There are varieties of lemonade found throughout the world. In North America and South Asia, cloudy lemonade dominates",
        rating: 5,
        imgurl: require('../assets/Beverages/bv5.jpg'),
        price: 120,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv6',
        category: 'beverages',
        name: 'Falooda',
        desc: "A falooda is a Mughlai Indian version of a cold dessert made with noodles. It has origins in the Persian dish faloodeh, variants of which are found across West, Central, and South Asia",
        rating: 4,
        imgurl: require('../assets/Beverages/bv6.jpg'),
        price: 175,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv7',
        category: 'beverages',
        name: 'Buttermilk',
        desc: "Buttermilk is a fermented dairy drink. Traditionally, it was the liquid left behind after churning butter out of cultured cream.",
        rating: 3,
        imgurl: require('../assets/Beverages/bv7.jpg'),
        price: 75,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv8',
        category: 'beverages',
        name: 'Coconut Water',
        desc: "Coconut water is the clear liquid inside coconuts. In early development, it serves as a suspension for the endosperm of the coconut during the nuclear phase of development.",
        rating: 5,
        imgurl: require('../assets/Beverages/bv8.jpg'),
        price: 100,
        btnActiveClr: 'lightblue'
    },
    {
        id: 'bv9',
        category: 'beverages',
        name: 'Orange Juice',
        desc: "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine.",
        rating: 5,
        imgurl: require('../assets/Beverages/bv9.jpg'),
        price: 120,
        btnActiveClr: 'lightblue'
    },
]

export default foodItemsArr;