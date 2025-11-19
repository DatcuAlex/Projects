#include "Produs.h"
using namespace std;


Produs::Produs(): id(0),cantitate(0), pret(0), denumire("") {}

Produs::Produs(int id, const char* denumire, float pret, int cantitate) : id(id)
{
    strcpy(this->denumire, denumire);
    this->pret = pret;
    this->cantitate = cantitate;
}

Produs::Produs(const Produs& other) : id(other.id) {  
    strcpy(this->denumire, other.denumire);
    this->pret = other.pret;
    this->cantitate = other.cantitate;
}

Produs& Produs::operator=(const Produs& other) {
    if (this != &other) {
        strcpy(denumire, other.denumire);
        pret = other.pret;
        cantitate = other.cantitate;
    }
    return *this;
}

Produs::~Produs()
{

}

int Produs::getId() const 
{
    return id;
}
const char* Produs::getDenumire() const{
    return denumire;
}
float Produs::getPret() const
{
    return pret;
}
int Produs::getCantitate() const
{
    return cantitate;
}

void Produs::setDenumire(const char* denumire_noua)
{
    strcpy(this->denumire,denumire_noua);
}

void Produs::setPret(float pret_nou)
{
    this->pret = pret;
} 

void Produs::setCantitate(int cantitate_noua)
{
    this->cantitate = cantitate_noua;
}

std::ostream& operator<<(std::ostream& os, const Produs& produs)
{
    os << produs.denumire << produs.pret << produs.cantitate;
    return os;
}

std::istream& operator>>(std::istream& is, Produs& produs) 
{
    is >> produs.denumire >> produs.pret >> produs.cantitate;
    return is;
}

