# Програмске Парадигме
## Курс за четврти разред гимназије

Комплетан курс програмских парадигми са 99 часова, организованих у 4 главне теме, са детаљним плановима часова и Marp презентацијама.

---

## 📚 Структура курса

### Теме и часови
- **Тема I: Увод** (5 часова) - Појам програмске парадигме и класификација
- **Тема II: Императивно програмирање** (26 часова) - Императивна и процедурална парадигма
- **Тема III: Објектно-оријентисано програмирање** (26 часова) - ООП концепти и примена
- **Тема IV: Функционално програмирање** (42 часа) - Функционална парадигма

**Укупно:** 99 часова (целе школске године)

### Типови часова
- **O** (Обрада) - Обрада новог градива
- **U** (Утврђивање) - Утврђивање и вежбање
- **PR** (Практичне вежбе) - Практичан рад
- **K** (Контролни) - Провера знања

---

## 📁 Организација пројекта

```
programske-paradigme/
├── lessons/              # Фолдери за сваку лекцију
│   └── [ID-Topic]/      # Пример: I-01-Pojam-programske-paradigme/
│       ├── lesson.md    # Детаљан план часа
│       └── slides.md    # Marp презентација
├── slides/              # Генерисани HTML презентације
├── images/              # Слике за презентације
├── templates/           # Шаблони за креирање нових лекција
├── scripts/             # PowerShell скрипте за аутоматизацију
└── backup/              # Резервне копије
```

---

## 🚀 Брзи старт

### Предуслови
```powershell
# Инсталирај Marp CLI
npm install -g @marp-team/marp-cli

# Провери инсталацију
marp --version
```

### Креирање нове лекције (са Claude AI)

**Workflow:**
1. **Питај Claude** да генерише нову лекцију
   - Дај му templates као референцу
   - Дај му постојеће лекције (I-01, I-02, I-03) као примере
   - Специфицирај тему и тип часа из `programske paradigme.md`

2. **Claude креира** садржај директно:
   - Креира фолдер структуру
   - Генерише `lesson.md` и `slides.md`
   - Прати утврђене конвенције

3. **Генериши HTML презентацију:**
```powershell
# За једну лекцију
marp "lessons/I-04-Topic-Name/slides.md" --html -o "slides/I-04-Topic-Name.html"

# Или за све одједном
Get-ChildItem -Path "lessons" -Filter "slides.md" -Recurse | ForEach-Object {
    $lessonName = $_.Directory.Name
    marp $_.FullName --html -o "slides/$lessonName.html"
}
```

---

## 📖 Документација

### Детаљна документација
- **[summary.md](summary.md)** - Комплетан преглед пројекта, структура и workflow
- **[templates/README.md](templates/README.md)** - Упутство за коришћење шаблона
- **[scripts/README.md](scripts/README.md)** - Документација PowerShell скрипти
- **[programske paradigme.md](programske%20paradigme.md)** - План свих 99 часова

### Шаблони
- **[template-lesson.md](templates/template-lesson.md)** - Шаблон за план часа
- **[template-slides.md](templates/template-slides.md)** - Шаблон за Marp презентацију

---

## 🛠️ Алати и технологије

- **[Marp](https://marp.app/)** - Markdown презентације
- **VS Code** - Едитор кода
- **PowerShell** - Аутоматизација
- **Git** - Контрола верзија
- **Node.js/npm** - Marp CLI

---

## 📋 Конвенције именовања

### Фолдери лекција
```
[Тема]-[Број]-[Назив-теме]/
```
Примери:
- `I-01-Pojam-programske-paradigme/`
- `II-05-Promenljive-i-tipovi-podataka/`
- `III-12-Nasledjivanje-i-polimorfizam/`
- `IV-20-Lambda-izrazi/`

### Кодови тема
- **I** = Увод у програмске парадигме
- **II** = Императивно и процедурално
- **III** = Објектно-оријентисано
- **IV** = Функционално програмирање

### Фајлови
- **lesson.md** - План часа (за наставнике)
- **slides.md** - Marp презентација (за ученике)
- **[ID-Topic].html** - Генерисана HTML презентација

---

## ✅ Workflow за креирање часова (са AI)

### 1. Планирање
- Консултуј `programske paradigme.md` за преглед часова
- Идентификуј број часа и тип (O, U, PR, K)
- Дефиниши циљеве и исходе часа

### 2. Питај Claude да генерише лекцију
Пошаљи Claude-у:
- Број и назив лекције из `programske paradigme.md`
- Референца на templates (`template-lesson.md`, `template-slides.md`)
- Примере постојећих лекција (I-01, I-02, I-03)
- Специфичне захтеве за садржај

### 3. Claude креира фајлове
- Креира фолдер: `lessons/[ID-Topic]/`
- Генерише `lesson.md` (детаљан план часа)
- Генерише `slides.md` (Marp презентација)

### 4. Генерисање HTML-а
```powershell
marp "lessons/[ID-Topic]/slides.md" --html -o "slides/[ID-Topic].html"
```

### 5. Преглед
```powershell
Start-Process "slides/[ID-Topic].html"
```

### 6. Commit
```powershell
git add lessons/[ID-Topic]/
git add slides/[ID-Topic].html
git commit -m "Add lesson [ID]: [Topic]"
git push
```

---

## 🔍 Корисне команде

### Провера прогреса
```powershell
# Број креираних лекција
(Get-ChildItem lessons -Directory).Count

# Број генерисаних презентација
(Get-ChildItem slides -Filter "*.html").Count

# Лекције без slides.md
Get-ChildItem lessons -Directory | Where-Object {
    -not (Test-Path (Join-Path $_.FullName "slides.md"))
}
```

### Batch генерисање HTML-а
```powershell
# Генериши све HTML презентације одједном
Get-ChildItem -Path "lessons" -Filter "slides.md" -Recurse | ForEach-Object {
    $lessonName = $_.Directory.Name
    Write-Host "Generating: $lessonName"
    marp $_.FullName --html -o "slides/$lessonName.html"
}
```

### Тражење у садржају
```powershell
# Нађи лекције које помињу одређену тему
Get-ChildItem lessons -Recurse -Filter "*.md" | Select-String "Python" -List

# Нађи непопуњене placeholder-е
Get-ChildItem lessons -Recurse -Filter "*.md" | Select-String "\[NAZIV|\[NUMBER" -List
```

---

## 🎨 Стилизација презентација

Све презентације користе јединствену тамну тему:
- **Позадина:** `#1a1a1a` (тамно сива)
- **Текст:** `#ffffff` (бела)
- **Наслови:** `#4fc3f7` (цијан)
- **Код блокови:** `#2d2d2d` позадина
- **Респонзиван дизајн:** `clamp()` функције за адаптивну величину

---

## 📊 Напредак курса

### Завршено
- ✅ Тема I: 3/5 часова
  - I-01: Појам програмске парадигме ✅
  - I-02: Декларативно и императивно ✅
  - I-03: Процедурална и објектно-оријентисана ✅
  - I-04: [Предстоји]
  - I-05: [Предстоји]

### У припреми
- 🔄 Тема II: 0/26 часова
- 🔄 Тема III: 0/26 часова
- 🔄 Тема IV: 0/42 часа

**Укупан напредак:** 3/99 часова (3%)

---

## 🤝 Допринос

### Додавање нових лекција
1. Користи скрипту `create-lesson.ps1`
2. Прати шаблоне и конвенције
3. Валидирај пре commit-а
4. Креирај pull request

### Побољшања
- Предлози за побољшање шаблона
- Нове скрипте за аутоматизацију
- Исправке грешака
- Додатни материјали (слике, видео)

---

## 📝 Лиценца

Образовни материјал за наставу програмских парадигми у четвртом разреду гимназије.

---

## 📞 Контакт

За питања и сугестије отворите Issue на GitHub-у.

---

## 🔗 Корисни линкови

- [Marp Documentation](https://marpit.marp.app/)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Срећно са наставом!** 🎓📚
