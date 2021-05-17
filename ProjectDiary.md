# Spork Diary

Added 'assets' directory with the files I wanted to convert to TypeScript into the repo.

Modified user preferences to exclude 'assets' so they wouldn't interfere with linting.

Decided to modify code and capitalization of methods to the way I would have done if I had done it from scratch.

Used type "any" for child type but need to go back and change that. 
Note: changed to Child interface.

Used Function for callback type but need to go back and change to function shape.

Added static 'create' methods to objects, which now throw error instead of simply returning 'null'.