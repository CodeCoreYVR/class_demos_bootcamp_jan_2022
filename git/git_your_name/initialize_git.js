//Git Basics

//To initialize a local directory as a git repository, you first have to install git
//for your specific operating system

//Once you have git installed, and want to initialize the directory:
// 1) Make sure the parent (or ancestor) directories that your current directory(folder) is in,
// is NOT already a git repository
// NEVER initialize a git repository inside of another git repository
// a) To check, you can change into the parent directory 
// $ cd <Parent_directory_path>
// b) Then see if the directory has a .git file
// $ ls -a
// c) You can also try a git command to see if it works
// $ git status
// If the repository is not git initialized, it will say "not a git repository"
// If it is, it will say "On branch... Nothing to commit" or "On branch..." with some file names, etc.

// 2) Once you made sure that you new directory is NOT in an existing git repository,
// follow the same steps to see if your current directory is a git repository
// hint: if you just created it with "mkdir directory_name" it would not be a git repository yet
// $ cd <your directory you want to initialize git in>
// $ git init
// Follow the steps in 1) for this directory and see if .git exists in this directory
