# Шаблони за лекције

Овај фолдер садржи шаблоне за креирање нових лекција.

## Садржај

1. **`template-lesson.md`** - Шаблон за детаљан план часа (за наставнике)
2. **`template-slides.md`** - Шаблон за Marp презентацију (за ученике)

## Како користити шаблоне

### Корак 1: Креирање новог фолдера за лекцију

```powershell
# Пример за лекцију I-04
New-Item -ItemType Directory -Path "lessons/I-04-Naziv-lekcije"
```

### Корак 2: Копирање шаблона

```powershell
# Копирај lesson шаблон
Copy-Item "templates/template-lesson.md" "lessons/I-04-Naziv-lekcije/lesson.md"

# Копирај slides шаблон
Copy-Item "templates/template-slides.md" "lessons/I-04-Naziv-lekcije/slides.md"
```

### Корак 3: Попуњавање шаблона

#### У `lesson.md` замени:
- `[NUMBER]` → Број часа (нпр. 4)
- `[NAZIV LEKCIJE]` → Назив лекције
- `[Obrada novog gradiva / Utvrđivanje / Praktične vežbe / Kontrolni]` → Тип часа
- `[Исход 1]`, `[Исход 2]`, итд. → Конкретни исходи
- `[ТЕМА 1]`, `[ТЕМА 2]`, итд. → Теме које обрађујете
- `[programming-language]` → Програмски језик (cpp, java, python, итд.)
- Све остало у угластим заградама `[...]` → Конкретан садржај

#### У `slides.md` замени:
- `[НАСЛОВ ЛЕКЦИЈЕ]` → Наслов презентације
- `[Концепт 1]`, `[Концепт 2]` → Концепти који се предају
- `[programming-language]` → Програмски језик
- Све остало у угластим заградама → Конкретан садржај
- Додај/обриши слајдове по потреби

### Корак 4: Генерисање HTML презентације

```powershell
marp "lessons/I-04-Naziv-lekcije/slides.md" --html -o "slides/I-04-Naziv-lekcije.html"
```

## Препоруке за писање садржаја

### За lesson.md (План часа)
- **Будите детаљни** - ово је за вас као наставника
- **Временска подела** - планирајте тачно колико времена за сваку секцију
- **Примери** - укључите више примера него што ћете показати на часу
- **Напомене** - додајте напомене за себе (честе грешке, савети)
- **Повезивање** - како се ова лекција повезује са претходним/следећим

### За slides.md (Презентација)
- **Будите кратки** - слајдови су за ученике, не преоптерећујте текстом
- **Визуелно** - користите табеле, листе, емоџије (✅ ❌ 🎯 👍 📝)
- **Код примери** - максимум 10-15 линија по слајду
- **Један концепт по слајду** - не гомилајте превише информација
- **Читљиво** - велики текст, јасни наслови

### Број слајдова по типу часа
- **Обрада (O):** 12-15 слајдова
- **Утврђивање (U):** 10-12 слајдова (више практичних примера)
- **Практичне вежбе (PR):** 8-10 слајдова (фокус на задатке)
- **Контролни (K):** 5-6 слајдова (упутства, задаци)

## Конвенције именовања

### Фолдери лекција
```
[Тема]-[Број]-[Назив-са-цртицама]/
```
Примери:
- `I-01-Pojam-programske-paradigme/`
- `II-05-Promenljive-i-tipovi-podataka/`
- `III-12-Nasledjivanje-i-polimorfizam/`
- `IV-20-Lambda-izrazi-i-closures/`

### Кодови тема
- **I** = Увод у програмске парадигме (5 часова)
- **II** = Императивно и процедурално (26 часова)
- **III** = Објектно-оријентисано (26 часова)
- **IV** = Функционално програмирање (42 часа)

### Слике
```
images/[Тема]-[Број]-[Поднумер]-[опис].jpg
```
Примери:
- `images/I-01-01-paradigme.jpg`
- `images/II-05-02-tipovi.png`

## Провера квалитета пре објаве

### Checklist за lesson.md
- [ ] Дефинисани циљ и исходи часа
- [ ] Временска подела сабира до 45 минута
- [ ] Сви примери кода су потпуни и функционални
- [ ] Домаћи задатак је јасан и мерљив
- [ ] Напомене за наставника су корисне

### Checklist за slides.md
- [ ] Marp frontmatter је исправан
- [ ] Слајдови нису преоптерећени текстом
- [ ] Сви примери кода су читљиви (не превише дугачки)
- [ ] Табеле су форматиране и јасне
- [ ] Презентација има логичан ток (увод → садржај → закључак)

### Генерисање и тестирање
```powershell
# Генериши HTML
marp "lessons/[naziv]/slides.md" --html -o "slides/[naziv].html"

# Отвори у претраживачу и провери:
# - Да ли се слајдови приказују исправно?
# - Да ли код примери стају на слајд?
# - Да ли су табеле читљиве?
# - Да ли су наслови јасни?
```

## Савети

### За брже креирање
Направите PowerShell скрипту која аутоматски:
1. Креира фолдер
2. Копира шаблоне
3. Отвара фајлове у VS Code

```powershell
# create-lesson.ps1
param($lessonId, $lessonName)
$folderPath = "lessons/$lessonId-$lessonName"
New-Item -ItemType Directory -Path $folderPath
Copy-Item "templates/template-lesson.md" "$folderPath/lesson.md"
Copy-Item "templates/template-slides.md" "$folderPath/slides.md"
code "$folderPath/lesson.md"
code "$folderPath/slides.md"
```

Употреба:
```powershell
.\create-lesson.ps1 "I-04" "Imperativno-programiranje"
```

### За batch генерисање HTML-а
```powershell
# generate-all-slides.ps1
Get-ChildItem -Path "lessons" -Filter "slides.md" -Recurse | ForEach-Object {
    $lessonName = $_.Directory.Name
    $outputPath = "slides/$lessonName.html"
    Write-Host "Generating: $outputPath"
    marp $_.FullName --html -o $outputPath
}
```

---

**Срећно са креирањем лекција!** 📚
