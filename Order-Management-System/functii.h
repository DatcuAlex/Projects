#ifndef FUNCTII_H
#define FUNCTII_H

#include "Produs.h"
#include "Client.h"
#include <fstream>

void citesteProduse(std::ifstream& fisier, Produs produse[], int nrProduse);
void citesteComenzi(std::ifstream& fisier, Client clienti[], int nrClienti);
void actualizare_stoc(Produs produse[], int nrProduse, Client clienti[], int nrClienti);
void afisareInFisier(Produs produse[], int nrProduse, Client clienti[], int nrClienti);

#endif

