import type { AOMNode } from "./types";

const BLOCK_ROLES = new Set([
  "main",
  "navigation",
  "complementary",
  "banner",
  "contentinfo",
  "region",
  "form",
  "dialog",
  "alertdialog",
  "list",
  "definition",
  "group",
  "radiogroup",
  "table",
  "grid",
  "tabpanel",
  "article",
  "feed",
  "search",
  "toolbar",
]);

export function findLabelForElement(el: HTMLElement): string {
  if (el.id) {
    try {
      const label = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
      if (label) return label.textContent?.trim() || "";
    } catch {
      // Ignore
    }
  }

  const parentLabel = el.closest("label");
  if (parentLabel) {
    const clone = parentLabel.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("input, select, textarea, button").forEach((c) => c.remove());
    const text = clone.textContent?.trim();
    if (text) return text;
  }

  return "";
}

export function buildAOMTree(container: HTMLElement): AOMNode[] {
  function traverse(node: Node): AOMNode | AOMNode[] | null {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.replace(/\s+/g, " ");
      if (!text || text.trim() === "") return null;

      const parentEl = node.parentElement as HTMLElement | null;
      const parentA11yId = parentEl?.getAttribute("data-a11y-id") || undefined;

      return {
        id: Math.random().toString(36).substring(2, 9),
        targetId: parentA11yId,
        tagName: "#text",
        role: "text",
        accessibleName: text.trim(),
        description: "",
        isHidden: false,
        isFocused: false,
        isDisabled: false,
        attributes: {},
        issues: [],
        children: [],
      };
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return null;

    const el = node as HTMLElement;
    const tagName = el.tagName.toLowerCase();

    if (["script", "style", "noscript", "svg", "path", "g"].includes(tagName)) {
      return null;
    }

    // ─── Skip Subtree via Data Attribute ─────────────────────────────
    if (el.hasAttribute("data-a11y-ignore") || el.hasAttribute("data-a11y-skip")) {
      return null;
    }
    // ─────────────────────────────────────────────────────────────────

    const style = window.getComputedStyle(el);
    const isHidden =
      el.hasAttribute("hidden") ||
      el.getAttribute("aria-hidden") === "true" ||
      style.display === "none" ||
      style.visibility === "hidden";

    if (isHidden) return null;

    // Attach deterministic DOM tracking ID
    let nodeId = el.getAttribute("data-a11y-id");
    if (!nodeId) {
      nodeId = Math.random().toString(36).substring(2, 9);
      el.setAttribute("data-a11y-id", nodeId);
    }

    const explicitRole = el.getAttribute("role")?.trim();
    let role = explicitRole || null;
    const inputType = el.getAttribute("type") || "text";

    if (!role) {
      if (tagName === "button" || (tagName === "input" && ["button", "submit", "reset"].includes(inputType))) {
        role = "button";
      } else if (tagName === "a" && el.hasAttribute("href")) {
        role = "link";
      } else if (/^h[1-6]$/.test(tagName)) {
        role = "heading";
      } else if (tagName === "input") {
        if (inputType === "checkbox") {
          role = el.getAttribute("role") === "switch" ? "switch" : "checkbox";
        } else if (inputType === "radio") {
          role = "radio";
        } else if (inputType === "number" || inputType === "range") {
          role = "spinbutton";
        } else {
          role = "textbox";
        }
      } else if (tagName === "textarea") {
        role = "textbox";
      } else if (tagName === "select") {
        role = el.hasAttribute("multiple") || parseInt(el.getAttribute("size") || "1", 10) > 1 ? "listbox" : "combobox";
      } else if (tagName === "option") {
        role = "option";
      } else if (tagName === "img") {
        role = el.getAttribute("alt") === "" ? "presentation" : "img";
      } else if (tagName === "ul" || tagName === "ol" || tagName === "menu") {
        role = "list";
      } else if (tagName === "li") {
        role = "listitem";
      } else if (tagName === "table") {
        role = "table";
      } else if (tagName === "tr") {
        role = "row";
      } else if (tagName === "td") {
        role = "cell";
      } else if (tagName === "th") {
        role = el.getAttribute("scope") === "row" ? "rowheader" : "columnheader";
      } else if (tagName === "details") {
        role = "group";
      } else if (tagName === "dialog") {
        role = "dialog";
      } else if (tagName === "progress") {
        role = "progressbar";
      } else if (["main", "nav", "aside", "header", "footer", "form", "section"].includes(tagName)) {
        if (tagName === "main") role = "main";
        else if (tagName === "nav") role = "navigation";
        else if (tagName === "aside") role = "complementary";
        else if (tagName === "header") role = "banner";
        else if (tagName === "footer") role = "contentinfo";
        else if (tagName === "form" || tagName === "section") {
          role = el.hasAttribute("aria-label") || el.hasAttribute("aria-labelledby") ? tagName : null;
        }
      }
    }

    // Accessible Name
    let accessibleName = "";
    const ariaLabelledBy = el.getAttribute("aria-labelledby");
    const ariaLabel = el.getAttribute("aria-label");

    if (ariaLabelledBy) {
      const labelEl = document.getElementById(ariaLabelledBy);
      if (labelEl) accessibleName = labelEl.textContent?.trim() || "";
    } else if (ariaLabel) {
      accessibleName = ariaLabel.trim();
    } else if (["input", "select", "textarea"].includes(tagName)) {
      accessibleName = findLabelForElement(el);
      if (!accessibleName && tagName === "input" && ["submit", "button", "reset"].includes(inputType)) {
        accessibleName = (el as HTMLInputElement).value || "";
      }
    } else if (tagName === "img") {
      accessibleName = el.getAttribute("alt") || "";
    } else if (el.hasAttribute("title")) {
      accessibleName = el.getAttribute("title") || "";
    } else if (el.hasAttribute("placeholder")) {
      accessibleName = el.getAttribute("placeholder") || "";
    }

    // Process Children
    const childrenNodes: AOMNode[] = [];
    Array.from(el.childNodes).forEach((childNode) => {
      const res = traverse(childNode);
      if (res) {
        if (Array.isArray(res)) childrenNodes.push(...res);
        else childrenNodes.push(res);
      }
    });

    if (!accessibleName && role) {
      const textParts: string[] = [];
      const extractText = (n: AOMNode) => {
        if (n.accessibleName && n.role === "text") textParts.push(n.accessibleName);
        n.children.forEach(extractText);
      };
      childrenNodes.forEach(extractText);
      accessibleName = textParts.join(" ").trim();
    }

    const isBlockRole = Boolean(role && BLOCK_ROLES.has(role));
    const isInteractive = Boolean(
      role &&
      ["button", "link", "textbox", "checkbox", "radio", "switch", "combobox", "spinbutton", "listitem", "heading", "img"].includes(role)
    );

    const hasTabindex = el.hasAttribute("tabindex") && parseInt(el.getAttribute("tabindex") || "-1", 10) >= 0;

    // FLATTEN NON-SEMANTIC CONTAINERS
    if (!role && !isInteractive && !hasTabindex && !isBlockRole) {
      return childrenNodes;
    }

    // Header badge computation for block roles
    let headerText = "";
    if (isBlockRole) {
      if (accessibleName) {
        headerText = accessibleName;
      } else if (role === "list") {
        const listItemsCount = childrenNodes.filter((c) => c.role === "listitem").length;
        headerText = `${listItemsCount} item${listItemsCount === 1 ? "" : "s"}`;
      }
    }

    // Description
    let description = el.getAttribute("aria-description") || "";
    const ariaDescribedBy = el.getAttribute("aria-describedby");
    if (ariaDescribedBy) {
      const descEl = document.getElementById(ariaDescribedBy);
      if (descEl) description = descEl.textContent?.trim() || "";
    }

    // Input Values
    let value = "";
    if (tagName === "input" || tagName === "textarea") {
      value = (el as HTMLInputElement).value || "";
      if (inputType === "password") {
        value = "•".repeat(value.length);
      }
    } else if (tagName === "select") {
      const selectEl = el as HTMLSelectElement;
      if (selectEl.selectedOptions && selectEl.selectedOptions.length > 0) {
        value = Array.from(selectEl.selectedOptions)
          .map((o) => o.textContent?.trim())
          .join(", ");
      }
    }

    const placeholder = el.getAttribute("placeholder") || undefined;

    // States
    const isFocused = document.activeElement === el;
    const isDisabled = el.hasAttribute("disabled") || el.getAttribute("aria-disabled") === "true";
    const isRequired = el.hasAttribute("required") || el.getAttribute("aria-required") === "true";
    const isInvalid = el.getAttribute("aria-invalid") === "true" || ((el as HTMLInputElement).validity && !(el as HTMLInputElement).validity.valid);

    const isExpanded = el.hasAttribute("open")
      ? (el as HTMLDetailsElement).open
      : el.hasAttribute("aria-expanded")
        ? el.getAttribute("aria-expanded") === "true"
        : null;

    const isPressed = el.hasAttribute("aria-pressed")
      ? el.getAttribute("aria-pressed") === "true"
      : null;

    let isChecked: "true" | "false" | "mixed" | null = null;
    if (el.hasAttribute("aria-checked")) {
      const val = el.getAttribute("aria-checked");
      isChecked = val === "mixed" ? "mixed" : val === "true" ? "true" : "false";
    } else if (tagName === "input" && (inputType === "checkbox" || inputType === "radio")) {
      const inputEl = el as HTMLInputElement;
      isChecked = inputEl.indeterminate ? "mixed" : inputEl.checked ? "true" : "false";
    }

    const isSelected = el.hasAttribute("aria-selected")
      ? el.getAttribute("aria-selected") === "true"
      : (el as HTMLOptionElement).selected ?? null;

    const level = /^h[1-6]$/.test(tagName)
      ? parseInt(tagName[1], 10)
      : el.hasAttribute("aria-level")
        ? parseInt(el.getAttribute("aria-level") || "0", 10)
        : null;

    const attributes: Record<string, string> = {};
    Array.from(el.attributes).forEach((attr) => {
      attributes[attr.name] = attr.value;
    });

    const issues: string[] = [];
    if (role === "img" && !accessibleName) {
      issues.push("Image element is missing an alt text or accessible name.");
    }
    if (["button", "link", "textbox", "checkbox", "radio", "combobox"].includes(role || "") && !accessibleName) {
      issues.push(`Interactive ${role} element has no accessible name.`);
    }

    return {
      id: nodeId,
      targetId: nodeId,
      tagName,
      role,
      accessibleName,
      description,
      value,
      placeholder,
      inputType,
      isHidden,
      isFocused,
      isDisabled,
      isRequired,
      isInvalid,
      isExpanded,
      isPressed,
      isChecked,
      isSelected,
      level,
      attributes,
      issues,
      children: childrenNodes,
      isBlockRole,
      headerText,
    };
  }

  const rootNodes: AOMNode[] = [];
  Array.from(container.children).forEach((child) => {
    const res = traverse(child);
    if (res) {
      if (Array.isArray(res)) rootNodes.push(...res);
      else rootNodes.push(res);
    }
  });

  return rootNodes;
}
