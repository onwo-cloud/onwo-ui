#!/usr/bin/env nu

# Script to verify that all files/directories in .aiderignore exist
def "main" [] {
    # Check if .aiderignore exists
    if not (".aiderignore" | path exists) {
        print "❌ .aiderignore file not found!"
        return
    }

    # Read and parse .aiderignore
    let aiderignore_content = open .aiderignore | lines
    
    # Filter lines that start with ! (these are the included files/dirs)
    let included_paths = $aiderignore_content 
        | where ($it | str starts-with "!") 
        | where ($it | str trim | str length) > 1  # Remove empty lines
        | where not ($it | str starts-with "#")    # Remove comments
        | each { |line| $line | str substring 1.. | str trim }  # Remove ! and trim
    
    print $"📋 Checking (($included_paths | length)) paths from .aiderignore...\n"
    
    mut missing_paths = []
    mut existing_paths = []
    
    # Check each path
    for path in $included_paths {
        if ($path | path exists) {
            $existing_paths = ($existing_paths | append $path)
            print $"✅ ($path)"
        } else {
            $missing_paths = ($missing_paths | append $path)
            print $"❌ ($path) - NOT FOUND"
        }
    }
    
    # Summary
    print $"\n📊 Summary:"
    print $"   ✅ Existing: (($existing_paths | length))"
    print $"   ❌ Missing:  (($missing_paths | length))"
    
    if ($missing_paths | length) > 0 {
        print $"\n🚨 Missing paths:"
        $missing_paths | each { |path| print $"   - ($path)" }
        exit 1
    } else {
        print $"\n🎉 All paths in .aiderignore exist!"
        exit 0
    }
}
