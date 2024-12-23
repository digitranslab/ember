cd ./dev/tool
rushx run-local create-workspace ws1 -w DevWorkspace # Create workspace
rushx run-local create-account user1 -p 1234 -f John -l Appleseed # Create account
rushx run-local configure ws1 --list --enable '*' # Enable all modules
rushx run-local assign-workspace user1 ws1 # Assign workspace to user
rushx run-local confirm-email user1 # To allow the creation of additional test workspaces