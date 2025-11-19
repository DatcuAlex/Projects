#include "Comanda.h"

Comanda::Comanda()
{
    this->id = 0;
    this->zi = 0;
    this->luna = 0;
    this->an = 0;
    this->nrProduse = 0;
    this->produse = nullptr;

}

Comanda::~Comanda()
{
    delete[] produse;
}

int Comanda::getId() const 
{ 
    return this->id; 
}

int Comanda::getZi() const 
{ 
    return this->zi; 
}

int Comanda::getLuna() const 
{ 
    return this->luna; 
}

int Comanda::getAn() const 
{ 
    return this->an; 
}

int Comanda::getNrProduse() const 
{ 
    return this->nrProduse; 
}

Produs* Comanda::getProduse() const
{
    return this->produse;
}

ostream& operator<<(ostream& os,Comanda& comanda) 
{
    os << comanda.zi << "/" << comanda.luna << "/" << comanda.an << endl << comanda.nrProduse << endl;
    for (int i = 1; i <= comanda.nrProduse; i++) 
    {
        os << comanda.produse[i]<<endl;
    }

    return os;
}


istream& operator>>(istream& is, Comanda& comanda) {
    is>>comanda.zi >> comanda.luna >> comanda.an>> comanda.nrProduse;
    is.get();
    comanda.produse = new Produs[comanda.nrProduse+1];
    char p[300];
    int q;
    for (int i = 1; i <= comanda.nrProduse; i++) {
        is>>p>>q;
        comanda.produse[i].setDenumire(p); 
        comanda.produse[i].setCantitate(q);
        is.get();
    }
    return is;
}







