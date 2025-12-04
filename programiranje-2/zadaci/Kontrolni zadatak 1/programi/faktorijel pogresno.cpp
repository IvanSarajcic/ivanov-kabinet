// Грешка погрешног избора типа (Overflow)
// Ова грешка настаје када изабрани тип података не може да прими резултат операције.

// Пример: Рачунање факторијела.
// Погрешно: int може да сачува вредности само до око 2*10^9.
// Факторијел броја 13 је већ 6,227,020,800 што превазилази int.

#include <iostream>
using namespace std;

int faktorijel(int n) {
    int f = 1;
    for (int i = 1; i <= n; i++)
        f *= i;
    return f;
}

int main() {
    int n;
    cout << "Unesite broj: ";
    cin >> n;
    
    int rezultat = faktorijel(n);
    cout << "Faktorijel(" << n << ") = " << rezultat << endl;
    
    // Probajte sa n=13 ili vecim brojem da vidite overflow
    return 0;
}