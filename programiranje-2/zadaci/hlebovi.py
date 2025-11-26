
broj = int(input())
kombinacije = []

for broj_muskaraca in range(0, broj // 3 + 1):
    broj_zena = broj - 3 * broj_muskaraca
    broj_dece = 2 * broj_muskaraca
    if broj_zena < 0:
        continue
    if broj_muskaraca + broj_zena + broj_dece != broj:
        continue
    kombinacije.append((broj_muskaraca, broj_zena, broj_dece))

print(len(kombinacije))
if kombinacije:
    print("Kombinacije (m, z, d):")
    for m, z, d in kombinacije:
        print(f"[{m}, {z}, {d}]")
else:
    print("Kombinacije (m, z, d): nema resenja")

