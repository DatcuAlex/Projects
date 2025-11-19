#include <iostream>
#include "Produs.h"
#include "Client.h"
#include "Comanda.h"
#include "functii.h"
using namespace std;

int main(int argc, char* argv[]) {

    std::cout << argv[1] << std::endl;
    std::cout << argv[2] << std::endl;

    ifstream f1(argv[1]);
    ifstream f2(argv[2]);

    int x,y;
    if(!(f1>>x))
    {
        x=0;
    }
    if(!(f2>>y))
    {
        y=0;
    }
    Produs produse[x+1];
    Client clienti[y+1];
    
    f2.get();

    citesteProduse(f1, produse, x);
    citesteComenzi(f2, clienti, y);
    actualizare_stoc(produse, x, clienti, y);
    afisareInFisier(produse, x, clienti, y);

    f1.close();
    f2.close();
    return 0;
}