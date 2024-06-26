# daily-react-commit

# daily-react-commit

It looks like you are using PowerShell on Windows, which has different syntax from the Unix-like command line. The command `rm -rf` is a Unix-like command that does not work in PowerShell. Instead, PowerShell uses `Remove-Item` with different options.

Here are the corrected steps for PowerShell:

1. **Backup the contents of "my-app":**

   ```powershell
   Copy-Item -Recurse -Path my-app -Destination my-app-backup
   ```

2. **Deinitialize the submodule:**

   ```powershell
   git submodule deinit -f -- my-app
   ```

3. **Remove the submodule record from `.gitmodules` and the index:**

   ```powershell
   git rm --cached my-app
   ```

4. **Remove the submodule directory from the superproject's `.git/modules` directory:**

   ```powershell
   Remove-Item -Recurse -Force .git\modules\my-app
   ```

5. **Commit the changes to your repository:**

   ```powershell
   git commit -m "Removed my-app submodule"
   ```

6. **Delete the submodule path (if required):**

   ```powershell
   Remove-Item -Recurse -Force my-app
   ```

7. **Restore the "my-app" directory from the backup:**

   ```powershell
   Move-Item -Path my-app-backup -Destination my-app
   ```

8. **Add the "my-app" directory and its contents to the repository:**

   ```powershell
   git add my-app
   ```

9. **Commit the addition of the "my-app" directory:**

   ```powershell
   git commit -m "Add my-app as a regular directory with its content"
   ```

10. **Push your changes to the remote repository:**
    ```powershell
    git push
    ```

This will ensure that you're using the correct commands for PowerShell on Windows. Always be careful when using `Remove-Item -Force -Recurse` as it will permanently delete files. Ensure you have backups and have verified the paths before executing such commands.
