#pragma once
#include <iostream>
using namespace std;

class misiuni{
    char *ID_r;
    char *ID_a;
    char *res;
    int cant_ext;
    int combustibil_cons;
    int cost_combustibil;
    int profit_brut;
    int profit_net;

    public:
    
    misiuni();
    ~misiuni();

    char* getID_r() const;
    char* getID_a() const;
    char* getRes() const;
    int getCantExt() const;
    int getCombustibilCons() const;
    int getCostCombustibil() const;
    int getProfitBrut() const;
    int getProfitNet() const;
    void setID_r(const char* ID_r);
    void setID_a(const char* ID_a);
    void setRes(const char* res);
    void setCantExt(const int& cant_ext);
    void setCombustibilCons(const int& combustibil_cons);
    void setCostCombustibil(const int& cost_combustibil);
    void setProfitBrut(const int& profit_brut);
    void setProfitNet(const int& profit_net);

};