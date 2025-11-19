#include "functions.h"
#include "asteroizi.h"
#include "piata.h"
#include "rachete.h"
#include "misiuni.h"

int main(int argc, char* argv[] ) 
{    
    vector<Asteroizi> asteroizi;
    vector<Rachete> rachete;
    vector<Piata> piata;
    vector<misiuni> listaMisiuni;

    citireAsteroizi(argv[2], asteroizi);
    citireRachete(argv[1], rachete);
    citirePiata(argv[3], piata);

    listaMisiuni = creazaMisiuni(rachete, asteroizi, piata);

    scrieMisiuniCSV("misiuni.csv", listaMisiuni);
    scrieProfitTotalCSV("profit_total.csv", listaMisiuni);
    scrieClasamentRacheteCSV("clasament_rachete.csv", listaMisiuni);
    scrieProfitPeResursaCSV("profit_resursa.csv", listaMisiuni);

    return 0;
}
