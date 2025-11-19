#pragma once
#include <iostream>
#include <cstring>

class Rachete{
    char* ID;
    int capacitate;
    int consum;
    int combustibil_disponibil;
    float pret_combustibil;
    
    public:

    Rachete();
    ~Rachete();

    char* getID() const;
    int getCapacitate() const;
    int getConsum() const;
    int getCombustibilDisponibil() const;
    float getPretCombustibil() const;
    void setID(const char* ID);
    void setCapacitate(const int& capacitate);
    void setConsum(const int& consum);
    void setCombustibilDisponibil(const int& combustibil_disponibil);
    void setPretCombustibil(const float& pret_combustibil);

};