#pragma once
#include <iostream>
#include <cstring>


class Asteroizi{
    char* ID;
    char* resursa;
    int cantitate_totala;
    int randament;
    int distanta;
    
    public:

    Asteroizi();
    Asteroizi(const char* ID, const char* resursa, const int& cantitate_totala, const int& randament, const int& distanta);
    ~Asteroizi();

    char* getID() const;
    char* getResursa() const;
    int getCantitateTotala() const;
    int getRandament() const;
    int getDistanta() const;
    void setID(const char* ID);
    void setResursa(const char* resursa);
    void setCantitateTotala(const int& cantitate_totala);
    void setRandament(const int& randament);
    void setDistanta(const int& distanta);

};