---
marp: true
theme: default
class: invert
style: |
  section {
    background: #1a1a1a;
    color: #ffffff;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #4fc3f7;
  }
  code {
    background: #2d2d2d;
    color: #f8f8f2;
  }
  pre {
    background: #2d2d2d;
    border: 1px solid #555;
  }
  table {
    color: #ffffff;
  }
  th {
    background: #333333;
  }
  blockquote {
    border-left: 4px solid #4fc3f7;
    background: #2a2a2a;
  }
  
  section {
   position: relative;
  }

  html section .image-container {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 100%;
  }
  .image-container img {
    max-height: 310px;
    width: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  section > * {
    width: 65%;
  }

  section > div  {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  section > p > em {
   opacity: 0.17;
  }
---

# Процедурална и објектно-оријентисана парадигма

**Програмске парадигме - Час 3**

<div class="image-container">
  <img style="width: 500px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--oh_3zXvF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcg0i90x4dqzm2mwqhwn.jpg" alt="Procedural vs OOP"/>
</div>

---

## 🤔 Мотивациона питања

- **Које програмске језике сте до сада користили?**
- **Да ли сте приметили разлике између C-ја и Java-е?**  
- **Шта чини Java програм "другачијим" од C програма?**

<div class="image-container">
<img src="https://miro.medium.com/v2/resize:fit:1400/1*Vs7Zb38D7jGIyONhOkSDPQ.png" 
alt="C vs Java comparison">
</div>

*[Дискусија са ученицима о њиховом искуству]*

---

## ⚙️ Процедурална парадигма

**Процедурална парадигма** је проширење императивне парадигме:

- Програм као **скуп процедура/функција**
- Свака процедура решава **одређени подпроблем**  
- **Подаци и функције су одвојени**
- Програм се извршава **позивима функција**

<div class="image-container">
<img style="width:400px;" src="https://media.geeksforgeeks.org/wp-content/uploads/20230314110825/Untitled-design-(21).png" 
alt="procedural programming concept">
</div>

---

## 🔧 Карактеристике процедуралне парадигме

**Основне карактеристике:**

1. **📦 Подела на функције** - "divide and conquer"
2. **🌐 Глобални подаци** - доступни свим функцијама
3. **🏠 Локални подаци** - видљиви само у функцији  
4. **📤 Параметри функција** - комуникација
5. **🏗️ Хијерархијска структура** - main → остале функције

<div class="image-container">
<img style="width:400px;" src="https://www.tutorialspoint.com/computer_programming/images/programming_paradigms.jpg" 
alt="procedural programming structure">
</div>

---

## 💻 Процедурални пример - Управљање оценама

<h6>C програмски језик</h6>

```c
// Глобалне променљиве
int brojStudenata = 0;
float ocene[100];

// Процедуре/функције
void unesiOcenu(float ocena) {
    ocene[brojStudenata] = ocena;
    brojStudenata++;
}

float izracunajProsek() {
    float suma = 0;
    for(int i = 0; i < brojStudenata; i++) {
        suma += ocene[i];
    }
    return suma / brojStudenata;
}

int main() {
    unesiOcenu(8.5);
    unesiOcenu(9.0);
    printf("Prosek: %.2f", izracunajProsek());
    return 0;
}
```

---

## ✅❌ Процедурална парадигма - Предности и недостаци

**Предности:**
- ✅ **Једноставност** - лако за разумевање
- ✅ **Модуларност** - подела на функције
- ✅ **Поновна употреба** - исте функције више пута
- ✅ **Дебагирање** - лакше налажење грешака

**Проблеми:**
- ❌ **Глобални подаци** - могу се случајно изменити
- ❌ **Слаба енкапсулација** - подаци нису заштићени
- ❌ **Сложеност** - тешко управљање великих програма
- ❌ **Зависности** - промене утичу на многе функције

---

## 🏛️ Објектно-оријентисана парадигма

**ОО парадигма** је приступ где се:

- Програм моделује као **скуп објеката**
- Објекти **комуницирају слањем порука**
- **Подаци и методе су заједно** у класама
- Фокус на **"ко ради шта"** уместо "како се ради"

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*GS8Nqe5l4SkqE5ZpSo_xwQ.png" 
alt="object oriented programming concept">
</div>

---

## 📦 Класа и објекат

**Основни концепти:**

- **🏗️ Класа** = шаблон/нацрт за стварање објеката
- **🎯 Објекат** = конкретна инстанца класе
- **📊 Атрибути** = подаци објекта (својства)
- **⚡ Методе** = функције објекта (понашање)

<div class="image-container">
<img style="width:400px;" src="https://media.geeksforgeeks.org/wp-content/uploads/Classes-and-Objects-in-Java.png" 
alt="class and object concept">
</div>

---

## 🔒 Енкапсулација

**Скривање детаља имплементације:**

- **🔐 Контролисан приступ** подацима
- **🌐 Јавни интерфејс** vs **🔒 приватна имплементација**
- **🛡️ Заштита података** од случајних промена

<div class="image-container">
<img style="width:400px;" src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/10/Encapsulation.png" 
alt="encapsulation concept">
</div>

---

## 🧬 Наслеђивање

**Стварање нових класа на основу постојећих:**

- **👨‍👩‍👧‍👦 Наследи атрибуте и методе** родитељске класе
- **🔧 Прошири или измени** понашање
- **♻️ Поновна употреба кода**

<div class="image-container">
<img style="width:400px;" src="https://media.geeksforgeeks.org/wp-content/uploads/20200911171738/InheritanceInJava.png" 
alt="inheritance concept">
</div>

---

## 🎭 Полиморфизам

**Исти интерфејс - различито понашање:**

- **🔄 Различити објекти** реагују различито на исту поруку
- **🎯 Флексибилност** у дизајну програма

<div class="image-container">
<img style="width:400px;" src="https://media.geeksforgeeks.org/wp-content/uploads/PolymorphismInJava.png" 
alt="polymorphism concept">
</div>

---

## 💻 ОО пример - Иста функционалност

<h6>Java</h6>

```java
// Класа као шаблон
class Student {
    // Атрибути (приватни подаци)
    private String ime;
    private float[] ocene;
    private int brojOcena;
    
    // Конструктор
    public Student(String ime) {
        this.ime = ime;
        this.ocene = new float[20];
        this.brojOcena = 0;
    }
    
    // Методе (понашање)
    public void dodajOcenu(float ocena) {
        if(brojOcena < 20) {
            ocene[brojOcena] = ocena;
            brojOcena++;
        }
    }
    
    public float getProsek() {
        if(brojOcena == 0) return 0;
        float suma = 0;
        for(int i = 0; i < brojOcena; i++) {
            suma += ocene[i];
        }
        return suma / brojOcena;
    }
}
```

---

## 💻 ОО пример - Коришћење

<h6>Java</h6>

```java
// Коришћење класе
public class Main {
    public static void main(String[] args) {
        // Стварање објеката
        Student marko = new Student("Marko");
        Student ana = new Student("Ana");
        
        // Позивање метода
        marko.dodajOcenu(8.5f);
        marko.dodajOcenu(9.0f);
        
        ana.dodajOcenu(7.5f);
        ana.dodajOcenu(8.0f);
        
        // Приказ резултата
        System.out.println("Marko: " + marko.getProsek());
        System.out.println("Ana: " + ana.getProsek());
    }
}
```

---

## 📊 Поређење парадигми

| **Аспект** | **Процедурална** | **Објектно-оријентисана** |
|------------|------------------|---------------------------|
| **Фокус** | Функције и процедуре | Објекти и класе |
| **Подаци** | Глобални, одвојени | Енкапсулирани |
| **Организација** | Функције → функције | Објекти → поруке |
| **Модуларност** | По функцијама | По класама |
| **Поновна употреба** | Функције | Наслеђивање |
| **Сложеност** | Тешко за велике системе | Боље за велике системе |
| **Учење** | Једноставније | Комплексније |

---

## 🎯 Када користити коју парадигму?

**🔧 Процедуралну:**
- Мањи, једноставнији програми
- Математички прорачуни  
- Системско програмирање
- Скриптови и алати

**🏛️ Објектно-оријентисану:**
- Велики, сложени системи
- GUI апликације
- Игре и симулације  
- Веб апликације
- Тимски развој

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*bF-9VQucOA2LdmDfNKcqfA.png" 
alt="when to use which paradigm">
</div>

---

## 📚 Практични пример - Библиотека

**Задатак:** Управљање библиотеком књига

**🔧 Процедурални приступ:**

<h6>C програмски језик</h6>

```c
struct Knjiga knjige[100];
int brojKnjiga = 0;

void dodajKnjigu(char* naslov, char* autor) {
    strcpy(knjige[brojKnjiga].naslov, naslov);
    strcpy(knjige[brojKnjiga].autor, autor);
    brojKnjiga++;
}

void prikaziKnjige() {
    for(int i = 0; i < brojKnjiga; i++) {
        printf("%s - %s\n", knjige[i].naslov, knjige[i].autor);
    }
}

struct Knjiga* nadjiKnjigu(char* naslov) {
    for(int i = 0; i < brojKnjiga; i++) {
        if(strcmp(knjige[i].naslov, naslov) == 0) {
            return &knjige[i];
        }
    }
    return NULL;
}
```

---

## 📚 Практični пример - ОО приступ

**🏛️ Објектно-оријентисани приступ:**

<h6>Java</h6>

```java
class Knjiga {
    private String naslov;
    private String autor;
    
    public Knjiga(String naslov, String autor) {
        this.naslov = naslov;
        this.autor = autor;
    }
    // getteri i setteri...
}

class Biblioteka {
    private List<Knjiga> knjige;
    
    public Biblioteka() {
        knjige = new ArrayList<>();
    }
    
    public void dodajKnjigu(Knjiga knjiga) {
        knjige.add(knjiga);
    }
    
    public void prikaziKnjige() {
        for(Knjiga k : knjige) {
            System.out.println(k.getNaslov() + " - " + k.getAutor());
        }
    }
    
    public Knjiga nadjiKnjigu(String naslov) {
        return knjige.stream()
                    .filter(k -> k.getNaslov().equals(naslov))
                    .findFirst()
                    .orElse(null);
    }
}
```

---

## 🎯 Кључне разлике у приступу

**🔧 Процедурални:**
- **Подаци** и **функције** одвојено
- **Глобално стање** - сви могу мењати
- **Функције управљају** подацима

**🏛️ Објектно-оријентисани:**
- **Подаци** и **методе** заједно
- **Контролисан приступ** подацима
- **Објекти управљају** својим стањем

<div class="image-container">
<img style="width:400px;" src="https://media.geeksforgeeks.org/wp-content/uploads/20230317120156/Difference-Between-Object-Oriented-Programming-and-Procedural-Programming.png" 
alt="key differences">
</div>

---

## ✅ Закључак

- **🔧 Процедурална парадигма** = организација кроз функције
- **🏛️ ОО парадигма** = организација кроз објекте и класе
- **🔒 Енкапсулација** решава проблеме глобалних података
- **🧬 Наслеђивање и полиморфизам** омогућавају флексибилност
- **🎯 Свака парадигма** има своју примену

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*6pOuDkf4wTQ3e3U2fKRFuw.png" 
alt="programming paradigms conclusion">
</div>

---

## 📝 Домаћи задатак

1. **Модификовати** процедурални пример са студентима:
   - Додати функцију за брисање оцене

2. **Направити класу** `Proizvod` са:
   - Атрибутима: назив, цена, количина
   - Методама за рад са њима

3. **Размислити:** зашто је боље да атрибути буду приватни, а методе јавне?

*Фокус на практичну примену концепата*

---

## 🤝 Питања и дискусија

- Која парадигма вам делује природнија?
- Где бисте користили процедуралну, а где ОО парадигму?
- Зашто је енкапсулација важна?

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*zJCBpVIuXkCJgSWMr5_BYw.png" 
alt="programming discussion">
</div>

**Следећи час:** Скрипт парадигма и комбиновање парадигми