Installation
1.	Node.js muss intalliert sein. Verfügbar auf https://nodejs.org/en/download 
2.	Ein Quellcode-Editor wie z.b. Visual Studio Code installieren und öffnen
3.	Project über GitHub laden. Clone-Link (https://github.com/SogetiCTrageser/TAAufgabe.git)
4.	Den TAAufgabe-Ordner im Quellcode-Editor öffnen.
5.	Wenn nicht bereits automatisch geöffnet, bitte Terminal öffnen.(In VS Code: Terminal-New Terminal)
6.	npx playwright test SOmain.spec.ts in die Konsole eingeben und mit Enter bestätigen um den Test zu starten

Besonderheiten

Test Case 2
Da nur die „Produktion“ verfübar ist werden die Daten in Test Case 2 nicht durch den Submit button abgeschickt.
In Test Case 2 wird der Fokus separat gesetzt obwohl dies aufgrund den automatischen Fokus nicht nötig ist. Dies wurde aber in der Testfallspezifikation so gefordert deshalb der separate Fokus

Test Case 3
Playwright unterstützt paralleles Testen. Um diese Feature nutzen zu können wurden die for-Schleife um die test-Funktion gelegt. Wenn gewünscht wäre auch eine großer Testfall möglich in dem man die for-Schleife innerhalb des Test benutzt. Dann müsste aber der timeout für diesen Test mit der Zeile test.setTimeout(180_000); erhöht werden.





