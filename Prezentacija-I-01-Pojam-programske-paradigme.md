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

# Појам програмске парадигме и класификација програмских језика

**Програмске парадигме - Час 1**

<div class="image-container">
  <img style="width: 500px" src="https://miro.medium.com/v2/resize:fit:1400/1*Pc7VsqOGV-fit6aMhUfTiA.png" alt="Programming paradigms"/>
</div>

---

## 🤔 Мотивациона питања

- **Које програмске језике знате до сада?**
- **Да ли сте приметили разлике у начину писања програма?**  
- **Зашто постоји толико много програмских језика?**

<div class="image-container">
<img src="https://www.credosystemz.com/training/assets/img/java-vs-python.png" 
alt="programming languages comparison">
</div>

*[Простор за дискусију са ученицима]*

---

## 📚 Шта је програмска парадигма?

**Програмска парадигма** је основни стил или приступ програмирању који одређује:

- Како размишљамо о проблему
- Како структурирамо програм  
- Које концепте користимо за решавање

<div class="image-container">
<img style="width:400px;" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lq4t8-yQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7k2y2eqx36zoap9a1sy6.png" 
alt="programming paradigm concept">
</div>

---

## 🏗️ Аналогија са градитељством

Програмске парадигме су као различите градитељске технике:

- **🧱 Зидање циглом** (императивно)  
  *корак по корак, детаљна конт��ола*

- **🏗️ Префабриковани елементи** (објектно-оријентисано)  
  *готове компоненте*

- **📐 Математички план** (функционално)  
  *опис жељеног резултата*

<div class="image-container">
<img src="https://miro.medium.com/v2/resize:fit:1400/1*d3akTZnKUOas8s1Dkse_KQ.png" 
alt="building construction analogy">
</div>

---

## ❓ Зашто су парадигме важне?

**Различити проблеми = различити приступи**

- ✅ Свака парадигма има своје **предности и недостатке**
- ✅ Знање више парадигми чини програмера **флексибилнијим**
- ✅ Бољи избор алата за **конкретан проблем**
- ✅ Разумевање **историје развоја** програмирања

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*7Z-Q3mVlzxMAuB3lC0GpSA.png" 
alt="problem solving approaches">
</div>

---

## ⚙️ Императивна парадигма

**Карактеристике:**
- Програм као низ наредби/команди
- Контрола тока извршавања (`if`, `for`, `while`)
- Променљиве и додељивање вредности
- Фокус на **"како"** решити проблем

**Примери језика:** C, Pascal, Basic

<h6>C програмски језик</h6>

```c
int suma = 0;
for(int i = 1; i <= 10; i++) {
    suma = suma + i;
}
printf("Suma: %d", suma);
```

---

## 🏛️ Објектно-оријентисана парадигма

**Карактеристике:**
- Све је **објект** са својствима и методама
- Енкапсулација, наслеђивање, полиморфизам
- Моделовање реалног света
- Поновна употреба кода

**Примери језика:** Java, C++, C#, Python

<h6>Java</h6>

```java
class Ucenik {
    private String ime;
    
    public void postaviIme(String novoIme) {
        this.ime = novoIme;
    }
}
```

---

## 🔧 Функционална парадигма

**Карактеристике:**
- Програм као **композиција функција**
- Без споредних ефеката (чисте функције)
- Непроменљивост података
- Фокус на **"шта"** желимо да израчунамо

**Примери језика:** Haskell, Lisp, F#

<h6>Haskell</h6>

```haskell
-- Збир као композиција функција
zbir lista = foldl (+) 0 lista

-- Коришћење
rezultat = zbir [1,2,3,4,5]
```

---

## 🧠 Логичка парадигма

**Карактеристике:**
- Програм као скуп **логичких правила** и чињеница
- Декларативни опис проблема
- Аутоматско закључивање
- База знања + упити

**Примери језика:** Prolog

<h6>Prolog</h6>

```prolog
% Чињенице
roditelj(marko, ana).
roditelj(ana, petar).

% Правило
deda(X, Z) :- roditelj(X, Y), roditelj(Y, Z).

% Упит
?- deda(marko, petar).
```

---

## 📊 Класификација програмских језика

| **Парадигма** | **Примери језика** |
|---------------|--------------------|
| Императивна | C, Pascal, Assembly |
| Објектно-оријентисана | Java, C++, C# |
| Функционална | Haskell, Lisp, F# |
| Логичка | Prolog |
| **Мултипарадигматски** | **Python, JavaScript, Scala** |

*[Простор за дискусију: које језике ученици знају?]*

---

## 🔄 Мултипарадигматски језици

Многи савремени језици **комбинују више парадигми**:

<h6>Python</h6>

```python
# Императивно
suma = 0
for i in range(1, 11):
    suma += i

# Функционално  
suma = sum(range(1, 11))

# Објектно-оријентисано
class Kalkulator:
    def saberi(self, lista):
        return sum(lista)
```

---

## 📈 Историјски развој парадигми

**1950е** - Машински језици  
**1960е** - Структурно програмирање (C, Pascal)  
**1970е** - Објектно-оријентисано (Smalltalk)  
**1980е** - Функционално (ML, Haskell)  
**1990е** - Логичко (Prolog)  
**2000е** - Мултипарадигматски (Python, JavaScript)

<div class="image-container">
<img style="width:450px;" src="https://www.embedded.com/wp-content/uploads/2018/04/programming-languages-timeline.png" 
alt="programming languages timeline">
</div>

---

## ✅ Закључак

- **Програмске парадигме** су различити приступи решавању проблема
- Свака има своје **место и примену**
- Важно је познавати **више парадигми**
- Савремени језици често **комбинују приступе**

<div class="image-container">
<img style="width:400px;" src="https://miro.medium.com/v2/resize:fit:1400/1*YQGwjNX3TGWKDOWMcBqYZQ.png" 
alt="programming paradigms summary">
</div>

**Следећи час:** Декларативно vs Императивно програмирање

---

## 📝 Домаћи задатак

**Истражити по један програмски језик из сваке парадигме:**

1. **Императивна парадигма** - опис (2-3 реченице)
2. **Објектно-оријентисана** - опис (2-3 реченице)  
3. **Функционална парадигма** - опис (2-3 реченице)
4. **Логичка парадигма** - опис (2-3 реченице)

*Фокус на основне карактеристике сваког језика*

---

## 🤝 Питања и дискусија

- Која парадигма вам делује најинтересантнија?
- Да ли можете да препознате парадигму у језицима које знате?
- Које проблеме би најлакше решавали којом парадигмом?

<div class="image-container">
<img style="width:400px;" src="https://www.edureka.co/blog/wp-content/uploads/2017/12/Programming-Paradigms-in-Python-Edureka.png" 
alt="programming paradigms discussion">
</div>

*[Простор за интерактивну дискусију]*