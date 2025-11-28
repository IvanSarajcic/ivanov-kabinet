#include <iostream>
using namespace std;

// input duzina (d), sirina (s) i rastojanje od tertena do ograde (r)

int main() {
    int d, s, r;
    
    cout << "Unesite duzinu terena (90-120): ";
    cin >> d;
    cout << "Unesite sirinu terena (45-90): ";
    cin >> s;
    cout << "Unesite rastojanje do ograde (2-10): ";
    cin >> r;

    // check if in valid range:
    // 90 <= d <= 120
    // 45 <= s <= 90
    // 2 <= r <= 10

    // check and output if not in range
    if (d < 90 || d > 120 || s < 45 || s > 90 || r < 2 || r > 10) {
        cout << "Nevalidni ulazni podaci" << endl;
        return 0;
    }

    // duzina ograde
    int duzina_ograde = 2 * (d + 2 * r) + 2 * (s + 2 * r);

    // Ispis povrsine
    cout << duzina_ograde << endl;

    return 0;
}