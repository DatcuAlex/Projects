#ifndef CLIENT_H
#define CLIENT_H

#include "Comanda.h"

class Client {
private:
    char nume[60];
    Comanda comanda;

public:
    Client();
    Client(const char* nume, const Comanda comanda);
    Client(const Client& other);
    Client &operator=(const Client other);
    ~Client();

     char *getNume();
     Comanda& getComanda();

    friend std::ostream& operator<<(std::ostream& os, Client& client);
    friend std::istream& operator>>(std::istream& is, Client& client);
};

#endif
