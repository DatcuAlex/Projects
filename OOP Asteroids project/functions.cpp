#include "functions.h"

void citireAsteroizi(const string& Fisier, vector<Asteroizi>& asteroizi) 
{
    ifstream fisier(Fisier);
    string linie;
    getline(fisier, linie);

    while (getline(fisier, linie)) 
    {
        string ID, res, cant_tot, randament, dist;
        size_t pos = 0;
        pos = linie.find(';'); ID = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); res = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); cant_tot = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); randament = linie.substr(0, pos); linie.erase(0, pos + 1);
        dist = linie;

        Asteroizi asteroid;
        asteroid.setID(ID.c_str());
        asteroid.setResursa(res.c_str());
        asteroid.setCantitateTotala(stoi(cant_tot));
        asteroid.setRandament(stoi(randament));
        asteroid.setDistanta(stoi(dist));

        asteroizi.push_back(asteroid);
    }
}

void citireRachete(const string& Fisier, vector<Rachete>& rachete) 
{
    ifstream fisier(Fisier);
    string linie;
    getline(fisier, linie);

    while (getline(fisier, linie)) 
    {
        string ID, cap, consum, c_disp, pret_c;
        size_t pos = 0;
        pos = linie.find(';'); ID = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); cap = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); consum = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); c_disp = linie.substr(0, pos); linie.erase(0, pos + 1);
        pret_c = linie;

        Rachete racheta;
        racheta.setID(ID.c_str());
        racheta.setCapacitate(stoi(cap));
        racheta.setConsum(stoi(consum));
        racheta.setCombustibilDisponibil(stoi(c_disp));
        racheta.setPretCombustibil(stof(pret_c));

        rachete.push_back(racheta);
    }
}

void citirePiata(const string& Fisier, vector<Piata>& piata) 
{
    ifstream fisier(Fisier);
    string linie;
    getline(fisier, linie);

    while (getline(fisier, linie)) 
    {
        string res, p_min, p_max;

        size_t pos = 0;
        pos = linie.find(';'); res = linie.substr(0, pos); linie.erase(0, pos + 1);
        pos = linie.find(';'); p_min = linie.substr(0, pos); linie.erase(0, pos + 1);
        p_max = linie;

        Piata piata_noua;
        piata_noua.setResursa(res.c_str());
        piata_noua.setPretMinim(stoi(p_min));
        piata_noua.setPretMaxim(stoi(p_max));

        piata.push_back(piata_noua);
    }
}

vector<misiuni> creazaMisiuni(const vector<Rachete>& rachete,
                              const vector<Asteroizi>& asteroizi,
                              const vector<Piata>& piata) 
{
    vector<misiuni> misiuni_list;

    for (const auto& a : asteroizi) 
    {
        double cantitate_extrasa_totala = 0;
        double cost_total_combustibil = 0;
        double profit_total_brut = 0;
        double profit_total_net = 0;
        string resurse_extrase = "";

        const Rachete* ceaMaiEficientaRacheta = nullptr;
        double celMaiMareProfitNet = -1;

        for (const auto& r : rachete) 
        {
            double distanta_totala = 2 * a.getDistanta();
            double consum_total_combustibil = (distanta_totala / 1000.0) * r.getConsum();

            if (consum_total_combustibil > r.getCombustibilDisponibil()) 
            {
                continue;
            }

            double cantitate_extrasa = a.getCantitateTotala() * (a.getRandament() / 100.0);
            double cantitate_transportata = min(static_cast<int>(cantitate_extrasa), r.getCapacitate());
            double cost_combustibil = consum_total_combustibil * r.getPretCombustibil();

            double pret_vanzare = 0;
            for (const auto& p : piata) 
            {
                if (strcmp(p.getResursa(), a.getResursa()) == 0) 
                {
                    pret_vanzare = p.getPretMaxim();
                    break;
                }
            }

            if (pret_vanzare == 0) 
            {
                continue;
            }

            double venit = cantitate_transportata * pret_vanzare;
            double profit_net = venit - cost_combustibil;

            if (profit_net > celMaiMareProfitNet) 
            {
                ceaMaiEficientaRacheta = &r;
                celMaiMareProfitNet = profit_net;
                cantitate_extrasa_totala = cantitate_transportata;
                cost_total_combustibil = cost_combustibil;
                profit_total_brut = venit;
                profit_total_net = profit_net;
                resurse_extrase = a.getResursa();
            }
        }

        if (ceaMaiEficientaRacheta) 
        {
            const Rachete& r = *ceaMaiEficientaRacheta;

            misiuni m;
            m.setID_r(r.getID());
            m.setID_a(a.getID());
            m.setRes(const_cast<char*>(resurse_extrase.c_str()));
            m.setCantExt(cantitate_extrasa_totala);
            m.setCombustibilCons(cost_total_combustibil);
            m.setCostCombustibil(cost_total_combustibil);
            m.setProfitBrut(profit_total_brut);
            m.setProfitNet(profit_total_net);

            misiuni_list.push_back(m);
        }
    }

    return misiuni_list;
}

void scrieMisiuniCSV(const std::string& numeFisier, const std::vector<misiuni>& listaMisiuni) 
{
    std::ofstream fisier(numeFisier);

    fisier << "ID Rachetă;ID Asteroid;Resursă;Cantitate extrasă (kg);Combustibil consumat (kg);Cost combustibil ($);Profit brut ($);Profit net ($)\n";
    for (const auto& m : listaMisiuni) 
    {    
        fisier << m.getID_r() << ';'
               << m.getID_a() << ';'
               << m.getRes() << ';'
               << m.getCantExt() << ';'
               << m.getCombustibilCons() << ';'
               << m.getCostCombustibil() << ';'
               << m.getProfitBrut() << ';'
               << m.getProfitNet() << '\n';
    }
    fisier.close();
}

void scrieProfitTotalCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni) 
{
    ofstream fisier(numeFisier);


    fisier << "ID Rachetă;Profit brut ($);Cost total combustibil ($);Profit net ($)\n";

    vector<string> racheteProcesate;

    for (const auto& m : listaMisiuni) 
    {
        string ID_r = m.getID_r();

        if (find(racheteProcesate.begin(), racheteProcesate.end(), ID_r) != racheteProcesate.end()) 
        {
            continue;
        }

        racheteProcesate.push_back(ID_r);

        int profit_total = 0;
        int cost_combustibil = 0;

        for (const auto& m2 : listaMisiuni) 
        {
            if (m2.getID_r() == ID_r) 
            {
                profit_total += m2.getProfitNet();
                cost_combustibil += m2.getCostCombustibil();
            }
        }

        fisier << ID_r << ';'
               << profit_total << ';'
               << cost_combustibil << ';'
               << profit_total - cost_combustibil << '\n';
    }

    fisier.close();
}

void scrieClasamentRacheteCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni) 
{
    ofstream fisier(numeFisier);

    vector<string> idRachete;
    vector<double> profituriNet;
    vector<int> numarMisiuni;

    for (const auto& m : listaMisiuni) 
    {
        string idRacheta = m.getID_r();
        auto it = find(idRachete.begin(), idRachete.end(), idRacheta);

        if (it == idRachete.end()) 
        {
            idRachete.push_back(idRacheta);
            profituriNet.push_back(m.getProfitNet());
            numarMisiuni.push_back(1);
        } 
        else 
        {
            int index = distance(idRachete.begin(), it);
            profituriNet[index] += m.getProfitNet();
            numarMisiuni[index] += 1;
        }
    }

    vector<int> ordine(idRachete.size());
    for (int i = 0; i < idRachete.size(); ++i) 
    {
        ordine[i] = i;
    }

    sort(ordine.begin(), ordine.end(), [&](int a, int b) 
    {
        return profituriNet[a] > profituriNet[b];
    });

    fisier << "Loc;ID Rachetă;Profit net ($);Număr misiuni;Scor eficiență\n";

    for (int i = 0; i < ordine.size(); ++i) 
    {
        int index = ordine[i];
        double scorEficienta = numarMisiuni[index] > 0 ? profituriNet[index] / numarMisiuni[index] : 0;

        fisier << i + 1 << ';'
               << idRachete[index] << ';'
               << profituriNet[index] << ';'
               << numarMisiuni[index] << ';'
               << scorEficienta
               << '\n';
    }

    fisier.close();
}
void scrieProfitPeResursaCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni) 
{
    ofstream fisier(numeFisier);

    fisier << "Resursă;Cantitate extrasă (kg);Profit brut ($)\n";

    for (int i = 0; i < listaMisiuni.size(); ++i) 
    {
        string resursaCurenta = listaMisiuni[i].getRes();

        bool resursaProcesata = false;
        for (int j = 0; j < i; ++j) {
            if (listaMisiuni[j].getRes() == resursaCurenta) 
            {
                resursaProcesata = true;
                break;
            }
        }
        if (resursaProcesata) 
        {
            continue;
        }
        double cantitateExtrasa = 0;
        double profitBrut = 0;

        for (const auto& m : listaMisiuni) 
        {
            if (m.getRes() == resursaCurenta) 
            {
                cantitateExtrasa += m.getCantExt();
                profitBrut += m.getProfitBrut();
            }
        }

        fisier << resursaCurenta << ';' << cantitateExtrasa << ';' << profitBrut << '\n';
    }

    fisier.close();
}



