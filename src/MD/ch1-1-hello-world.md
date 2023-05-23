# Привет, мир!

Теперь, когда вы установили Rust, пришло время написать свою первую программу на Rust. Традиционно при изучении нового языка принято писать небольшую программу, которая печатает на экране текст `Hello, world!`, поэтому мы сделаем то же самое!

> Примечание: Эта книга предполагает наличие базового навыка работы с командной строкой. Rust не предъявляет особых требований к тому, каким инструментарием вы пользуетесь для редактирования или хранения вашего кода, поэтому если вы предпочитаете использовать интегрированную среду разработки (IDE) вместо командной строки, смело используйте вашу любимую IDE. Многие IDE сейчас в той или иной степени поддерживают Rust; подробности можно узнать из документации к IDE. Команда Rust сосредоточилась на обеспечении отличной поддержки IDE с помощью `rust-analyzer`. Более подробную информацию смотрите в [Приложении D].

### Создание папки проекта

Прежде всего начнём с создания директории, в которой будем сохранять наш код на языке Rust. На самом деле не важно, где сохранять наш код. Однако, для упражнений и проектов, обсуждаемых в данной книге, мы советуем создать директорию _projects_ в вашем домашнем каталоге, там же и хранить в будущем код программ из книги.

Откройте терминал и введите следующие команды для того, чтобы создать директорию <em>projects</em> для хранения кода разных проектов, и, внутри неё, директорию <em>hello_world</em> для проекта “Hello, world!”.

Для Linux, macOS и PowerShell на Windows, введите:

<Code>
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
</Code>

Для Windows в CMD, введите:

<Code>
> mkdir "%USERPROFILE%\projects"
> cd /d "%USERPROFILE%\projects"
> mkdir hello_world
> cd hello_world
</Code>

### Написание и запуск первой Rust программы

Затем создайте новый исходный файл и назовите его _main.rs_. Файлы Rust всегда заканчиваются расширением _.rs_. Если вы используете более одного слова в имени файла, принято разделять их символом подчёркивания. Например, используйте _hello_world.rs_ вместо _helloworld.rs_.

Теперь откроем файл _main.rs_ для редактирования и введём следующие строки кода:

<Code language="rust">
fn main() {
    println!("Hello, world!");
}
</Code>

<span class="caption">Листинг 1-1: Программа, которая печатает <code>Hello, world!</code></span>

Сохраните файл и вернитесь в окно терминала в каталог _~/projects/hello_world_. В Linux или macOS введите следующие команды для компиляции и запуска файла:

<Code>
$ rustc main.rs
$ ./main
Hello, world!
</Code>

В Windows, введите команду `.\main.exe` вместо `./main`:

<Code language=''>
> rustc main.rs
> .\main.exe
> Hello, world!
> </Code>

Независимо от вашей операционной системы, строка `Hello, world!` должна быть выведена на терминал. Если вы не видите такого вывода, обратитесь к разделу ["Устранение неполадок"]<!-- ignore -->, чтобы узнать, как получить помощь.

Если напечаталось `Hello, world!`, то примите наши поздравления! Вы написали программу на Rust, что делает вас Rust программистом — добро пожаловать!

### Анатомия программы на Rust

Давайте рассмотрим «Hello, world!» программу в деталях. Вот первая часть головоломки:

<Code language='rust'>
fn main() {
}
</Code>

Эти строки определяют функцию с именем `main`. Функция `main` особенная: это всегда первый код, который запускается в каждой исполняемой программе Rust. Первая строка объявляет функцию с именем `main`, которая не имеет параметров и ничего не возвращает. Если бы были параметры, они бы заключались в круглые скобки `()`.

Тело функции заключено в `{}`. Rust требует фигурных скобок вокруг всех тел функций. Хороший стиль — поместить открывающую фигурную скобку на ту же строку, что и объявление функции, добавив между ними один пробел.

> Примечание: Если хотите придерживаться стандартного стиля во всех проектах Rust, вы можете использовать инструмент автоматического форматирования под названием `rustfmt` для форматирования кода в определённом стиле (подробнее о `rustfmt` в [Приложении D](appendix-04-useful-development-tools.md)<!-- ignore -->. Команда Rust включила этот инструмент в стандартный дистрибутив Rust, как `rustc`, поэтому он уже должен быть установлен на вашем компьютере!

Тело функции `main` содержит следующий код:

<Code language='rust'>
    println!("Hello, world!");
</Code>

Эта строка делает всю работу в этой маленькой программе: печатает текст на экран. Можно заметить четыре важных детали.

Во-первых, стиль Rust предполагает отступ в четыре пробела, а не табуляцию.

Во-вторых, `println!` вызывается макрос Rust. Если бы вместо него была вызвана функция, она была бы набрана как `println` (без `!`). Более подробно мы обсудим макросы Rust в главе 19. Пока достаточно знать, что использование `!` подразумевает вызов макроса вместо обычной функции, и что макросы не всегда подчиняются тем же правилам как функции.

В-третьих, вы видите строку `"Hello, world!"`. Мы передаём её в качестве аргумента макросу `println!`, и она выводится на экран.

В-четвёртых, мы завершаем строку точкой с запятой (`;`), которая указывает на окончание этого выражения и возможность начала следующего. Большинство строк кода Rust заканчиваются точкой с запятой.

### Компиляция и запуск - это отдельные шаги

Вы только что запустили впервые созданную программу, поэтому давайте рассмотрим каждый шаг этого процесса.

Перед запуском программы на Rust вы должны скомпилировать её с помощью компилятора Rust, введя команду `rustc` и передав ей имя вашего исходного файла, например:

<Code>
$ rustc main.rs
</Code>

Если у вас есть опыт работы с C или C++, вы заметите, что это похоже на `gcc` или `clang`. После успешной компиляции Rust выводит двоичный исполняемый файл.

В Linux, macOS и PowerShell в Windows вы можете увидеть исполняемый файл, введя команду `ls` в оболочке:

<Code>
$ ls
main  main.rs
</Code>

В Linux и macOS вы увидите два файла. При использовании PowerShell в Windows вы увидите такие же три файла, как и при использовании CMD. Используя CMD в Windows, введите следующее:

<Code>
> dir /B %= the /B option says to only show the file names =%
main.exe
main.pdb
main.rs
</Code>

Это показывает исходный код файла с расширением _.rs_, исполняемый файл (_main.exe_ на Windows, но _main_ на всех других платформах) и, при использовании Windows, файл, содержащий отладочную информацию с расширением _.pdb_. Отсюда вы запускаете файлы _main_ или _main.exe_, например:

<Code>
$ ./main # для Linux
> .\main.exe # для Windows
</Code>

Если ваш _main.rs_ — это ваша программа «Hello, world!», эта строка выведет в терминал `Hello, world!`.

Если вы лучше знакомы с динамическими языками, такими как Ruby, Python или JavaScript, возможно, вы не привыкли компилировать и запускать программу как отдельные шаги. Rust — это предварительно _скомпилированный_ язык, то есть вы можете скомпилировать программу и передать исполняемый файл кому-то другому, и он сможет запустить его даже без установленного Rust. Если вы даёте кому-то файл _.rb_ , _.py_ или _.js_, у него должна быть установлена реализация Ruby, Python или JavaScript (соответственно). Но в этих языках вам нужна только одна команда для компиляции и запуска вашей программы. В дизайне языков программирования всё — компромисс.

Компиляция с помощью `rustc` подходит для простых программ, но по мере роста вашего проекта вы захотите управлять всеми параметрами и упростить передачу кода. Далее мы познакомим вас с инструментом Cargo, который поможет вам писать программы из реального мира на Rust.

["Устранение неполадок"]: ch01-01-installation.html#troubleshooting
[Приложении D]: appendix-04-useful-development-tools.md