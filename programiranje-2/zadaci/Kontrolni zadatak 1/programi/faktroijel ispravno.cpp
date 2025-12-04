// Грешка погрешног избора типа (Overflow) - ИСПРАВНА ВЕРЗИЈА
// Користити long long за веће бројеве

// Факторијел броја 13 је већ 6,227,020,800
// long long може да сачува вредности до око 9*10^18

long long faktorijel_ispravno(int n) {
    long long f = 1;
    for (int i = 1; i <= n; i++)
        f *= i;
    return f;
}