# Schulte-table-game

DaFED JS Kurs - Završni projekat

Tema

Schultove tablice. Prestavljaju nasumično raspoređene brojeve u N x N tabeli. Koriste se za poboljšanje perifernog vida, vizuelne percepcije i fokusa. Najčešći oblik je 5x5.

Primer tablice:

schulte table

Pravila za kreiranje i rešavanje tablica, merenje uspešnosti

Tablice se rešavaju tako što se pogled fokusira u sredinu tablice. Traže se brojevi redom od 1 do 25 (ukoliko je 5x5) ne pomerajući pogled sa sredine. U našem slučaju će trebati da se kliknu brojevi, u papirnoj verziji samo se markiraju prstom ili nekim pomagalom.

Čim se generiše tablica i krene sa rešavanjem (a ne klikom na 1) trebalo bi da krene i tajmer koji meri proteklo vreme. Tajmer se zaustavlja kada se stigne do poslednjeg broja u tablici i klikne na njega.

Dobrim rezultatom se smatra ukoliko je tablica rešena za manje od N x N sekundi, znači ako je tablica 5x5 onda je 25s gornji prihvatljiv limit. Što kraće vreme to bolje.

Minimalan skup funkcionalnosti za završni projekat

Interfejs (prikaz tablice),
Generisanje tablice 5x5,
Dugme za generisanje nove tablice i pokretanje tajmera,
Tajmer koji radi prema opisanoj logici, zaustavlja se kad se klikne na poslednji broj,
Pravilna logika za rešavanje tablice
Sve se to može uraditi pomoću čistog JS i DOM API-ja. A možete koristiti šta god vam zgodno. Takođe, izgled interfejsa prepuštam vama i vašoj kreativnosti.

Moguće nadogradnje

Mogućnost podešavanja interfejsa (veličina brojeva, veličina polja, izbor boje - pozadine, brojeva, polja...),
Mogućnost podešavanja težine igre (easy - kliknuta polja nestaju ili bivaju obojena drugom bojom, normal - kliknuta polja se disable-uju, hard - polja vizuelno ostaju ista, reverse - traže se brojevi od 25 do 1),
Mogućnost zadavanja dimenzije tablice (recimo "6", što znači da treba izgenerisati tablicu sa 36 polja),
Pravljenje kompletne web aplikacije sa podrškom za:
Korisničke naloge,
Pamćenje rezultata rešavanja u bazi za svakog korisnika respektivno,
Prikaz statistike za prethodne rezultate korisnika ili poređenje sa rezultatima drugih ljudi,
Gamification - Dodeljivanje poena, zvezdica... spram uspešnosti,
Leader board - Najuspešniji takmičari...
Itd...
Primer tablica

http://schulte-table.com/
