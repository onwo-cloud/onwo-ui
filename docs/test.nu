# ==============================================================================
# FUNCTION DEFINITION
# ==============================================================================

def from-date [
    ...args: string # Arguments: [base_date] [operator] [value]
] {
    # 1. Base Case: No arguments -> return current time
    if ($args | is-empty) {
        return (date now)
    }

    # 2. Parse the "Base Date" (1st Argument)
    let base_str = $args.0
    let base_date = match $base_str {
        "now" => (date now),
        "yesterday" => ((date now) - 1day),
        "tomorrow" => ((date now) + 1day),
        _ => {
            # Attempt to parse specific dates (e.g., "2025-12-15")
            try {
                $base_str | into datetime
            } catch {
                error make { msg: $"Invalid base date format: '($base_str)'" }
            }
        }
    }

    # 3. If only one argument was provided, return the base date
    if ($args | length) == 1 {
        return $base_date
    }

    # 4. Parse Operator and Modifier (2nd and 3rd Arguments)
    let operator = $args.1?
    let modifier = $args.2?

    if ($modifier | is-empty) {
        error make { msg: "Missing value for operator." }
    }

    # 5. Calculate final date based on operator
    match $operator {
        "+" | "-" => {
            # Normalize duration string:
            # Nushell requires 'hr', 'min', 'sec'. We allow 'h', 'm', 's' by replacing them.
            # We use Regex to only replace if it's a shorthand (e.g. replace '10s' but not '10ms')
            let normalized_dur = ($modifier 
                | str replace --regex '(\d+)h$' '${1}hr'   # 2h -> 2hr
                | str replace --regex '(\d+)m$' '${1}min'  # 10m -> 10min
                | str replace --regex '(\d+)s$' '${1}sec'  # 30s -> 30sec (ignores 'ms')
                | str replace --regex '(\d+)d$' '${1}day'  # 1d -> 1day
            )

            let duration_val = try {
                $normalized_dur | into duration
            } catch {
                error make { msg: $"Can't convert '($modifier)' to duration. Use format '2h', '30min', etc." }
            }

            if $operator == "+" { 
                return ($base_date + $duration_val) 
            } else { 
                return ($base_date - $duration_val) 
            }
        },
        "at" => {
            # Set specific time. 
            # Logic: Strip the time from the base_date, add the new time string.
            let date_part = ($base_date | format date "%Y-%m-%d")
            let combined = $"($date_part)T($modifier)"
            
            try {
                return ($combined | into datetime)
            } catch {
                error make { msg: $"Invalid time format: '($modifier)'. Expected HH:MM or HH:MM:SS" }
            }
        },
        _ => {
            error make { msg: $"Unknown operator: '($operator)'. Supported: +, -, at" }
        }
    }
}

# ==============================================================================
# TEST SUITE
# ==============================================================================

print $"(ansi green_bold)Running Date Conversion Tests...(ansi reset)"
print "----------------------------------------------------------------"

# Define the test cases provided in the prompt
let tests = [
    { cmd: "from-date now", desc: "Current time" },
    { cmd: "from-date yesterday", desc: "Current time - 24h" },
    { cmd: "from-date now - 2h", desc: "Two hours ago (using shorthand 'h')" },
    { cmd: "from-date yesterday at 14:50", desc: "Yesterday specific time" },
    { cmd: "from-date 2025-12-15 at 14:50", desc: "Hardcoded date + time" },
    { cmd: "from-date tomorrow + 30min", desc: "Tomorrow plus 30 mins" }
]

# Run tests and build a results table
let results = ($tests | each {|test| 
    # Extract arguments from the command string to pass to the function
    # We split by space to simulate shell arguments
    let args = ($test.cmd | parse "from-date {args}" | get args.0 | split row " ")
    
    # Run the function
    let result_date = (from-date ...$args)
    
    # Calculate a Unix Timestamp (seconds) to verify math correctness
    let timestamp = ($result_date | format date "%s")

    {
        "Command": $test.cmd,
        "Description": $test.desc,
        "Result (ISO)": $result_date,
        "Timestamp": $timestamp
    }
})

# Display the table
$results | print

print "----------------------------------------------------------------"
print $"(ansi green)All tests completed.(ansi reset)"
