#include "Produs.h"
#include "Client.h"
#include <fstream>

void citesteProduse(std::ifstream& fisier, Produs produse[], int nrProduse) 
{
    int i;
    for(i=1;i<=nrProduse;i++)
        fisier>>produse[i];
    
    fisier.close();
}


void citesteComenzi(std::ifstream& fisier, Client clienti[], int nrClienti) 
{
    int i;
    for (i = 1; i <= nrClienti; i++)
        fisier >> clienti[i];

    fisier.close();    
}

void actualizare_stoc(Produs produse[], int nrProduse, Client clienti[], int nrClienti) 
{
    int i, j, k;
    for (i = 1; i <= nrClienti; i++) 
    {
        for (j = 1; j <= clienti[i].getComanda().getNrProduse(); j++) 
        {
            for (k = 1; k <= nrProduse; k++) 
            {
                if (strcmp(clienti[i].getComanda().getProduse()[j].getDenumire(), produse[k].getDenumire()) == 0) 
                {
                    produse[k].setCantitate(produse[k].getCantitate() - clienti[i].getComanda().getProduse()[j].getCantitate());
                }
            }
        }
    }
}

void afisareInFisier(Produs produse[], int nrProduse, Client clienti[], int nrClienti) 
{
    std::ofstream f3("output_stoc_ramas.txt");
    std::ofstream f4("output_comenzi.txt");

    f3<<"Stoc ramas"<<endl;

    for (int i = 1; i <= nrProduse; i++) 
    {
        f3 << i-1 << ". " << produse[i].getDenumire() << ": " << produse[i].getCantitate()
           << ", Pret: " << produse[i].getPret() << "\n";
    }
    f3.close();
    if(nrClienti==0)
    {   
        f4<<"Nu exista clienti in magazin.";
    }
    else
    for (int i = 1; i <= nrClienti; i++) 
    {
        f4 << "Nume: " << clienti[i].getNume() << "\n";
        f4 << "Comanda ID: " << i-1 << "\n";
        f4 << "Data comenzii: " << clienti[i].getComanda().getZi() << "/" << clienti[i].getComanda().getLuna() << "/" << clienti[i].getComanda().getAn() << endl;
        f4 << "Produse comandate:\n";

        float totalComanda = 0;

        for(int k=1;k<=clienti[i].getComanda().getNrProduse();k++)
        {
            for (int j = 1; j <= nrProduse; j++) 
            { 
                if(strcmp(clienti[i].getComanda().getProduse()[k].getDenumire(),produse[j].getDenumire())==0)
                { 
                    float costTotalProdus = produse[j].getPret() * clienti[i].getComanda().getProduse()[k].getCantitate();
                    totalComanda += costTotalProdus;
                    f4 << clienti[i].getComanda().getProduse()[k].getCantitate() << " X " << clienti[i].getComanda().getProduse()[k].getDenumire() << " (" << produse[j].getPret() << ")"<<endl;
                }
            
            }     
        }
        if(i!=nrClienti) 
            f4 << "Total comanda: " << totalComanda << " RON"<<endl<<endl;
        else 
            f4 << "Total comanda: " << totalComanda << " RON";
    }
    
    f4.close();


}