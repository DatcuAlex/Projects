#include "misiuni.h"
#include "rachete.h"

misiuni::misiuni()
{
    ID_r = nullptr;
    ID_a = nullptr;
    res = nullptr;
    cant_ext = 0;
    combustibil_cons = 0;
    cost_combustibil = 0;
    profit_brut = 0;
    profit_net = 0;
}

misiuni::~misiuni() { }

char* misiuni::getID_r() const { return ID_r; }
char* misiuni::getID_a() const { return ID_a; }
char* misiuni::getRes() const { return res; }
int misiuni::getCantExt() const { return cant_ext; }
int misiuni::getCombustibilCons() const { return combustibil_cons; }
int misiuni::getCostCombustibil() const { return cost_combustibil; }
int misiuni::getProfitBrut() const { return profit_brut; }
int misiuni::getProfitNet() const { return profit_net; }

void misiuni::setID_r(const char* ID_r)
{
    this->ID_r = new char[strlen(ID_r) + 1];
    strcpy(this->ID_r, ID_r);
}
void misiuni::setID_a(const char* ID_a)
{
    this->ID_a = new char[strlen(ID_a) + 1];
    strcpy(this->ID_a, ID_a);
}
void misiuni::setRes(const char* res)
{
    this->res = new char[strlen(res) + 1];
    strcpy(this->res, res);
}
void misiuni::setCantExt(const int& cant_ext) { this->cant_ext = cant_ext; }
void misiuni::setCombustibilCons(const int& combustibil_cons) { this->combustibil_cons = combustibil_cons; }
void misiuni::setCostCombustibil(const int& cost_combustibil) { this->cost_combustibil = cost_combustibil; }
void misiuni::setProfitBrut(const int& profit_brut) { this->profit_brut = profit_brut; }

void misiuni::setProfitNet(const int& profit_net) { this->profit_net = profit_net; }

