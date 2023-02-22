function generateGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return (
        s4() +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        '-' +
        s4() +
        s4() +
        s4()
    );
}

function replaceIds(json) {
    console.log(json)
    // rekursive Funktion, die durch jedes Element der JSON iteriert
    function traverse(obj) {
      for (var key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          // wenn das Element ein Objekt ist, ruft die Funktion sich selbst rekursiv auf
          traverse(obj[key]);
        } else if (key === 'id') {
          // wenn das Element eine ID hat, wird sie durch eine GUID ersetzt
          obj[key] = generateGuid();
        }
      }
    }
    
    traverse(json); // ruft die traverse-Funktion mit der JSON als Argument auf
    return json; // gibt die geänderte JSON zurück
  }

init = (jsonText) => {
    try {
        // Parsen des JSON-Textes
        const jsonObj = JSON.parse(jsonText);
        console.log(jsonObj);

        replaceIds(jsonObj)

        // Ausgabe des bearbeiteten JSON-Textes
        console.log(JSON.stringify(jsonObj));
    } catch (error) {
        console.error("Fehler beim Parsen des JSON-Textes:", error);
    }
}

init('{"taskTitle":"Konjunktiv und Indirekte Rede","taskDescription":"Konjunktiv I","tasks":[{"id":"singleChoice","type":0,"title":"Ich wünschte, es _____ ab.","choices":[{"id":"guidv4","text":"nähme","rightChoice":true},{"id":"guidv4","text":"nehme","rightChoice":false},{"id":"guidv4","text":"nimmt","rightChoice":false}]},{"id":"singleChoice","type":0,"title":"Wenn ich etwas Ruhe hätte, _____ ich mein neues Buch.","choices":[{"id":"guidv4","text":"begönne","rightChoice":true},{"id":"guidv4","text":"beginn","rightChoice":false},{"id":"guidv4","text":"begann","rightChoice":false}]},{"id":"singleChoice","type":0,"title":"Er träumte, Sie _____ ein Meisterwerk.","choices":[{"id":"guidv4","text":"schüfen","rightChoice":true},{"id":"guidv4","text":"schafften","rightChoice":false},{"id":"guidv4","text":"schaffen","rightChoice":false}]},{"id":"singleChoice","type":0,"title":"Meine Katze ____ nie vor Hunden.","choices":[{"id":"guidv4","text":"flöhe","rightChoice":true},{"id":"guidv4","text":"fliehe","rightChoice":false},{"id":"guidv4","text":"fliehte","rightChoice":false}]},{"id":"singleChoice","type":0,"title":"Welche Verbform steht nicht im Konjunktiv 1?","choices":[{"id":"guidv4","text":"Du glaubest","rightChoice":false},{"id":"guidv4","text":"Er denke","rightChoice":false},{"id":"guidv4","text":"Sie findet","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Welche Verbform steht nicht im Konjunktiv 1?","choices":[{"id":"guidv4","text":"Ihr vertrauet","rightChoice":false},{"id":"guidv4","text":"Du schwimmest","rightChoice":false},{"id":"guidv4","text":"Er denkt","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Welche Verbform steht nicht im Konjunktiv 1?","choices":[{"id":"guidv4","text":"Er sei","rightChoice":false},{"id":"guidv4","text":"Wir seien","rightChoice":false},{"id":"guidv4","text":"Du bist","rightChoice":true}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":"Mark dachte, ihr {{1}} (sein) ein Team.","choices":[{"1":"seiet"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":"Es {{1}} (leben) die Revolution!","choices":[{"1":"lebe"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":["Meine Eltern sagen, ich {{1}} (sein) sehr begabt."],"choices":[{"1":"sei"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":["Mark glaubt, du {{1}} (sein) zuhause."],"choices":[{"1":"seist"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":["Peter und Osman glauben, wir {{1}} (sein) ein Paar."],"choices":[{"1":"seien"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":["Er befürchtete, er {{1}} (sein) durch die Prüfung gefallen."],"choices":[{"1":"sei"}]},{"id":"gabText","type":2,"title":"Setze die Verben im Konjunktiv 1 ein.","gaps":["Man {{1}} (nehmen) 2 Eier, 300g Mehl und 250g Zucker."],"choices":[{"1":"nehme"}]},{"id":"singleChoice","type":0,"title":"Er sei bereits unterwegs.","choices":[{"id":"guidv4","text":"Konjunktiv 2","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 1","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Wie wäre es mit einem Kuchen?","choices":[{"id":"guidv4","text":"Konjunktiv 1","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 2","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Wo kommen wir denn da hin? ","choices":[{"id":"guidv4","text":"Konjunktiv 1","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 2","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Der Regen würde sie beim Joggen nicht stören ","choices":[{"id":"guidv4","text":"Konjunktiv 1","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 2","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Hättest du dir im Unterricht bloß Notizen gemacht","choices":[{"id":"guidv4","text":"Konjunktiv 1","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 2","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Nun seien wir doch mal ehrlich.","choices":[{"id":"guidv4","text":"Konjunktiv 2","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 1","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Könntest du mir mit der Arbeit helfen?","choices":[{"id":"guidv4","text":"Konjunktiv 1","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 2","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Der Test sei sehr einfach gewesen","choices":[{"id":"guidv4","text":"Konjunktiv 2","rightChoice":false},{"id":"guidv4","text":"Konjunktiv 1","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Sie sagte, er mache sich zu viele Sorgen.","choices":[{"id":"guidv4","text":"Nein","rightChoice":false},{"id":"guidv4","text":"Ja","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Sie sagten, sie gehen morgen ins Kino","choices":[{"id":"guidv4","text":"Ja","rightChoice":false},{"id":"guidv4","text":"Nein","rightChoice":true}]},{"id":"gabText","type":2,"title":"Verwende die Ersatzform sodass die Verwendung des Konjunktivs eindeutig wird. ","gaps":"Sie sagten, sie {{1}} morgen ins Kino.","choices":[{"1":"ginge"}]},{"id":"singleChoice","type":0,"title":"Sie sagt, sie laufe jeden Morgen zur Arbeit.","choices":[{"id":"guidv4","text":"Nein","rightChoice":false},{"id":"guidv4","text":"Ja","rightChoice":true}]},{"id":"singleChoice","type":0,"title":"Sie sagten, sie kommen nicht zur Feier.","choices":[{"id":"guidv4","text":"Ja","rightChoice":false},{"id":"guidv4","text":"Nein","rightChoice":true}]},{"id":"gabText","type":2,"title":"Verwende die Ersatzform sodass die Verwendung des Konjunktivs eindeutig wird. ","gaps":"Sie sagte, sie {{1}} nicht zur Feier.","choices":[{"1":"kämen"}]},{"id":"gabText","type":2,"title":"Bilde einen Satz in der indirekten Rede, indem du die Ersatzform mit würde zur Hilfe nimmst.","gaps":"Klaus behauptet, seine Eltern {{1}}[büken] gerne Kuchen {{2}}[...].","choices":[{"1":"würden"},{"2":"backen"}]},{"id":"gabText","type":2,"title":"Bilde einen Satz in der indirekten Rede, indem du die Ersatzform mit würde zur Hilfe nimmst.","gaps":"Er sagte, Mia und Tobi {{1}}[empfählen] den Film nicht {{2}}[...].","choices":[{"1":"würden"},{"2":"weiterempfehlen"}]}]}')