#include "asteroizi.h"
using namespace std;

Asteroizi::Asteroizi() 
{
    ID = new char[strlen("Necunoscut") + 1];
    strcpy(ID, "Necunoscut");
    resursa = new char[strlen("Necunoscut") + 1];
    strcpy(resursa, "Necunoscut");
    cantitate_totala = 0;
    randament = 0;
    distanta = 0;
}
Asteroizi::Asteroizi(const char* ID, const char* resursa, const int& cantitate_totala, const int& randament, const int& distanta) 
{
    this->ID = new char[strlen(ID) + 1];
    strcpy(this->ID, ID);
    this->resursa = new char[strlen(resursa) + 1];
    strcpy(this->resursa, resursa);
    this->cantitate_totala = cantitate_totala;
    this->randament = randament;
    this->distanta = distanta;
}
Asteroizi::~Asteroizi() { }
char* Asteroizi::getID() const { return ID; }
char* Asteroizi::getResursa() const { return resursa; }
int Asteroizi::getCantitateTotala() const { return cantitate_totala; }
int Asteroizi::getRandament() const { return randament; }
int Asteroizi::getDistanta() const { return distanta; }

void Asteroizi::setID(const char* ID) 
{
    this->ID = new char[strlen(ID) + 1];
    strcpy(this->ID, ID);
}
void Asteroizi::setResursa(const char* resursa) 
{
    delete[] this->resursa;
    this->resursa = new char[strlen(resursa) + 1];
    strcpy(this->resursa, resursa);
}
void Asteroizi::setCantitateTotala(const int& cantitate_totala) { this->cantitate_totala = cantitate_totala; }
void Asteroizi::setRandament(const int& randament) { this->randament = randament; }
void Asteroizi::setDistanta(const int& distanta) { this->distanta = distanta; }


