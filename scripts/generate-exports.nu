#!/usr/bin/env nu

def main [components_path: string] {
    print $"Scanning for components in: ($components_path)"

    let component_names = ls $components_path
      | where type == dir
      | get name
      | path basename

    let component_exports = $component_names
      | each {|name| [ $"./($name)", {
          qwik: $"./lib/@kit/($name)/index.qwik.mjs",
          import: $"./lib/@kit/($name)/index.qwik.mjs",
          types: $"./lib-types/@kit/($name)/index.d.ts"
        }]}

    let all_exports_list = [[".", {
      "qwik": "./lib/index.qwik.mjs",
      "import": "./lib/index.qwik.mjs",
      "types": "./lib-types/index.d.ts"
    }], ...$component_exports]


    let new_exports_object = $all_exports_list | reduce -f {} {|item, acc|
        $acc | upsert ($item.0) ($item.1)
    }

    let package_json = open package.json
    let updated_package_json = $package_json | update exports $new_exports_object
    $updated_package_json | to json --indent 2 | save --force package.json

    print "✅ package.json exports updated successfully."
}
