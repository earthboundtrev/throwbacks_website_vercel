"use client"

import React from 'react'

export default function ArcadeMenu() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Menu</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Snacks and Appetizers Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Snacks and Appetizers</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">5 oz Bavarian Pretzel</h3>
                <p className="text-sm text-muted-foreground">Served with a side of mustard or cheese</p>
              </div>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Jalapeño Poppers</h3>
                <p className="text-sm text-muted-foreground">Cheddar stuffed breaded jalapeños</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Nachos Supreme</h3>
                <p className="text-sm text-muted-foreground">Tortillas with chili, cheese, sour cream and jalapeños</p>
              </div>
              <span className="font-bold">$8.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Nachos</h3>
                <p className="text-sm text-muted-foreground">Tortillas nacho cheese and diced jalapeños</p>
              </div>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Chips & Salsa</h3>
                <p className="text-sm text-muted-foreground">Tortilla chips with fire roasted salsa</p>
              </div>
              <span className="font-bold">$4.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Cheese Fries</h3>
                <p className="text-sm text-muted-foreground">Tortillas nacho cheese. Add bacon $1.50</p>
              </div>
              <span className="font-bold">$6.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Ice Cream Sandwich</h3>
                <p className="text-sm text-muted-foreground">Your choice between two chocolate-flavored wafers</p>
              </div>
              <span className="font-bold">$2.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Basket of Fries</h3>
                <p className="text-sm text-muted-foreground">Served straight cut fries w/ketchup, honey mustard or mayonnaise</p>
              </div>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Chili Cheese Fries</h3>
                <p className="text-sm text-muted-foreground">Served straight cut fries w/chili and Tostitos cheese</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Mozzarella Sticks</h3>
                <p className="text-sm text-muted-foreground">Includes: marinara sauce</p>
              </div>
              <span className="font-bold">$6.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Mac & Cheese Bites</h3>
                <p className="text-sm text-muted-foreground">Battered mac & cheese wedges w/Texas ranch sauce</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Onion Rings</h3>
                <p className="text-sm text-muted-foreground">With your choice of ketchup or Texas ranch sauce</p>
              </div>
              <span className="font-bold">$6.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Fried Pickle Chips</h3>
                <p className="text-sm text-muted-foreground">With your choice of ranch or Texas ranch sauce</p>
              </div>
              <span className="font-bold">$6.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Philly Steak & Cheese Egg Rolls</h3>
                <p className="text-sm text-muted-foreground">Hand rolled egg rolls w/Philly steak and American cheese</p>
              </div>
              <span className="font-bold">$9.00</span>
            </div>
          </div>
        </section>

        {/* Sandwiches and Pizza Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Sandwiches and Pizza</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">8" Cheese Pizza</h3>
                <p className="text-sm text-muted-foreground">Hand rolled and wood-fired. Add pepperoni or sausage $1.00</p>
              </div>
              <span className="font-bold">$8.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">12" Cheese Pizza</h3>
                <p className="text-sm text-muted-foreground">Hand rolled and wood-fired. Add pepperoni or sausage $1.50</p>
              </div>
              <span className="font-bold">$12.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Quesadilla</h3>
                <p className="text-sm text-muted-foreground">Cheddar & Monterey Jack cheeses</p>
              </div>
              <span className="font-bold">$7.50</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Chicken Quesadilla</h3>
                <p className="text-sm text-muted-foreground">Seasoned grilled fajita chicken</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Grilled Cheese</h3>
                <p className="text-sm text-muted-foreground">Texas toast sourdough bread buttered w/American cheese</p>
              </div>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Grilled Ham & Cheese</h3>
                <p className="text-sm text-muted-foreground">Texas toast sourdough bread buttered w/ham and American cheese</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Grilled Cheese & Bacon</h3>
                <p className="text-sm text-muted-foreground">Texas toast sourdough bread buttered w/American cheese and bacon</p>
              </div>
              <span className="font-bold">$7.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Hot Dog</h3>
                <p className="text-sm text-muted-foreground">West Creek 100% all beef frank grilled to perfection</p>
              </div>
              <span className="font-bold">$4.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Chili Cheese Dog</h3>
                <p className="text-sm text-muted-foreground">West Creek 100% all beef frank grilled w/chili and nacho cheese</p>
              </div>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Chicken Strip Basket</h3>
                <p className="text-sm text-muted-foreground">Breaded chicken strips w/fries & honey mustard, ranch or BBQ</p>
              </div>
              <span className="font-bold">$9.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Hamburger</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, mayo, ketchup and mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$10.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Cheeseburger</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, mayo, ketchup and mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$11.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Bacon Cheeseburger</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, mayo, ketchup and mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$12.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Grilled Chicken Sandwich</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, mayo, ketchup and mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$9.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Grilled Blackened Chicken Sandwich</h3>
                <p className="text-sm text-muted-foreground">Cajun seasoned breast topped w/pickle, honey mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$9.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Fried Chicken Sandwich</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, mayo, or honey mustard on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$9.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Fried Buffalo Chicken Sandwich</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped w/pickle, buffalo sauce, and blue cheese on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$10.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Fried Chicken Parmesan Sandwich</h3>
                <p className="text-sm text-muted-foreground">Fresh & topped with marinara sauce & provolone cheese on a Brioche bun, w/fries</p>
              </div>
              <span className="font-bold">$11.00</span>
            </div>
          </div>
        </section>

        {/* Drinks and Soda Section */}
        <section className="bg-background/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Drinks and Soda</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Sweet Tea</h3>
              </div>
              <span className="font-bold">$3.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Bottled Water</h3>
              </div>
              <span className="font-bold">$2.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Yoohoo Chocolate Milk</h3>
              </div>
              <span className="font-bold">$1.50</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Apple Juice</h3>
              </div>
              <span className="font-bold">$2.50</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Coffee</h3>
              </div>
              <span className="font-bold">$3.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Hot Chocolate</h3>
              </div>
              <span className="font-bold">$2.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">C4 Energy Drink</h3>
              </div>
              <span className="font-bold">$4.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Soda</h3>
                <p className="text-sm text-muted-foreground">Pepsi - Pepsi Zero - Root Beer - Lemonade - Dr. Pepper - Mt. Dew - Orange - Cherry</p>
              </div>
              <span className="font-bold">$3.00</span>
            </div>
            <div className="text-sm text-muted-foreground mt-4">
              (Refills on soda .50 - Tea 1.00)
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 