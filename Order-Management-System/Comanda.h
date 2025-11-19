#ifndef COMANDA_H
#define COMANDA_H

#include "Produs.h"
using namespace std;

class Comanda {
protected:
    int id;
    int zi, luna, an;             // Data comenzii
    int nrProduse;                // Numarul total de produse din comanda
    Produs* produse;              // Vector alocat dinamic pentru produsele din comanda

public:

    Comanda();

    ~Comanda();

    int getId() const;
    int getZi() const;
    int getLuna() const;
    int getAn() const;
    int getNrProduse() const;
    Produs* getProduse() const;  


friend ostream& operator<<(ostream& os, Comanda& comanda);
friend istream& operator>>(istream& is, Comanda& comanda);
};

#endif
