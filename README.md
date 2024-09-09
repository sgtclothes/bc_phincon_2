# bc_phincon_2

## Git Cheat Sheet
-   `git init` => Untuk inisiasi git dalam folder project
-   `git status` => Cek status di folder project
-   `git add` => Menambahkan file ke staging, yang akan dicommit
-   `git commit -m [commit-message]` => Commit file yang akan dipush
-   `git remote -v` => Untuk mengecek url repository online
-   `git remote add origin [url-repository]` => Untuk set remote url nya, dipush ke mana
-   `git remote set-url origin [url-repository]` => Untuk set remote url jika udah ada url existing
-   `git push` => Push ke repository online
-   `git push origin [name-branch]` => Push ke repository dengan nama branch tertentu
-   `git fetch` => Untuk menarik branch dan perubahan yang ada di online repository
-   `git pull` => Pull ke repository online
-   `git pull origin [name-branch]` => Pull ke repository dengan nama branch tertentu
-   `git switch [name-branch]` => Untuk mengganti posisi branch yang aktif
-   `git checkout -b [name-branch]` => Untuk membuat branch baru berdasarkan referensi aktif branch
-   `git merge [name-branch]` => Untuk menggabungkan aktif branch ke branch yang dituju
-   `git merge [name-branch] --allow-unrelated-histories` => Untuk menggabungkan aktif branch ke branch yang dituju (Dilakukan pertama kali jika tidak ada sama sekali commitan di awal)
