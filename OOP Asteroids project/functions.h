#pragma once
#include <iostream>
#include <vector>
#include <fstream>
#include <map>
#include <sstream>
#include <algorithm>
#include "rachete.h"
#include "piata.h"
#include "asteroizi.h"
#include "misiuni.h"
using namespace std;

void citireAsteroizi(const string& Fisier, vector<Asteroizi>& asteroizi);
void citireRachete(const string& Fisier, vector<Rachete>& rachete);
void citirePiata(const string& Fisier, vector<Piata>& piata);
vector<misiuni> creazaMisiuni(const vector<Rachete>& rachete,const vector<Asteroizi>& asteroizi,const vector<Piata>& piata);
void scrieMisiuniCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni);
void scrieProfitTotalCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni);
void scrieClasamentRacheteCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni);
void scrieProfitPeResursaCSV(const string& numeFisier, const vector<misiuni>& listaMisiuni);