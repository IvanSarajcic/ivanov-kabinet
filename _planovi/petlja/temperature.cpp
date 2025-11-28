#include <iostream>
using namespace std;

int main () {
    int t1, t2, t3, t4;

    cin >> t1 >> t2 >> t3 >> t4;

    // two decimals
    double prosecna_temperatura = (t1 + t2 + t3 + t4) / 4.0;
    
    // set prosecna_temperatura should display with two decimals
    cout.setf(ios::fixed);
    cout.precision(2);
    cout << prosecna_temperatura << endl;

    // count how many days temperature was below average
    int count = 0;
    if (t1 < prosecna_temperatura) count++;
    if (t2 < prosecna_temperatura) count++;
    if (t3 < prosecna_temperatura) count++;
    if (t4 < prosecna_temperatura) count++;
    cout << count << endl;
    
    return 0;
}