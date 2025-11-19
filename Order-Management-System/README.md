
This project manages products, customers, and orders using OOP principles. Data is read from input files, processed to update stock and compute total order values, and written to output files in a formatted structure. The focus was to keep the code clean and modular by using multiple .cpp and .h files.

    For each class (Client, Comanda, Produs) I defined:

 -> a default constructor;
 -> constructors with parameters
 -> destructor;
 -> getter and setter functions;
 -> overloaded input/output operators (istream and ostream) to simplify reading/writing from/to files;
 -> assignment operator;

 I also created two additional files (functii.cpp and functii.h) in which I implemented the file input and output logic. I used the << and >> operators to keep the code cleaner.
 --> citesteProduse – reads all products from "produse.txt" into the Produs class
 --> citesteProduse – reads each individual order from "clienti.txt" into the Comanda class
 --> actualizare_stoc – updates the remaining stock after each order
 --> afisareInFisier – opens the 2 output files; first writes the remaining stock, then writes all placed orders and calculates the total price of each order

    This function caused the most issues at first because of extra spaces in some places.
After correcting that, I discovered some orders contained multiple products and the output file reversed their order
To fix it, I had to swap the second for loop with the third.