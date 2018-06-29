
exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 1, name: 'Chocolate Cupcake', shop_id: 1, stock_qty: 6, steps: '{"1": "Preheat oven to 350 degrees F (175 degrees C). Line a muffin pan with paper or foil liners. Sift together the flour, baking powder, baking soda, cocoa and salt. Set aside.", "2": "In a large bowl, cream together the butter and sugar until light and fluffy. Add the eggs one at a time, beating well with each addition, then stir in the vanilla. Add the flour mixture alternately with the milk; beat well. Fill the muffin cups 3/4 full.", "3": "Bake for 15 to 17 minutes in the preheated oven, or until a toothpick inserted into the cake comes out clean. Frost with frosting when cool.", "5":"Box"}', category_id: 1, photo:'https://www.recipetineats.com/wp-content/uploads/2017/05/Chocolate-Cupcakes12-landscape.jpg'},
        {id: 2, name: 'Vanilla Cupcake', shop_id: 1, stock_qty: 6, steps: '{"1": "Preheat an oven to 350 degrees F (175 degrees C). Line a standard muffin tin with 12 paper cupcake liners. Combine flour, baking soda, and salt in a bowl; set aside.", "2": "Heat the butter and milk in a small saucepan over low heat until the butter has melted. Beat the sugar, eggs, egg yolk, and vanilla with an electric mixer in a large bowl until it has thickened slightly and is lighter in color.", "3": "Gradually beat in the flour mixture on low speed until just incorporated. Slowly pour in the hot milk, beating until just combined.", "4":"Divide batter evenly between cupcake liners. Bake until toothpick inserted into center comes out clean, about 20 minutes", "5":"Cool cupcakes in pan for 10 minutes. Transfer cupcakes to a cooling rack to cool completely.", "6":"Box"}', category_id: 1, photo:'http://redonline.cdnds.net/main/thumbs/2101/1372752153-vanilla-cupcakes-with-swirly-icing-mary-berry-s-cookery-course__square.jpg'},
        {id: 3, name: 'Strawberry Cake', shop_id: 1, stock_qty: 0, steps: '{"1": "Preheat oven to 350 degrees F. Lightly spray pans with non-stick spray.", "2": "Place the cake mix, jello, strawberries, oil, milk and eggs in a large bowl. Mix 3 minutes, stopping to scrap down sides of bowl a couple times. ", "3": "Divide the batter evenly among layer pans or pour into 9x13 inch pan. For 9x13 pan bake 28 minutes or until toothpick inserted in center comes out clean.", "4":"Remove cake and cool completely and frost.", "5":"Box"}', category_id: 2, photo:'https://tatyanaseverydayfood.com/wp-content/uploads/2015/10/Strawberry-Champagne-Cake.jpg'},
        {id: 4, name: 'Vanilla Cake', shop_id: 1, stock_qty: 7, steps: '{"1": "Preheat the oven to 350 degrees F. Butter two 9-inch-round cake pans and line the bottoms with parchment paper; butter the parchment and dust the pans with flour, tapping out the excess.", "2": "Whisk 3 cups flour, the baking powder and salt in a bowl until combined. Beat 2 sticks butter and the sugar in a large bowl with a mixer on medium-high speed until light and fluffy, about 3 minutes. Reduce the mixer speed to medium; beat in the eggs, one at a time.", "3": "Divide the batter between the prepared pans. Bake until the cakes are lightly golden on top and a toothpick inserted into the middle comes out clean, 30 to 35 minutes. Transfer to racks and let cool 10 minutes, then run a knife around the edge of the pans and turn the cakes out onto the racks to cool completely.", "4":"Remove the parchment. Trim the tops of the cakes with a long serrated knife to make them level, if desired. and Frost.", "5":"Box"}', category_id: 2, photo:'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/11/main/2546901_south_46_main-slice_0.jpg?itok=I0Ii0_8R'},
        {id: 5, name: 'Chocolate Cake', shop_id: 1, stock_qty: 10, steps: '{"1": "Heat oven to 350°F. Grease and flour two 9-inch round baking pans.", "2": "Stir together sugar, flour, cocoa, baking powder, baking soda and salt in large bowl.", "3": "Add eggs, milk, oil and vanilla; beat on medium speed of mixer 2 minutes. ", "4":"Stir in boiling water (batter will be thin). Pour batter into prepared pans.", "5":"Bake 30 to 35 minutes", "6":"Cool and Frost", "7":"Box"}', category_id: 2, photo:'http://www.trbimg.com/img-56b2a3d0/turbine/la-fo-proof-chocolate-cake-photos-012/'},
        {id: 6, name: 'Chocolate Cookies', shop_id: 1, stock_qty: 3, steps: '{"1": "Heat oven to 350.", "2": "In large mixer bowl; cream butter and sugar until light and fluffy. Add eggs and vanilla; beat well.", "3": "Combine flour, cocoa, baking soda and salt; gradually blend into creamed mixture. Stir in peanut butter or chocolate chips.", "4":"Drop by teaspoonfuls onto ungreased cookie sheet. Bake 8-9 minutes. (Do not overbake; cookies will be soft. They will puff while baking and flatten while cooling.).", "5":"Cool slightly; remove from cookie sheet onto wire rack. Cool completely.", "6":"Box"}', category_id: 3, photo:'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/200902-xl-milk-chocolate-cookies-with-malted-cream.jpg?itok=Dt7vktKc'},
        {id: 7, name: 'SnickerDoodles', shop_id: 1, stock_qty: 2, steps: '{"1": "Cream the butter and sugar. Add egg, milk, and vanilla. Then add flour, baking powder, and salt.", "2": "Roll dough into 1.5-inch balls and roll them in cinnamon sugar.", "3": "Bake for 12 minutes at 375F.", "5":"Box"}', category_id: 3, photo:'https://sallysbakingaddiction.com/wp-content/uploads/2016/08/soft-caramel-snickerdoodles-1.jpg'},
        {id: 8, name: 'Sugar Cookies', shop_id: 1, stock_qty: 5, steps: '{"1": "Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.", "2": "In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.", "3": "Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks.", "4":"Box"}', category_id: 3, photo:'https://d2gk7xgygi98cy.cloudfront.net/4241-3-large.jpg'},
        {id: 9, name: 'Brownies', shop_id: 1, stock_qty: 3, steps: '{"1": "Heat oven to 325 degrees F. Line the bottom and sides of an 8-inch square baking pan with parchment paper, leaving an overhang on two opposite sides.", "2": "Add enough water to a medium saucepan so that it is 1 to 2 inches deep. Heat water until barely simmering. Combine butter, sugar, cocoa powder, and the salt in a bowl. Rest the bowl over simmering water (if the bottom of the bowl touches the water, remove a little water).", "3": "Stir mixture occasionally until the butter has melted and mixture is quite warm. Dont worry if it looks gritty, it will become smooth once you add the eggs and flour. Remove the bowl from heat and set aside for 3 to 5 minutes until it is only warm, not hot.", "4":"Stir in vanilla with a wooden spoon or spatula. Then, add eggs, one at a time, stirring vigorously after each one. When the batter looks thick, shiny and well blended, add the flour and stir until fully incorporated, then beat with the wooden spoon or spatula for 40 to 50 strokes. (The batter will be quite thick). Beat vigorously here. You want to see the batter pulling away from the sides of the bowl (if you do not have the strength to do this by hand, use a hand mixer). Spread evenly in lined pan.", "5":"Bake 20 to 25 minutes or until a toothpick can be inserted into the center and come out almost clean.", "6":"Box"}', category_id: 7, photo:'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-3-1200.jpg'},
        {id: 10, name: 'Cutting Knife', shop_id: 1, stock_qty: 12, steps: '{"1": "Put a bow-tie around handle"}', category_id: 4, photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlHKM-_kAO5ajXvFWAX2xbzqvGbuyJflGSPxL1f6xmCJsAqaMUg'},
        {id: 11, name: 'Glazed Donuts', shop_id: 1, stock_qty: 5, steps: '{"1": "Add the vegetable oil to a large, heavy-bottomed pot. (There should be at least 2 inches of oil in the pot and at least 2 inches between the top of the oil and the top of the pot.) Attach the deep-fry thermometer to the pot and begin heating the oil over medium heat to 350 F. Line a baking sheet with paper towels.", "2": "In a small bowl, whisk together the milk and the egg. In a separate medium bowl, whisk together the flour, sugar, baking powder and salt. Stir the milk-egg mixture into the dry ingredients, then stir in the melted butter, mixing until a soft dough forms.", "3": "Once the oil has reached 350F, use a small ice cream scoop to drop about 1 tablespoon scoops of dough into the oil, careful not to overcrowd the pan. Fry the doughnut holes, flipping them in the oil, for about 2 minutes or until theyre golden brown. Using a slotted spoon, transfer the doughnut holes to the paper towel-lined baking sheet.", "4":"Allow the doughnut holes to cool slightly. Place a cooling rack atop a baking sheet, then one by one, dip the doughnut holes into the glaze and transfer them to the rack to allow the excess glaze to drip off.", "5":"Box"}', category_id: 6, photo:'https://i.pinimg.com/originals/4f/16/e5/4f16e51f7430ce9a7efe802e1c30439c.jpg'},
        {id: 12, name: 'Chocolate Donuts', shop_id: 1, stock_qty: 8, steps: '{"1": "In a large bowl, sift together flour, cocoa powder, baking powder, soda and salt.", "2": "In a smaller bowl, whisk together buttermilk, eggs, sugar, melted butter and vanilla extract. Add the wet ingredients to the flour mixture, stirring with a large spoon until a dough forms. Line a baking sheet with wax or parchment paper, and roll dough into balls just slightly smaller than golfball size.", "3": "Add vegetable oil to a large pot and heat over medium heat. Once it reaches 350 degrees F, add 2-3 donut holes at a time, frying for 2-3 minutes. I tossed mine a few times during the frying process, just using a slotted spoon to continually flip them over. One finished, remove with a slotted spoon and let drain on a paper towel. Once all the donut holes have been fried, dip in the glaze them set on wire rack. Allow to set for 10-15 minutes for simple glazed donuts. If you want sprinkled donuts, immediately roll in sprinkles after glazing and let sit until set.", "4":"Glaze", "5":"Box"}', category_id: 6, photo:'https://www.crunchycreamysweet.com/wp-content/uploads/2016/02/chocolate-donuts-1.jpg'},
        {id: 13, name: 'Creme Donuts', shop_id: 1, stock_qty: 14, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 6, photo:'http://www.marystestkitchen.com/wp-content/uploads/2017/08/ft-vegan-boston-cream-dooughnuts-bitten.jpg'},
        {id: 14, name: 'Blueberry Muffins', shop_id: 1, stock_qty: 17, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 5, photo:'https://static01.nyt.com/images/2016/05/03/dining/03COOKING-JORDANMARSHMUFFIN2/03COOKING-JORDANMARSHMUFFIN2-articleLarge.jpg'},
        {id: 15, name: 'Baklava', shop_id: 1, stock_qty: 13, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVwtGpxSIJvox3Wb1Q4w0bfUKVmgGdGRTyDSLJSWYjP-w1leeFQ'},
        {id: 16, name: 'Candle Sticks', shop_id: 1, stock_qty: 40, steps: '{"1": "Add specified quantity to candle box"}', category_id: 4, photo:'https://i.pinimg.com/736x/79/75/3a/79753a77684486d7e22b9d8225e2d831--candle-holders-bees.jpg'},
        {id: 17, name: 'Banana Muffins', shop_id: 1, stock_qty: 11, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 5, photo:'https://www.mrbreakfast.com/images/755_muffins_with_banana.jpg'},
        {id: 18, name: 'Cinnamon Cookies', shop_id: 1, stock_qty: 9, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 3, photo:'https://www.recipegirl.com/wp-content/uploads/2013/02/Cinnamon-Vanilla-Monster-Cookies.jpg'},
        {id: 19, name: 'Raspberry Donuts', shop_id: 1, stock_qty: 4, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 6, photo:'https://avirtualvegan.com/wp-content/uploads/2017/02/Vegan-Raspberry-Donuts-6T.jpg'},
        {id: 20, name: 'Red Velvet Cupcakes', shop_id: 1, stock_qty: 6, steps: '{"1": "Get ingredients", "2": "Mix ingredients", "3": "Bake", "4":"Frost", "5":"Box"}', category_id: 1, photo:'https://www.recipethis.com/wp-content/uploads/Airfryer-Red-Velvet-Cupcake-Heaven.jpg'}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      );
    });
};
