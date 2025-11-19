#include "rachete.h"

Rachete::Rachete() 
{
    ID = nullptr;
    capacitate = 0;
    consum = 0;
    combustibil_disponibil = 0;
    pret_combustibil = 0.0;
}
Rachete::~Rachete() { }

char* Rachete::getID() const { return ID; }
int Rachete::getCapacitate() const { return capacitate; }
int Rachete::getConsum() const { return consum; }
int Rachete::getCombustibilDisponibil() const { return combustibil_disponibil; }

float Rachete::getPretCombustibil() const { return pret_combustibil; }

void Rachete::setID(const char* ID) 
{
    this->ID = new char[strlen(ID) + 1];
    strcpy(this->ID, ID);
}
void Rachete::setCapacitate(const int& capacitate) { this->capacitate = capacitate; }
void Rachete::setConsum(const int& consum) { this->consum = consum; }
void Rachete::setCombustibilDisponibil(const int& combustibil_disponibil) { this->combustibil_disponibil = combustibil_disponibil; }
void Rachete::setPretCombustibil(const float& pret_combustibil) { this->pret_combustibil = pret_combustibil; }

