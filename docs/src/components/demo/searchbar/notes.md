# 0. User Stories for QA

### Global Keyboard Shortcuts & Trigger Opening
Description: Triggering the search modal open state via global keybindings or direct click.
> I press "Cmd + K" or "Ctrl + K" anywhere on the page
  • Default browser key behavior is prevented
  • The search modal opens
> I press "/" anywhere on the page while not focused on an input or textarea element
  • Default browser key behavior is prevented
  • The search modal opens
> I press "/" while focused inside an input or textarea element
  • The search modal does NOT open
  • The "/" character is typed into the focused input/textarea
> I click on the search bar trigger button
  • The click event coordinates (or trigger target bounding rectangle) are captured
  • The search modal opens

---

### Directional Animation Vector Calculation
Description: Calculating origin transform styles dynamically upon modal mount/opening.
> I open the modal from a specific click location on screen
  • Center coordinates of the modal panel and click coordinates are calculated
  • CSS custom properties (`--origin-x`, `--origin-y`, `--start-dx`, `--start-dy`) and `transformOrigin` are dynamically injected into the dialog element style attribute
  • `vectorsCalculated` signal is set to `true`
> The modal closes or unmounts
  • Dynamically injected style attributes (`--origin-x`, `--origin-y`, `--start-dx`, `--start-dy`, `transformOrigin`) are removed from the dialog element
  • `vectorsCalculated` signal resets to `false`

---

### Adaptable Panel Height and Smooth Layout Transition
Description: Dynamic height observing and snappy easing during content size shifts.
> The modal content changes height (e.g. switching views, filtering search results) while `isReady` (`vectorsCalculated`) is true
  • A `ResizeObserver` measures the inner content element offset height
  • Snappy easing transition (`height 220ms cubic-bezier(0.23, 1, 0.32, 1)`) is applied to the root container
  • Root container `height` style property updates to `contentHeight + paddingTop + paddingBottom`
> The animated panel component unmounts
  • The `ResizeObserver` disconnects
  • Inline `height` and `transition` CSS properties are cleaned up from the root element

---

### Search Input Handling & Clearing
Description: Entering text, auto-focusing, and clearing input state.
> The search modal opens
  • Search input element automatically receives focus (`autoFocus`)
> I type text into the search input
  • `query` signal updates with input value
  • `selectedResultIndex` resets to `0`
> I type text into search input when clear button was hidden
  • Clear button ("X") becomes visible once trimmed input query length > 0
> I click the clear button ("X")
  • `query` signal resets to an empty string (`""`)
  • Clear button disappears
  • View reverts back to default quick links grid

---

### Pagefind Search Execution & Fallback Data
Description: Executing dynamic search queries against Pagefind engine or static fallback data.
> I type a query while in a production environment (`!import.meta.env.DEV`)
  • `/pagefind/pagefind.js` is dynamically imported if not already loaded
  • `pagefind.search(query)` executes with the trimmed query
  • Top 10 search results are resolved asynchronously and mapped to `{ id, title, description, url, category, raw }`
  • Results list updates and active `selectedResultIndex` resets to `0`
> Pagefind search fails or returns an error
  • Error is logged to console
  • Search results gracefully fall back to an empty array
> Query is cleared back to empty in production or dev
  • Pagefind results list clears
  • Quick links view is rendered instead

---

### Text Search Highlighting
Description: Substring match background highlighting inside search result titles.
> A search result title contains a substring match for the active non-empty query
  • `HighlightText` component locates the first case-insensitive index match
  • Matched substring is highlighted with overlay background styling (`bg-[#FFEA0057]`)
  • Full foreground text remains unbroken and accessible
> Query does not match any substring in title or query is empty
  • Title renders cleanly as plain text without highlight spans

---

### Quick Links Navigation (Empty Query State)
Description: Mouse and keyboard navigation through quick links when input query is empty.
> I move my mouse over a quick link card
  • `selectedQuickLinkId` signal updates to the hovered card's ID
  • Card gains active highlighted background styling (`bg-shade-150`, slight translation, shadow)
> I press "ArrowDown" key while on empty search input
  • Default key action is prevented
  • Active selection advances to the next quick link item up to the last index
> I press "ArrowUp" key while on empty search input
  • Default key action is prevented
  • Active selection moves to the previous quick link item down to index 0

---

### Search Results Navigation (Active Query State)
Description: Mouse and keyboard navigation through filtered search results when query is active.
> Search query has active results and I move my mouse over a search result item
  • `selectedResultIndex` signal updates to match the hovered item's index
  • Item gains active highlighted background styling (`bg-shade-150`, slight translation, shadow)
> I press "ArrowDown" key while search results are displayed
  • Default key action is prevented
  • `selectedResultIndex` increments up to `filteredResults.length - 1`
> I press "ArrowUp" key while search results are displayed
  • Default key action is prevented
  • `selectedResultIndex` decrements down to `0`
> Search query yields no matching results
  • `NoResultsMessage` renders ("No results found for \"<query>\"")

---

### Modal Closing and State Reset
Description: Closing the modal and resetting all internal signals.
> I press "Esc" while modal is open
  • The search modal closes
> I click on the modal backdrop overlay
  • The search modal closes
> Modal finishes closing process
  • Search input query is reset (`query.value = ""`)
  • Selected quick link is reset (`selectedQuickLinkId.value = "get-started"`)
  • Directional vector calculation state is reset (`vectorsCalculated.value = false`)
