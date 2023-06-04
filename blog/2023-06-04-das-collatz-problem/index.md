---
slug: das-collatz-problem
title: Das Collatz-Problem
authors: [jtjarks]
date: 2023-06-04T23:00
tags: [Collatz-Problem]
---

Beim einem Besuch bei der Linux User Group in Bremen Anfang des Jahres,
lernte ich das Collatz-Problem - auch (3n+1)-Vermutung genannt - kennen.

Hierbei handelt es sich um ein mathematisches Problem, das 1937 vom
Mathematiker Lothar Collatz formuliert wurde. Collatz erdachte den folgenden
Bildungssatz:
- Beginne mit irgendeiner natürlichen Zahl, wo gilt n > 0
- Ist n gerade, so nimm als nächstes n / 2
- Ist n ungerade, so nimm als nächstes 3n + 1
- Wiederhole die Vorgehensweise mit der erhaltenen Zahl

Dessen dazugehoerige Vermutung lautet:
> Die Zahlenfolge mündet immer in den Zyklus 4, 2, 1, egal, mit welcher
positiven natürlichen Zahl man beginnt.

Trotz mehreren Aufrufen und mehreren Preisgeldern konnte bis zum Erscheinen
dieses Eintrages die Vermutung nicht bestaetigt werden.

Gerade aber wegen der einfachen Formulierung des Bildungssatzes, habe ich
mich entschlossen, auf Basis des Collatz-Problems tiefer in die Programmierung
mit Go einzusteigen.

Mein Ziel ist es, im ersten Schritt ein einfaches **CLI-Tool**
zu erstellen, welche die Vermutung fuer einzelne Inputs durchspielt.
Aufbauend darauf, soll die Anwendung in eine **Web-API** umprogrammiert
werden, welche als Daemon aktiv ist und auf Webanfragen reagiert.

Die Web-API kann dann spaeter erweitert werden, so dass ein **Monitoring** auf
Basis von openMetrics/Prometheus implementiert ist. Ebenso moechte ich mir bei
Moeglichkeit auch die Anbindung einer Redis an Go-Code anschauen. Die
Redis koennte als **temporaerer Cache** genutzt werden, um bereits berechnete
Inputs zwischenzuspeichern.

In Zukunft soll es zu einzelnen Zwischenstaenden Blog-Eintraege geben.
Der aktuelle Sourcecode kann auf Github unter
[JannoTjarks/collatz](https://github.com/JannoTjarks/collatz)
eingesehen werden.
