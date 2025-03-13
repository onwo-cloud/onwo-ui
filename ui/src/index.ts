export { HelloWorld } from './hello-world';
export { Button } from './button';

export { cn } from './utils/cn';

// Code this file using the qwik.js framework and typescript. AI!
// Tabs props
// Name 	Type 	Required 	Default 	Description
// id 	string 	Yes 	- 	The id of the live component (required by LiveView for stateful components).
// testid 	string 	No 	- 	Id attribute for DOM element
// class 	css_class 	No 	"justify-around gap-2" 	Additional Tailwind classes
// selected 	integer 	No 	0 	Index of seleted tab
// on_change 	event 	No 	- 	Event to happen when non-disabled tab is clicked
// header 	slot 	Yes 	- 	Tab header slot
// content 	slot 	No 	- 	Tab content slot
// default 	slot 	No 	- 	Default slot
export const Tabs = () => {};


// Tabs.Tab props
// Name 	Type 	Required 	Default 	Description
// id 	string 	No 	- 	Id attribute for DOM element
// disabled 	boolean 	No 	false 	If true, the tab is disabled
// class 	css_class 	No 	- 	Additional Tailwind classes
// testid 	string 	No 	- 	Data-testid attribute for DOM element
// unselected_class 	css_class 	No 	"after:scale-x-0 text-bulma" 	Additional Tailwind classes for unselected tab
// selected_class 	css_class 	No 	"after:scale-x-100 text-piccolo" 	Additional Tailwind classes for selected tab
// tabindex 	integer 	No 	- 	Will be got from Tabs.List in most cases
// is_selected 	boolean 	No 	- 	Will be got from Tabs.List in most cases
// size 	sm | md 	No 	- 	Will be got from Tabs.List in most cases
// on_change 	event 	No 	- 	Will be got from Tabs in most cases
// default 	slot 	Yes 	- 	Default slot 
export const Tab = () => {};

// Tabs.List props
// Name 	Type 	Required 	Default 	Description
// id 	string 	No 	- 	Id attribute for DOM element
// testid 	string 	No 	- 	Data-testid attribute for DOM element
// class 	css_class 	No 	- 	Additional Tailwind classes
// size 	sm | md 	No 	"md" 	Size of tabs
// selected 	integer 	No 	- 	Will be got from Tabs in most cases
// value 	integer 	No 	- 	Value of the tab
// tab_titles 	list 	No 	[] 	List of tab titles. They are rendered with tab_module. Only if no slot tabs assigned
// tab_module 	atom 	No 	Moon.Design.Tabs.Tab 	List of tab titles. THe are rendered with tab_module. Only if no slot tabs assigned
// on_change 	event 	No 	- 	Event to happen when non-disabled tab is clicked
// tabs 	slot 	No 	- 	Tabs slot
// default 	slot 	No 	- 	Default slot
// tab_title 	slot 	No 	- 	Slot for redering tab title when tab_tiltles given
export const List = () => {};


// Tabs.Pill props
// Name 	Type 	Required 	Default 	Description
// id 	string 	No 	- 	Id attribute for DOM element
// testid 	string 	No 	- 	Data-testid attribute for DOM element
// class 	css_class 	No 	- 	Additional Tailwind classes
// disabled 	boolean 	No 	false 	If true, the tab is disabled
// unselected_class 	css_class 	No 	"" 	Additional Tailwind classes for unselected tab
// selected_class 	css_class 	No 	"bg-goku" 	Additional Tailwind classes for selected tab
// tabindex 	integer 	No 	- 	Will be got from Tabs.List in most cases
// is_selected 	boolean 	No 	- 	Will be got from Tabs.List in most cases
// size 	sm | md 	No 	- 	Will be got from Tabs.List in most cases
// on_change 	event 	No 	- 	Will be got from Tabs in most cases
// default 	slot 	Yes 	- 	Content inside the tab
export const Pill = () => {};


// Tabs.Panels props
// Name 	Type 	Required 	Default 	Description
// id 	string 	No 	- 	Id attribute for DOM element
// testid 	string 	No 	- 	Data-testid attribute for DOM element
// class 	css_class 	No 	- 	Additional Tailwind classes
// selected 	integer 	No 	- 	Will be got from Tabs in most cases
// panels 	slot 	Yes 	- 	Panels slot
export const Panels = () => {};

// Tabs.Panel props
export const Panel = () => {};

// USAGE

//<Tabs>
//  <Tabs.List>
//    <Tabs.Tab>...</Tabs.Tab>
//    <Tabs.Tab>...</Tabs.Tab>
//    <Tabs.Tab>...</Tabs.Tab>
//  </Tabs.List>
//  <Tabs.Panels>
//    <Tabs.Panel>...</Tabs.Panel>
//    <Tabs.Panel>...</Tabs.Panel>
//    <Tabs.Panel>...</Tabs.Panel>
//  </Tabs.Panels>
//</Tabs>
//
//<Tabs id="tabs-ex-1">
//  <Tabs.List>
//    <Tabs.Tab>First tab</Tabs.Tab>
//    <Tabs.Tab>Second tab</Tabs.Tab>
//    <Tabs.Tab>Third tab</Tabs.Tab>
//  </Tabs.List>
//  <Tabs.Panels>
//    <Tabs.Panel>{lorem()}</Tabs.Panel>
//    <Tabs.Panel>{ipsum()}</Tabs.Panel>
//    <Tabs.Panel>{dolor()}</Tabs.Panel>
//  </Tabs.Panels>
//</Tabs>
//
//
//<Tabs id="tabs-with-pills">
//  <Tabs.List tab_titles={["First pill", "Second pill", "Third pill"]} tab_module={Tabs.Pill}/>
//  <Tabs.Panels>
//    <Tabs.Panel>{lorem()}</Tabs.Panel>
//    <Tabs.Panel>{ipsum()}</Tabs.Panel>
//    <Tabs.Panel>{dolor()}</Tabs.Panel>
//  </Tabs.Panels>
//</Tabs>
//
//
//<Tabs id="tabs-with-segments">
//  <Tabs.List tab_titles={["First pill", "Second pill", "Third pill"]} tab_module={Tabs.Segment}/>
//  <Tabs.Panels>
//    <Tabs.Panel>{lorem()}</Tabs.Panel>
//    <Tabs.Panel>{ipsum()}</Tabs.Panel>
//    <Tabs.Panel>{dolor()}</Tabs.Panel>
//  </Tabs.Panels>
//</Tabs>
//
