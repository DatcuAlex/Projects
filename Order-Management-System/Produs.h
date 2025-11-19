#ifndef PRODUS_H
#define PRODUS_H

#include <iostream>
#include <cstring>

class Produs {
    const int id ;           // Cod unic al produsului
    char denumire[50];      // Denumirea produsului (șir de caractere)
    float pret;             // Prețul produsului
    int cantitate;          // Cantitatea pe stoc a produsului

public:
    Produs();
    Produs(const int id, const char* denumire, float pret, int cantitate);
    Produs(const Produs& other);
    Produs& operator=(const Produs& other);

    ~Produs();

    int getId() const;
    const char* getDenumire() const;
    float getPret() const;
    int getCantitate() const;
    
    void setDenumire(const char* denumireNoua);
    void setPret(float pretNou);
    void setCantitate(int cantitate_noua);

    friend std::ostream& operator<<(std::ostream& os, const Produs& produs);
    friend std::istream& operator>>(std::istream& is, Produs& produs);

};

#endif
