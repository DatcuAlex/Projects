#include "piata.h"
#include <iostream>
#include <cstring>
using namespace std;

Piata::Piata(){
    resursa = new char[strlen("Necunoscut") + 1];
    strcpy(resursa, "Necunoscut");
    pret_minim = 0;
    pret_maxim = 0;
}
Piata::~Piata(){ }
char* Piata::getResursa() const{ return resursa; }
int Piata::getPretMinim() const{ return pret_minim; }
int Piata::getPretMaxim() const{ return pret_maxim; }
void Piata::setResursa(const char* resursa)
{
    this->resursa = new char[strlen(resursa) + 1];
    strcpy(this->resursa, resursa);
}
void Piata::setPretMinim(const int& pret_minim){ this->pret_minim = pret_minim; }
void Piata::setPretMaxim(const int& pret_maxim){ this->pret_maxim = pret_maxim; }

