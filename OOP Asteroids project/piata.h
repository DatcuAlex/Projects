#pragma once
#include <iostream>
using namespace std;

class Piata{
    char* resursa;
    int pret_minim;
    int pret_maxim;

    public:

        Piata();
        Piata(char* resursa, int pret_minim, int pret_maxim);
        ~Piata();

        char* getResursa() const;
        int getPretMinim() const;
        int getPretMaxim() const;
        void setResursa(const char* resursa);
        void setPretMinim(const int& pret_minim);
        void setPretMaxim(const int& pret_maxim);

};