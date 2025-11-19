#include "Client.h"
#include <iostream>
#include <cstring>

using namespace std;

Client::Client() : comanda() {
    strcpy(this->nume, "nu exista comanda");
}

Client::Client(const char* nume, const Comanda comanda) : comanda(comanda) {
    strcpy(this->nume, nume);
}

Client::Client(const Client& other) : comanda(other.comanda) {
    strcpy(this->nume, other.nume);
}

Client& Client::operator=( Client other) 
{
    if (this == &other) 
    {
        return *this;
    }

    strcpy(this->nume, other.nume);
    comanda = other.comanda;

    return *this;
}

Client::~Client() 
{
    
}

char* Client::getNume() 
{
    return nume;
}

Comanda& Client::getComanda()
{
    return comanda;
}

ostream& operator<<(ostream& os, Client& client) 
{
    os << client.nume << endl;
    os << client.comanda <<endl;
    
    return os;
}

istream& operator>>(istream& is, Client& client) 
{
    is.get(); 
    is.getline(client.nume, 300);
    is >> client.comanda;
    return is;
}
