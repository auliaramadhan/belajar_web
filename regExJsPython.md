# Regular Expressions
Example
https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

## Basic Syntax

- /.../: Start and end regex delimiters
- |: Alternation
- (): Grouping


## Position Matching

- ^: Start of string or start of line in multi-line mode
- \A: Start of string
- $: End of string or end of line in multi-line mode
- \Z: End of string
- \b: Word boundary
- \B: Not word boundary
- \<: Start of word
- \>: End of word


## Character Classes

- \s: Whitespace
- \S: Not whitespace
- \w: Word
- \W: Not word
- \d: Digit
- \D: Not digit
- \x: Hexade�cimal digit
- \O: Octal digit


## Special Characters

- \n: Newline
- \r: Carriage return
- \t: Tab
- \v: Vertical tab
- \f: Form feed
- \xxx: Octal character xxx
- \xhh: Hex character hh


## Groups and Ranges

- .: Any character except newline (\n)
- (a|b): a or b
- (�): Group
- (?:�): Passive (non-c�apt�uring) group
- [abc]: a, b or c
- [^abc]: Not a, b or c
- [a-z]: Letters from a to z
- [A-Z]: Uppercase letters from A to Z
- [0-9]: Digits from 0 to 9

> Note: Ranges are inclusive.


## Quantifiers

- *: 0 or more
- +: 1 or more
- ?: 0 or 1
- {3: Exactly 3
- {3,}: 3 or more
- {3,5}: 3, 4 or 5

> Note: Quantifiers are greedy - they match as many times as possible. Add a ? after the quantifier to make it ungreedy.


## Escape Sequences

- \:Escape following character. Used to escape any of the following metacharacters: {}[]()^$.|*+?\.
- \Q: Begin literal sequence
- \E: End literal sequence


## String Replacement

- $n: nth group
- $: Before matched string
- $': After matched string
- $+: Last matched string
- $&: Entire matched string

> Note: Some regex implem�ent�ations use \ instead of $.


## Assertions

- ?=: Lookahead assertion
- ?!: Negative lookahead
- ?<=: Lookbehind assertion
- ?!=, ?<!: Negative lookbehind
- ?>: Once-only subexp�ression
- ?(): Condition if-then
- ?()|: Condition if-then-else
- ?#: Comment


## POSIX

- [:upper:]: Uppercase letters
- [:lower:]: Lowercase letters
- [:alpha:]: All letters
- [:alnum:]: Digits and letters
- [:digit:]: Digits
- [:xdigit:]: Hexade�cimal digits
- [:punct:]: Punctu�ation
- [:blank:]: Space and tab
- [:space:]: Blank characters
- [:cntrl:]: Control characters
- [:graph:]: Printed characters
- [:print:]: Printed characters and spaces
- [:word:]: Digits, letters and underscore


## Pattern Modifiers

- g: Global match
- i: Case-i�nse�nsitive
- m: Multi-line mode. Causes ^ and $ to also match the start/end of lines.
- s: Single-line mode. Causes . to match all, including line breaks.
- x: Allow comments and whitespace in pattern
- e: Evaluate replac�ement
- U: Ungreedy mode

------------------------------ 

------------------------------
EXAMPLE PYTHON
'''
\s      [ \n\t\f\r]
\S      [^ \n\t\f\r]
\w      [A-Za-z0-9_]
\d      [0-9]
\D      [^0-9]
\W      [^A-Za-z0-9_]
\b      word boundary
^       beginning of string
$       end of string
re.findall(pattern, string)
re.finditer(pattern, string)
re.search(pattern, string)
Hints:
    * patterns should raw strings r''
    * always start with findall() and move to search()
    * start with a small pattern and build-up one step at a time
'''
import re
from collections import Counter
from pprint import pprint

with open('notes/hamlet.txt') as f:
    play = f.read()
    
words = re.findall(r"[a-z\'\-]{3,}", play.lower())
pprint(Counter(words).most_common(50))