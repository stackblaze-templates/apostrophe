/**
 * Example custom widget for ApostropheCMS.
 * Widgets are reusable content blocks that editors can add to pages.
 * This module is auto-discovered by Apostrophe when listed in app.js modules.
 *
 * Add to app.js:
 *   modules: { "default-page": {}, "callout-widget": {} }
 */
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Callout",
    icon: "information-outline",
  },
  fields: {
    add: {
      heading: { type: "string", label: "Heading", required: true },
      body: { type: "area", label: "Body", options: { widgets: { "@apostrophecms/rich-text": {} } } },
      style: {
        type: "select",
        label: "Style",
        choices: [
          { label: "Info", value: "info" },
          { label: "Warning", value: "warning" },
          { label: "Success", value: "success" },
        ],
        def: "info",
      },
    },
    group: {
      basics: { label: "Basics", fields: ["heading", "body", "style"] },
    },
  },
};