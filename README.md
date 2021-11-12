# How to install and run

1. Install NodeJS and yarn
1. Run the "yarn" command to install dependencies
1. After the installation is finished, run "yarn start" to run the project on port 3000

## Explanation

This project calculates the taxes based if a product is of an specific type (5%) or if it's imported (10%).
The taxes are accumulative, and the value increments and is stored everytime the receipt it calculated
To make the rounding to the nearest five cents, the following algorithm is used:

Example:

- The product's imported and it's retail price is 38,10
- There are two products being purchased (38,10 \* 2 = 76.20)
- Since the product is imported, the tax is 10% on the full sum (7.62)
- Retrieve the cents (62)
- Get how many cents it passed from the last fifth increment (62 % 5 = 2)
- Add the difference from that to 5 (5 - 2 = 3)
- Add that number to the cents value to round it to the next five cents. (62 + 3 = 0.65)
- The final tax is 7.65
- Add the new tax to the product's retail price ((38,10 + 7,65) \* 2 = 83,85)

The project use the ContextAPI to store the values.
There are two contexts:

- One for the ShopItems (before taxes)
- One for ReceiptItems which gets populated after the button press.

All styles and components were custom made using styled-components. The project is uses flexbox for positioning.
